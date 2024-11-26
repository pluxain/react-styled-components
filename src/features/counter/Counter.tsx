import { useState } from "react";
import { Button } from "../../components";

type Props = {
  start: number;
  step?: number;
};

function Counter({ start, step = 1 }: Props) {
  const [count, setCount] = useState(start);
  return (
    <Button onClick={() => setCount((count) => count + step)}>
      count is {count}
    </Button>
  );
}

export { Counter };
