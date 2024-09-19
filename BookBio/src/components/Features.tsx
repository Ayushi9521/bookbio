const features = [
  {
    icon: "bi-pencil-square",
    title: "Easy Note Taking",
    description: "Quickly jot down key points from any book.",
  },
  {
    icon: "bi-tags",
    title: "Organize Your Notes",
    description: "Categorize and tag your notes for easy retrieval.",
  },
  {
    icon: "bi-journal-check",
    title: "Review Effortlessly",
    description: "Easily review and revisit your notes anytime.",
  },
  {
    icon: "bi-search",
    title: "Search & Retrieve",
    description:
      "Easily find notes from any book with advanced search features.",
  },
];

const Features = () => {
  return (
    <>
      <div className="container secGap" id="feature">
        <h5 className="pb-2 blueHeading text-center">Why BookNotes?</h5>
        <h3 className="text-center heading2">Make the Most of Every Book</h3>
        <div className="row pt-5 ">
          {features.map((feature, index) => (
            <div className="col col-sm-12 col-lg-6 col-xl-3">
              <div key={index} className="card featureCard">
                <div className="card-body">
                  <i className={`bi ${feature.icon} feature-icon`}></i>
                  <h4 className="featureTitle">{feature.title}</h4>
                  <p className="font4">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
