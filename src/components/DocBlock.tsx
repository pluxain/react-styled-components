type Props = {
  children: React.ReactNode;
};

function DocBlock({ children }: Props) {
  return <p className="read-the-docs">{children}</p>;
}

export { DocBlock };
