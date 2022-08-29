import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Label } from "./label";

export default {
	title: "Components/Label",
	component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const FormFieldLabel = Template.bind({});
FormFieldLabel.args = {
	value: "Label",
};
