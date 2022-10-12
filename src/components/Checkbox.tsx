import React, { ComponentProps, HTMLProps } from "react";
import styled, { StyledComponent, StyledComponentProps } from "styled-components";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? "salmon" : "papayawhip")};
  border-radius: 3px;
  transition: all 150ms;
`;

type Props = ComponentProps<StyledComponent<"input", any, {}>> & {
  checked: boolean;
};

const Checkbox: React.FC<Props> = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox {...props} type='checkbox' checked={checked} />
    <StyledCheckbox checked={checked} />
  </CheckboxContainer>
);

export default Checkbox;
