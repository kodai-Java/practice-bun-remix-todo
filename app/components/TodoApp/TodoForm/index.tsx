import { FC, useState } from "react";
import { Button, TextField } from "@mui/material";

type Props = {
  addTodo: (task: string) => void;
};

export const TodoForm: FC<Props> = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <TextField
        variant="outlined"
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo"
        className="mr-2"
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
