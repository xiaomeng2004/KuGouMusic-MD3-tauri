import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from 'vite-plugin-vue-devtools'

// @ts-expect-error process 是 Node.js 的全局变量
const host = process.env.TAURI_DEV_HOST;

// Vite 配置文档：https://vite.dev/config/
export default defineConfig(async () => ({
  plugins: [vue(), vueDevTools()],

  // 这些 Vite 选项为 Tauri 开发定制，仅在 `tauri dev` 或 `tauri build` 时应用
  //
  // 1. 防止 Vite 混淆或隐藏 Rust 报错
  clearScreen: false,
  // 2. Tauri 期望使用固定端口；如果该端口不可用则应失败
  server: {
    port: 11420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 11421,
        }
      : undefined,
    watch: {
      // 3. 告诉 Vite 忽略监视 `src-tauri` 目录
      ignored: ["**/src-tauri/**"],
    },
  },
}));
