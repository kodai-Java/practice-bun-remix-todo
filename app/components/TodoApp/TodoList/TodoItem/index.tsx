import { FC } from "react";
import { Todo } from "../../Todo";
import { Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
        >
          <DeleteIcon />
        </IconButton>
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
