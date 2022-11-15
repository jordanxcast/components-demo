import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BaseInput } from "./base-input";
import { BaseSelect } from '../base-select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/BaseInput",
	component: BaseInput,
} as ComponentMeta<typeof BaseInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseInput> = (args) => (
	<BaseInput {...args} />
);

export const WithPlaceholder = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithPlaceholder.args = {
	placeholder: "Type here...",
};

export const WithStartAdornment = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithStartAdornment.args = {
	startAdornment: "$",
};

export const WithEndAdornment = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithEndAdornment.args = {
	endAdornment: <>USD</>,
};

export const WithStartAndEndAdornment = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithStartAndEndAdornment.args = {
	startAdornment: "$",
	endAdornment: <BaseSelect options={[{label: 'option 1', value: '1'}, { label: 'option 2', value: '2'}]} />,
};
