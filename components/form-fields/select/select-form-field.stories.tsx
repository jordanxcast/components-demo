import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SelectFormField } from "./select-form-field";

export default {
	title: "Components/FormFields/Input",
	component: SelectFormField,
} as ComponentMeta<typeof SelectFormField>;

const Template: ComponentStory<typeof SelectFormField> = (args) => (
	<SelectFormField {...args} />
);

const exampleOptions = [
  {
    label: 'Option 1',
    value: 'option-1',
    key: 'option-1-key'
  },
  {
    label: 'Option 2',
    value: 'option-2',
    key: 'option-2-key'
  },
  {
    label: 'Option 3',
    value: 'option-3',
    key: 'option-3-key'
  }
]

export const SelectFormFieldExample = Template.bind({});
SelectFormFieldExample.args = {
	LabelProps: { value: "This is a label:",  htmlFor: "test-select-form-field-id" },
	SelectProps: { options: exampleOptions },
};