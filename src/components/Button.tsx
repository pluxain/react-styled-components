type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

function Button({ children, onClick }: Props) {
  return <button onClick={onClick}>{children}</button>;
}

export { Button };
