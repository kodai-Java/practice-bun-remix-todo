import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// storybookはViteプラグインを除外して使用する
const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig({
  plugins: [
    tailwindcss(),
    !isStorybook &&
      remix({
        ignoredRouteFiles: ["**/*.css"],
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
        },
      }),
    tsconfigPaths(),
  ],
});
