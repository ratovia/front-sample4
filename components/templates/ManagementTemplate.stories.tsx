import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ManagementTemplate } from "./ManagementTemplate";
import { Header } from "../molecules/Header/header";
import { Navigation } from "../organisms/Navigation/Navigation";
import BasicTable from "../organisms/MainContent/MainContent";

export default {
  title: "templates/ManagementTemplate",
  component: ManagementTemplate,
} as ComponentMeta<typeof ManagementTemplate>;

const Template: ComponentStory<typeof ManagementTemplate> = (args) => (
  <ManagementTemplate {...args} />
);

const Blank: React.FC = () => {
  return <div style={{ backgroundColor: "gray" }}></div>;
};

export const Primary = Template.bind({});
Primary.args = {
  appBar: <Header />,
  navigation: <Navigation></Navigation>,
  mainContent: <BasicTable></BasicTable>,
};
Primary.parameters = {
  layout: "fullscreen",
};
