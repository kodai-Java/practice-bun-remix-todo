import { FC } from "react";
import List from "@mui/material/List";
import { Todo } from "../Todo";
import TodoItem from "../TodoItem";

type Props = {
  todos: Todo[];
  toggleComplete: (index: number) => void;
  removeTodo: (index: number) => void;
};
export const TodoList: FC<Props> = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
};

export default TodoList;
