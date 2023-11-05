// @ts-nocheck
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "node:path";
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      DEV_PORT: env.VITE_APP_DEV_PORT,
    },
    server: {
      port: env.VITE_APP_DEV_PORT || 3001,
    },
    test: {
      global: true,
    },
    plugins: [vue()],
    optimizeDeps: {},
    resolve: {
      alias: {
        "@":path.resolve(__dirname,'./src')
      },
    },
  };
});
