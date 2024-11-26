type Props = {
  children: React.ReactNode;
};

function Title({ children: text }: Props) {
  return <h1>{text}</h1>;
}

export { Title };
