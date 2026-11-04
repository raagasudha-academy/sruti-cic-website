import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/registration": {
        target: "https://yoqmcdy384.execute-api.us-east-1.amazonaws.com",
        changeOrigin: true,
        headers: {
          Origin: "https://sruti.co.uk",
        },
      },
    },
  },
});