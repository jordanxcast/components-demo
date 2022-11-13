import React from "react";
import styled from "styled-components";

type SelectOption = {
  value: string;
  label: string;
  key?: string;
}

export type BaseSelectProps = {
  options: SelectOption[];
};

export function BaseSelect(props: BaseSelectProps) {
  const { options } = props;

  return (
    <StyledBaseSelect>
      {options.map(({value, label, key}) => (
        <option value={value} key={key ?? `${value}-${label}`}>{label}</option>
      ))}
    </StyledBaseSelect>
  );
}

export const StyledBaseSelect = styled.select`
  padding: 12px 20px;
	border: 1px solid #a0a8ab;
	border-radius: 6px;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	display: flex;
	align-items: center;
	letter-spacing: 0.005em;

  /* custom arrow styles */
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
`;