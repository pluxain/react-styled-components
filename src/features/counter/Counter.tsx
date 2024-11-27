import { useState } from "react";
import { Button } from "../../components";
import styled from "styled-components";

type Props = {
  start: number;
  step?: number;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function Counter({ start, step = 1 }: Props) {
  const [count, setCount] = useState(start);
  return (
    <Wrapper>
      <Button $primary onClick={() => setCount((count) => count + step)}>
        count is {count}
      </Button>
      <small>
        start at {start} and has a {step} increment
      </small>
    </Wrapper>
  );
}

export { Counter };
