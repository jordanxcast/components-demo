import React from "react";
import styled from "styled-components";
import { BaseInput, BaseInputProps } from "../../base-input/base-input";
import { Label, LabelProps } from "../../label";
import { FormFieldWrapper } from "../form-field-wrapper";

export type InputFormFieldProps = {
	value: BaseInputProps["value"];
	onChange: BaseInputProps["onChange"];
	placeholder?: BaseInputProps["placeholder"];
	type?: BaseInputProps["type"];
	label: LabelProps["value"];
};

export function InputFormField(props: InputFormFieldProps) {
	const { value, onChange, placeholder, type = "text", label } = props;

	return (
		<FormFieldWrapper>
			<Label value={label} />
			<BaseInput
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={(updatedValue) => onChange(updatedValue)}
			/>
		</FormFieldWrapper>
	);
}
