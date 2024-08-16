import type { Meta, StoryObj } from "@storybook/react";
import { TodoForm } from "./index";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof TodoForm> = {
  component: TodoForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof TodoForm>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
