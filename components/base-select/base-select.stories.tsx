import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BaseSelect } from "./base-select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/BaseSelect",
	component: BaseSelect,
} as ComponentMeta<typeof BaseSelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseSelect> = (args) => (
	<BaseSelect {...args} />
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

export const BaseSelectExample = Template.bind({});

BaseSelectExample.args = {
  options: exampleOptions
}
