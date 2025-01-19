import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./provider/theme-provider.tsx";
import NavigationProvider from "./provider/navigation-provider.tsx";
import { HeroUIProvider } from "@heroui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
      <ThemeProvider>
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </ThemeProvider>
    </HeroUIProvider>
  </StrictMode>
);
