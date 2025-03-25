import type { MetaFunction } from "react-router";
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
