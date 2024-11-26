import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Button, Card, DocBlock, Image, Link, Title } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Link to="https://vite.dev">
          <Image src={viteLogo} alt="Vite logo" />
        </Link>
        <Link to="https://react.dev">
          <Image src={reactLogo} alt="React logo" />
        </Link>
      </div>
      <Title>Vite + React</Title>
      <Card>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <DocBlock>Click on the Vite and React logos to learn more</DocBlock>
    </>
  );
}

export default App;
