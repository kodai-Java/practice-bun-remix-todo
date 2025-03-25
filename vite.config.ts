import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// storybookはViteプラグインを除外して使用する
const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig({
  ssr: {
    noExternal: ["react-router"],
  },
  plugins: [tailwindcss(), !isStorybook && reactRouter(), tsconfigPaths()],
});
