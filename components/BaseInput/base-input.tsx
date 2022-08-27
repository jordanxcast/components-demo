import React, { useState } from "react";
import styled from "styled-components";

export type BaseInputProps = {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
};

export function BaseInput(props: BaseInputProps) {
	const { value, onChange, placeholder } = props;

	return (
		<StyledInput
			value={value}
			placeholder={placeholder}
			onChange={({ target }) => onChange(target.value)}
		/>
	);
}

export const StyledInput = styled.input`
	padding: 12px 20px;
	border: 1px solid #a0a8ab;
	border-radius: 6px;
`;
