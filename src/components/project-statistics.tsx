import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
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
import { Tables } from "../__generated__/database.types";

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

interface Props {
  project: Tables<"projects">;
}

export default function ProjectStatistics({ project }: Props) {
  const pieChartRef = useRef<HTMLCanvasElement>(null);
  const { appliedTheme } = useContext(ThemeContext);

  const { isLoading: isLoadingLanguages, data: languagesData } = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ["LANGUAGES", project.repository_name],
    queryFn: async ({
      queryKey: [, respository_name],
    }: QueryFunctionContext<[string, string]>) => {
      const languages = await octokitClient.request(
        "GET /repos/{owner}/{repo}/languages",
        {
          owner: "devlotfi",
          repo: respository_name,
        }
      );
      return languages;
    },
  });

  const { isLoading: isLoadingRepository, data: repositoryData } = useQuery({
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
