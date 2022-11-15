import React from "react";
import styled from "styled-components";

export type BaseInputProps = {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	type?: string;
	id: string;
	startAdornment?: React.ReactNode;
	endAdornment?: React.ReactNode;
	disabled?: boolean;
};

// TODO: add all current functionality from back-office input here (ex. adornments)
export function BaseInput(props: BaseInputProps) {
	const { value, onChange, placeholder, type = "text", id, startAdornment, endAdornment, disabled } = props;

	return (
		<BaseInputWrapper>
			<StyledBaseInput
			disabled={disabled}
				id={id}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={({ target }) => onChange(target.value)}
			/>
			{startAdornment && <StartAdornment>{startAdornment}</StartAdornment>}
			{endAdornment && <EndAdornment>{endAdornment}</EndAdornment>}
		</BaseInputWrapper>
	);
}

export const StyledBaseInput = styled.input`
	display: flex;
	align-items: center;
	width: inherit;
	padding: 12px 20px;
	border: 1px solid #a0a8ab;
	border-radius: 6px;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.005em;

	:focus {
		border: 1px solid black;
	}

	:disabled { 
		background-color: #f2f3f4;
	}
`;

const BaseInputWrapper = styled.div`
	width: -webkit-fill-available;
	position: relative;
`

const StartAdornment = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 20px;
`

const EndAdornment = styled.div`
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);
`
