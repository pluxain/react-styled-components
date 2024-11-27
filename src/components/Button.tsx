import { styled } from "styled-components";

type StyledButtonProps = {
  $primary?: boolean;
};

type ButtonProps = StyledButtonProps & {
  children: React.ReactNode;
  onClick: () => void;
};

const StyledButton = styled.button<StyledButtonProps>`
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

  &:hover {
    border-color: ${(props) => (props.$primary ? "white" : "#BF4F74")};
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

function Button({ children, onClick, $primary }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} $primary={$primary}>
      {children}
    </StyledButton>
  );
}

export { Button };
