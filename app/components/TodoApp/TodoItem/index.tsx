import { FC } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import { Todo } from "../Todo";

type Props = {
  todo: Todo;
  index: number;
  toggleComplete: (index: number) => void;
  removeTodo: (index: number) => void;
};
export const TodoItem: FC<Props> = ({
  todo,
  index,
  toggleComplete,
  removeTodo,
}) => {
  return (
    <ListItem
      className={`flex items-center ${
        todo.isCompleted ? "line-through text-gray-500" : ""
      }`}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => removeTodo(index)}
        ></IconButton>
      }
    >
      <Checkbox
        checked={todo.isCompleted}
        onChange={() => toggleComplete(index)}
      />
      <ListItemText primary={todo.task} />
    </ListItem>
  );
};

export default TodoItem;
