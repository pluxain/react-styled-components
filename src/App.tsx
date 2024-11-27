/* eslint-disable no-console */
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
        <Title>Extending styles</Title>
        <Wrapper>
          <Button
            onClick={() => {
              console.log("Normal Button clicked");
            }}
          >
            Normal Button
          </Button>
          <Button
            onClick={() => {
              console.log("Primary Normal Button clicked");
            }}
            $primary
          >
            Primary Normal Button
          </Button>
          <TomatoButton
            onClick={() => {
              console.log("Tomato Button clicked");
            }}
          >
            Tomato Button
          </TomatoButton>
          <TomatoButton
            onClick={() => {
              console.log("Primary Tomato Button clicked");
            }}
            $primary
          >
            Primary Tomato Button
          </TomatoButton>
        </Wrapper>
        <Wrapper>
          <Button as="a" href="#">
            Link styled like a Normal Button
          </Button>
          <Button as="a" href="#">
            Link styled like Primary Normal Button
          </Button>
          <TomatoButton as="a" href="#">
            Link styled like a Tomato Button
          </TomatoButton>
          <TomatoButton as="a" href="#" $primary>
            Link styled like a Primary Tomato Button
          </TomatoButton>
        </Wrapper>
      </Card>
      <DocBlock>Click on the Vite and React logos to learn more</DocBlock>
    </>
  );
}

export default App;
