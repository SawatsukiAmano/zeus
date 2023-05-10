import { defineConfig } from "vite";
import path from 'path'
import vue from "@vitejs/plugin-vue";
import { Plugin as importToCDN } from "vite-plugin-cdn-import";
import IconsResolver from "unplugin-icons/resolver";
import Icons from 'unplugin-icons/vite'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";


export default defineConfig({
  resolve: {
    alias: {// 项目别名
      '@': path.resolve(__dirname, 'src'),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@views": path.resolve(__dirname, "src/views"),
      "@store": path.resolve(__dirname, "src/store"),
      "@plugins": path.resolve(__dirname, "src/plugins"),
      "@utils": path.resolve(__dirname, "src/utils")
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        IconsResolver({
          prefix: "Icon",
        }),
      ],
    }),
 
    Icons({
      compiler: 'vue3', // 编译方式
      autoInstall: true,
    }),
    importToCDN({
      //CDN只会在build时生效，yarn dev不生效
      modules: [
        {
          name: "axios",
          var: "Axios",
          path: "https://unpkg.com/axios/dist/axios.min.js",
        },
        {
          name: "vue",
          var: "Vue",
          path: "//unpkg.com/vue@next",
        },
        {
          name: "vuex",
          var: "Vuex",
          path: "//unpkg.com/vuex@next",
        },
        {
          name: "vue-class-component",
          var: "VueClassComponent",
          path: "//unpkg.com/vue-class-component@next",
        }
      ],
    }),
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets", //指定静态资源存放路径
  }
});
