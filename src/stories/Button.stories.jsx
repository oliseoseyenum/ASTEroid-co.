import React from "react";

import { Button as ButtonComponent, Img } from "components";

export default {
  title: "technology_wesite/Buttons",
  component: ButtonComponent,
  argTypes: {
    children: { control: "text" },
    leftIcon: {
      table: {
        disable: true,
      },
    },
    rightIcon: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});

Button.args = {
  shape: "RoundedBorder17",
  color: "deep_orange_A700_1e",
  size: "sm",
  variant: "fill",
  children: "Button",
  className: "flex items-center justify-center",
};

export const LeftIconButton = Template.bind({});

LeftIconButton.args = {
  shape: "RoundedBorder17",
  color: "deep_orange_A700_1e",
  size: "sm",
  variant: "fill",
  children: "Button",
  className: "flex items-center justify-center",
  leftIcon: (
    <Img
      src="images/defaultNoData.png"
      alt="img"
      className="w-[25px] float-left mr-[10px]"
    />
  ),
};

export const RightIconButton = Template.bind({});

RightIconButton.args = {
  shape: "RoundedBorder17",
  color: "deep_orange_A700_1e",
  size: "sm",
  variant: "fill",
  children: "Button",
  className: "flex items-center justify-center",
  rightIcon: (
    <Img
      src="images/defaultNoData.png"
      alt="img"
      className="w-[25px] float-right ml-[10px]"
    />
  ),
};
