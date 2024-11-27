import styled from "styled-components";

type Props = {
  alt: string;
  src: string;
  className?: string;
};

function Image({ alt, className, src }: Props) {
  return <img src={src} alt={alt} className={className} />;
}

const Logo = styled(Image)`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;

export { Image, Logo };
