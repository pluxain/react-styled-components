import { styled } from "styled-components";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const StyleButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

function Button({ children, onClick }: Props) {
  return <StyleButton onClick={onClick}>{children}</StyleButton>;
}

export { Button };
