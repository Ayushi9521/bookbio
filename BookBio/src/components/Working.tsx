import HeroImg from "./HeroImg";
const steps = [
  {
    desc: "Sign up for free and create your profile.",
  },
  {
    desc: "Start adding notes as you read, and tag important points.",
  },
  {
    desc: "Review your notes anytime, create summaries, and share insights with friends.",
  },
];

const Working = () => {
  return (
    <>
      <div className="container animate animate-left secGap" id="working">
        <div className="row flex-lg-row flex-md-row-reverse align-items-center g-5">
          <div className=" col-lg-6">
            <HeroImg src="../../public/girl-rading.jpg" alt="Reading girl" />
          </div>
          <div className="col-lg-6 pl-4 content">
            <h5 className="pb-2 blueHeading">How It Works?</h5>
            <h3 className="heading2">
              Three Easy Steps to Master Your Book Notes
            </h3>
            <ul className="pt-4">
              {steps.map((step, index) => (
                <li key={index}>
                  <p>{step.desc}</p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Working;
