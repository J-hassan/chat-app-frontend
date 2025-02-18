import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // This is the path that will be proxied
        target: "https://chat-app-backend-three-xi.vercel.app", // Your backend server URL
        changeOrigin: true, // Required for CORS to work
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: Remove the /api prefix
      },
    },
  },
});
