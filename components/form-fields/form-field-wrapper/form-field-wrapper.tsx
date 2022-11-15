import React from "react";
import styled from "styled-components";

export type FormFieldWrapperProps = {
	children: React.ReactNode;
};

export function FormFieldWrapper(props: FormFieldWrapperProps) {
	const { children } = props;

	return <StyledFormFieldWrapper>{children}</StyledFormFieldWrapper>;
}

export const StyledFormFieldWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	width: 100%;
	grid-column-gap: 24px;
	align-items: center;
`;
