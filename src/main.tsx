import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HeroUIProvider } from "@heroui/react";
import NavigationProvider from "./provider/navigation-provider.tsx";
import { ThemeProvider } from "./provider/theme-provider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <NavigationProvider>
            <App />
          </NavigationProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HeroUIProvider>
  </StrictMode>
);
