import { defineConfig } from 'vite'
import path from 'path'
import { createVuePlugin } from 'vite-plugin-vue2';


// const { injectHtml } = require('vite-plugin-html');
// const resolveExternalsPlugin = require('vite-plugin-resolve-externals');

console.log(process.env.TZ)

// https://vitejs.dev/config/
export default defineConfig({
  //plugins: [vue()],
  plugins: [createVuePlugin()],
  base:"./",
  build:{
    outDir:"dist/lib",
    lib:{
      entry:path.resolve(__dirname, 'src/components/core/main.js'),
      name: 'boxui',
      fileName: (format) => `boxui.${format}.min.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
