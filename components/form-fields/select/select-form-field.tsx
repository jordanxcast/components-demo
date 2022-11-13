import React from "react";

import { BaseSelect, BaseSelectProps } from "../../base-select";
import { Label, LabelProps } from "../../label";
import { FormFieldWrapper } from "../form-field-wrapper";
import { FormField } from "../form-field/form-field";

export type SelectFormFieldProps = {
	SelectProps: BaseSelectProps;
	LabelProps: LabelProps;
};
export function SelectFormField(props: SelectFormFieldProps) {
	const { SelectProps, LabelProps } = props;

	return (
		<FormFieldWrapper>
			<Label {...LabelProps} />
			<FormField>
				<BaseSelect {...SelectProps} />
			</FormField>
		</FormFieldWrapper>
	);
}