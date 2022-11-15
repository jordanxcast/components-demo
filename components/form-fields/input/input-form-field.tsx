import React from "react";

import { BaseInput, BaseInputProps } from "../../base-input/base-input";
import { Label, LabelProps } from "../../label";
import { FormFieldWrapper } from "../form-field-wrapper";
import { FormField } from "../form-field/form-field";

export type InputFormFieldProps = {
	InputProps: BaseInputProps;
	LabelProps: LabelProps;
};
export function InputFormField(props: InputFormFieldProps) {
	const { InputProps, LabelProps } = props;

	return (
		<FormFieldWrapper>
			<Label {...LabelProps} />
			<FormField>
				<BaseInput {...InputProps} />
			</FormField>
		</FormFieldWrapper>
	);
}
