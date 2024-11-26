import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  to: string;
  className?: string;
  target?: "_blank" | "_parent" | "_self" | "_top" | "_unfencedTop";
};

function Link({ children, className, to, target = "_blank" }: Props) {
  return (
    <a href={to} target={target} className={className}>
      {children}
    </a>
  );
}

const StyledLink = styled(Link)`
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
  &:hover {
    color: #535bf2;
  }
`;

export { Link, StyledLink };
