interface HeroProps {
  src: string;
  alt: string;
}
const HeroImg: React.FC<HeroProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      className="d-block mx-lg-auto heroImg"
      alt={alt}
      loading="lazy"
    />
  );
};

export default HeroImg;
