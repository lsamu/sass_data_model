import { defineConfig } from "vite";
import path from "path";
import { createVuePlugin } from "vite-plugin-vue2";
import copy from "rollup-plugin-copy";

// const { injectHtml } = require('vite-plugin-html');
// const resolveExternalsPlugin = require('vite-plugin-resolve-externals');

/*
const copyConfig = copy({
  targets: [
    {
      src: "./test.txt",
      dest: "./dist",
    },
  ],
});
*/
// https://vitejs.dev/config/
export default defineConfig({
  //plugins: [vue()],
  plugins: [createVuePlugin()],
  base: "./",
  build: {
    emptyOutDir: false,
    chunkSizeWarningLimit: 1024 * 5,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      //external: ["vue", "vue-router","vuex","@vue/composition-api", "element-ui", "echart"],
      //external: ["BoxUI"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  define: {
    "process.env": process.env,
  },
  server: {
    port: 8080,
  },
});
