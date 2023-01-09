import React from "react";

import { Button } from "./Button";

export default {
  title: "My Awesome Stories",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Log In",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Log Out",
};
