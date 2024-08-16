import { FC, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Container from "@mui/material/Container";
import { Todo } from "./Todo";
import { useTodoFunctions } from "./hooks/useTodoFunctions";

export const TodoApp: FC = () => {
  // 状態で永続化してみる
  const [todos, setTodos] = useState<Todo[]>([]);

  const { addTodo, removeTodo, toggleComplete } = useTodoFunctions({
    todos,
    setTodos,
  });

  return (
    <Container maxWidth="sm" className="p-4 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </Container>
  );
};

export default TodoApp;
