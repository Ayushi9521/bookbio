const rates = [
  {
    plan: "Free",
    price: "$0",
    duration: "/mo",
    det1: "Unlimited notes",
    det2: "3 Books limit",
    det3: "Basic search",
    det4: "Access on 1 device",
    btn: "Sign up for free",
  },
  {
    plan: "Pro",
    price: "$15",
    duration: "/mo",
    det1: "Unlimited books and notes",
    det2: "Advanced search and filtering",
    det3: "Sync across multiple devices",
    det4: "Access on multiple device",
    btn: " Get started",
  },
  {
    plan: "Team",
    price: "$25",
    duration: "/mo",
    det1: "Collaboration tools for book clubs or teams",
    det2: "Shared notes",
    det3: "Custom tags and organization",
    det4: "Access on multiple device",
    btn: "Contact us",
  },
];

const Pricing = () => {
  return (
    <>
      <div className="container secGap">
        <h5 className="pb-2 blueHeading text-center">Choose Your Plan</h5>
        <h3 className="text-center heading2">
          Find the Right Plan to Unlock Your Potential
        </h3>
        <div className="row row-cols-1 row-cols-md-3 mb-3 pt-5 text-center">
          {rates.map((rate, index) => (
            <div className="col" key={index} id={rate.plan}>
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 featureTitle">{rate.plan}</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title font1">
                    {rate.price}
                    <small className="text-body-secondary fw-light font2">
                      {rate.duration}
                    </small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>{rate.det1}</li>
                    <li>{rate.det2}</li>
                    <li>{rate.det3}</li>
                    <li>{rate.det4}</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary"
                  >
                    {rate.btn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
