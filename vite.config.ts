import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Explicit base for GitHub Pages deployment under https://wimiiiiiii.github.io/portfolio/
// Using a fixed string avoids relying on env vars during the Pages build.
// If you ever rename the repo, update this to match the new repo folder.
const base = "/portfolio/";

export default defineConfig({
  plugins: [react()],
  base,
});
