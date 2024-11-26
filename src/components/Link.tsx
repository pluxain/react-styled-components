type Props = {
  children: React.ReactNode;
  to: string;
  target?: "_blank" | "_parent" | "_self" | "_top" | "_unfencedTop";
};

function Link({ children, to, target = "_blank" }: Props) {
  return (
    <a href={to} target={target}>
      {children}
    </a>
  );
}

export { Link };
