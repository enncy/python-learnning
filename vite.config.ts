import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";

import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: "../python-learning-server/src/main/resources/static/dist",
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes("node_modules")) {
    //         return id.toString().split("node_modules/")[1].split("/")[0];
    //       } else {
    //         const _id = path
    //           .resolve(id)
    //           .replace(path.resolve(__dirname), "")
    //           .split("\\")
    //           .filter((s) => s)
    //           .join("_");
    //         return _id.substring(0, _id.lastIndexOf("?"));
    //       }
    //     },
    //   },
    // },
  },
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      root: path.resolve(__dirname),
      app: path.resolve(__dirname, "./app"),
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
      /* options */
    }),
  ],
});
