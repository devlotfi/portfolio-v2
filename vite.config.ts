import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-v2/",
  build: {
    outDir: "./docs",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("@heroui")) {
            return "heroui";
          } else if (id.includes("@supabase/supabase-js")) {
            return "supabase";
          }
        },
      },
    },
  },
});
