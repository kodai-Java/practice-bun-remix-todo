import { Todo } from "../../Todo";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
/** ToDoアプリで使用する関数を定義する */
export const useTodoFunctions = ({ todos, setTodos }: Props) => {
  const addTodo = (task: string) =>
    setTodos([...todos, { task, isCompleted: false }]);

  const toggleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) =>
    setTodos(todos.filter((_, i) => i !== index));
  return {
    addTodo,
    toggleComplete,
    removeTodo,
  };
};
