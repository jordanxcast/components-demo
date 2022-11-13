import React from "react";
import styled from "styled-components";

export type BaseInputProps = {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	type?: string;
	id: string;
};

// TODO: add all current functionality from back-office input here (ex. adornments)
export function BaseInput(props: BaseInputProps) {
	const { value, onChange, placeholder, type = "text", id } = props;

	return (
		<StyledBaseInput
			id={id}
			type={type}
			value={value}
			placeholder={placeholder}
			onChange={({ target }) => onChange(target.value)}
		/>
	);
}

export const StyledBaseInput = styled.input`
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
