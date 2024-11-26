import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Card, DocBlock, Image, Link, Title } from "./components";
import { Counter } from "./features/counter";

function App() {
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
        <div className="flex justify-around items-center gap-4">
          <Counter start={1} />
          <Counter start={0} step={2} />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <DocBlock>Click on the Vite and React logos to learn more</DocBlock>
    </>
  );
}

export default App;
