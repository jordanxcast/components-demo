import React from "react";
import styled from "styled-components";

export type FormFieldProps = {
	children: React.ReactNode;
};

export function FormField(props: FormFieldProps) {
	const { children } = props;

	return <StyledFormField>{children}</StyledFormField>;
}

export const StyledFormField = styled.div`
	display: grid;
	grid-column: 2 / span 3;
`;
