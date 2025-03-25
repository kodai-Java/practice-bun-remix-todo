import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("todo", "./routes/todo/index.tsx"),
  // pattern ^           ^ モジュールファイル
] satisfies RouteConfig;
