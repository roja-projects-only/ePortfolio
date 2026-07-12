import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/ePortfolio/",
  // ── IMPORTANT: Change the base path to match your GitHub repository name ──
  // - If your repo is at github.com/username/ePortfolio, use "/ePortfolio/"
  // - If deploying to a user site (username.github.io), use "/"
  // - The trailing slash is required
});
