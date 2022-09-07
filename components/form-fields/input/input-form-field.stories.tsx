import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputFormField } from "./input-form-field";

export default {
	title: "Components/FormFields/Input",
	component: InputFormField,
} as ComponentMeta<typeof InputFormField>;

const Template: ComponentStory<typeof InputFormField> = (args) => (
	<InputFormField {...args} />
);

export const InputFormFieldExample = Template.bind({});
InputFormFieldExample.args = {
	label: "This is a label",
};
