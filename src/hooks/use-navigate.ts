import { useContext } from "react";
import { NavigationContext } from "../context/navigation-context";
import { PagesConfig } from "../pages-config";
import { NavigationPages } from "../types/navigation-pages";

export default function useNavigate() {
  const { navigationData, setNavigationData } = useContext(NavigationContext);

  const navigate = (page: NavigationPages) => {
    if (navigationData.isNavigating || navigationData.page === page) {
      return;
    }

    const nextPage = PagesConfig[page];

    setNavigationData({
      ...navigationData,
      zoomedOut: true,
      isNavigating: true,
      sidebarOpen: false,
    });
    setTimeout(() => {
      setNavigationData((navigationData) => ({
        ...navigationData,
        transformOrigin: nextPage.transformOrigin,
        translateOffset: nextPage.translateOffset,
        backgroundOffset: nextPage.backgroundOffset,
        page,
      }));

      setTimeout(() => {
        setNavigationData((navigationData) => ({
          ...navigationData,
          zoomedOut: false,
        }));

        setTimeout(() => {
          setNavigationData((navigationData) => ({
            ...navigationData,
            isNavigating: false,
          }));
        }, 1000);
      }, 1000);
    }, 1000);
  };

  return { navigate };
}
