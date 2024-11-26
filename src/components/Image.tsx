type Props = {
  alt: string;
  src: string;
};

function Image({ alt, src }: Props) {
  return <img src={src} className="logo" alt={alt} />;
}

export { Image };
