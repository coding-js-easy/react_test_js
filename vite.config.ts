/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import million from "million/compiler";
import { defineConfig, loadEnv } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    plugins: [
      million.vite({ auto: true }),
      react(),
      checker({ typescript: true, eslint: { lintCommand: "eslint src" } }),
      tsconfigPaths(),
    ],
    server: {
      open: true,
      port: 4321,
    },
    define: {
      "process.env": env,
    },
  });
};
