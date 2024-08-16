import type { MetaFunction } from "@remix-run/node";
import { TodoApp } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Todo" },
    { name: "description", content: "Welcome to remix!" },
  ];
};

export default function Index() {
  return <TodoApp />;
}
