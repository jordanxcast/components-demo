import React from "react";
import styled from "styled-components";

export type LabelProps = {
	value: string;
};

export function Label(props: LabelProps) {
	const { value } = props;

	return <StyledLabel>{value}:</StyledLabel>;
}

export const StyledLabel = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.005em;
	color: #464f53;
`;
