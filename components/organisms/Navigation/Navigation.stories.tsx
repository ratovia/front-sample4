import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navigation } from "./Navigation";

export default {
  title: "organisms/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation />
);

export const Primary = Template.bind({});
Primary.args = {};
