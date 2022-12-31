import styled from "styled-components"

export function Button(props: any, children: any) {
  return <UiButton>{children}</UiButton>
}
const UiButton = styled.button`
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.color === "red" ? "var(--red)" : "none")};
  border-radius: 8px;
  height: 32px;
  width: 32px;
  &:hover {
    background: ${(props) =>
      props.color === "red" ? "var(--red-hover)" : "none"};
  }
`
