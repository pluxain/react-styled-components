import { styled } from "styled-components";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import {
  Button,
  Card,
  DocBlock,
  Link,
  Logo,
  StyledLink,
  Title,
} from "./components";
import { Counter } from "./features/counter";
import { TomatoButton } from "./components/Button";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`;

function App() {
  return (
    <>
      <div>
        <Link to="https://vite.dev">
          <Logo src={viteLogo} alt="Vite logo" />
        </Link>
        <Link to="https://react.dev">
          <Logo src={reactLogo} alt="React logo" />
        </Link>
      </div>
      <Title>
        <Link to="https://vite.dev">Vite</Link> +{" "}
        <StyledLink to="https://react.dev">React</StyledLink>
      </Title>
      <Card>
        <Title>Counters</Title>
        <Wrapper>
          <Counter start={1} />
          <Counter start={0} step={2} />
        </Wrapper>
      </Card>
      <hr />
      <Card>
        <Title>Buttons</Title>
        <Wrapper>
          <Button onClick={() => {}}>Normal Button</Button>
          <Button onClick={() => {}} $primary>
            Primary Normal Button
          </Button>
          <TomatoButton onClick={() => {}}>Tomato Button</TomatoButton>
          <TomatoButton onClick={() => {}} $primary>
            Primary Tomato Button
          </TomatoButton>
        </Wrapper>
      </Card>
      <DocBlock>Click on the Vite and React logos to learn more</DocBlock>
    </>
  );
}

export default App;
