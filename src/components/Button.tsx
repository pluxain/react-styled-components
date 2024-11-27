import { styled } from "styled-components";

type ButtonProps = {
  $primary?: boolean;
};

const Button = styled.button<ButtonProps>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

  border-radius: 8px;
  border: 2px solid #bf4f74;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
  text-decoration: none;

  &:hover {
    border-color: ${(props) => (props.$primary ? "white" : "#BF4F74")};
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  background: ${(props) => (props.$primary ? "tomato" : "white")};
  color: ${(props) => (props.$primary ? "white" : "tomato")};
  border-color: tomato;

  &:hover {
    border-color: ${(props) => (props.$primary ? "white" : "tomato")};
  }
`;

export { Button, TomatoButton };
