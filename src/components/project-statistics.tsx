import { useQuery } from "@tanstack/react-query";
import Chart from "chart.js/auto";
import { useContext, useEffect, useRef } from "react";
import { octokitClient } from "../octokit-client";
import { Spinner } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCodeCompare,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Heading } from "./heading";
import { ThemeContext } from "../context/theme-context";
import { ThemeOptions } from "../types/theme-options";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function StatisticsValue({
  name,
  icon,
  value,
  isLoading,
}: {
  isLoading: boolean;
  name: string;
  value?: number;
  icon: IconProp;
}) {
  return (
    <div className="flex flex-1 py-[2rem] bg-background-light-100 dark:bg-background-dark-100 justify-center items-center border border-divider rounded-lg">
      {value !== undefined && !isLoading ? (
        <div className="flex relative flex-col items-center justify-center">
          <FontAwesomeIcon
            className="flex absolute bottom-[-1rem] text-[7rem] text-primary opacity-20"
            style={{
              maskImage: "linear-gradient(to bottom, red, transparent 65%)",
            }}
            icon={icon}
          ></FontAwesomeIcon>
          <div className="flex z-10 text-[30pt] leading-[2.2rem] font-black bg-primary-gradient bg-clip-text text-transparent">
            {value}
          </div>
          <div className="flex z-10 text-[20pt] font-semibold font-['Roboto_Serif']">
            {name}
          </div>
        </div>
      ) : (
        <Spinner size="lg" color="primary"></Spinner>
      )}
    </div>
  );
}

export default function ProjectStatistics() {
  const pieChartRef = useRef<HTMLCanvasElement>(null);
  const { appliedTheme } = useContext(ThemeContext);

  const { isLoading: isLoadingRateLimit, data: rateLimitData } = useQuery({
    queryKey: ["RATE_LIMIT"],
    queryFn: async () => {
      const response = await octokitClient.rateLimit.get();
      return response;
    },
  });

  const { isLoading: isLoadingLanguages, data: languagesData } = useQuery({
    enabled:
      !isLoadingRateLimit &&
      rateLimitData &&
      rateLimitData?.data.rate.remaining >= 5,
    refetchOnWindowFocus: false,
    queryKey: ["LANGUAGES"],
    queryFn: async () => {
      const languages = await octokitClient.request(
        "GET /repos/{owner}/{repo}/languages",
        {
          owner: "devlotfi",
          repo: "etu-access",
        }
      );
      return languages;
    },
  });

  const { isLoading: isLoadingRepository, data: repositoryData } = useQuery({
    enabled:
      !isLoadingRateLimit &&
      rateLimitData &&
      rateLimitData?.data.rate.remaining >= 5,
    refetchOnWindowFocus: false,
    queryKey: ["REPOSITORY"],
    queryFn: async () => {
      const repositoryDetails = await octokitClient.repos.get({
        owner: "devlotfi",
        repo: "etu-access",
      });
      return repositoryDetails;
    },
  });

  useEffect(() => {
    let chart: Chart;

    if (pieChartRef.current && languagesData) {
      const keys = Object.keys(languagesData.data);
      const values = keys.map((key) => languagesData.data[key]);

      console.log(keys, values);

      chart = new Chart(pieChartRef.current, {
        type: "doughnut",
        options: {
          responsive: true,
          color: appliedTheme === ThemeOptions.LIGHT ? "#2c4271" : "#dbe7f3",
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 18,
                },
              },
            },
          },
        },
        data: {
          labels: keys,
          datasets: [
            {
              label: "Languages",
              data: values,
              borderRadius: 5,
              spacing: 5,
            },
          ],
        },
      });
    }

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [appliedTheme, languagesData]);

  if (
    !isLoadingRateLimit &&
    rateLimitData &&
    rateLimitData.data.rate.remaining < 5
  ) {
    return (
      <div className="flex flex-col text-center gap-2 px-[1rem] flex-1 justify-center items-center">
        <FontAwesomeIcon
          className="text-[50pt]"
          icon={faGithub}
        ></FontAwesomeIcon>
        <div className="flex text-[20pt] font-bold">Rate limit exceede</div>
        <div className="flex text-[12pt] opacity-80">
          The public Github API allow only 60 request/hour for each IP
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 p-[1rem] gap-3">
      <div className="flex flex-1 gap-3">
        <StatisticsValue
          icon={faStar}
          name="Stars"
          value={repositoryData?.data.stargazers_count}
          isLoading={isLoadingRepository}
        ></StatisticsValue>
        <StatisticsValue
          icon={faCodeCompare}
          name="Forks"
          value={repositoryData?.data.forks_count}
          isLoading={isLoadingRepository}
        ></StatisticsValue>
      </div>

      <div className="flex flex-1 bg-background-light-100 dark:bg-background-dark-100 flex-col justify-center items-center p-[2rem] border border-divider rounded-lg">
        <Heading classNames={{ wrapper: "mb-[2rem]" }} icon={faCode}>
          Languages
        </Heading>
        {!isLoadingLanguages && languagesData ? (
          <div className="flex justify-center lg:items-center relative w-[100%] lg:w-auto h-[100dvh] lg:h-[100%] lg:aspect-square">
            <canvas ref={pieChartRef}></canvas>
          </div>
        ) : (
          <Spinner size="lg" color="primary"></Spinner>
        )}
      </div>
    </div>
  );
}
