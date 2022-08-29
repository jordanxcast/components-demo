import React, { useState } from "react";
import styled from "styled-components";

export type BaseInputProps = {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	type?: string;
};

export function BaseInput(props: BaseInputProps) {
	const { value, onChange, placeholder, type = "text" } = props;

	return (
		<StyledInput
			type={type}
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
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	display: flex;
	align-items: center;
	letter-spacing: 0.005em;
`;
