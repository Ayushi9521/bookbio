import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <div className="container secGap ">
      <div className="row flex-lg-row-reverse align-items-center heroRow">
        <div className="col-lg-6">
          <HeroImg src="../../public/hero.png" alt="Hero image" />
        </div>
        <div className="col-lg-6 content">
          <h1 className="heading1">
            Unlock the Best Parts of Every Book You Read
          </h1>
          <p className="lead font3">
            BookNotes helps you capture key insights, organize them efficiently,
            and review them with ease. Never forget the most important ideas
            from the books you love.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
