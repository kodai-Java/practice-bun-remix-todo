import type { MetaFunction } from "@remix-run/node";
import TodoApp from "~/components/TodoApp";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <TodoApp />;
}
