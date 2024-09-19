const questions = [
  {
    question: "How can I add notes for my books?",
    ans: "You can add notes via our simple note-taking interface, tagging key insights and organizing them by chapters or themes.",
  },
  {
    question: "Can I share my notes with others?",
    ans: "Yes, you can share notes with friends or colleagues via a link, or export them in PDF format.",
  },
  {
    question: "Is there a mobile app?",
    ans: "Yes! BookNotes is accessible from any device, and we have a mobile app to make note-taking even easier.",
  },
];
const Faq = () => {
  return (
    <>
      <div className="secGap">
        <div className="card faqCard animate animate-right ">
          <div className="leftSec">
            <h5 className="pb-2 blueHeading">FAQ Section</h5>
            <h3 className="heading2">Answers to Your Queries</h3>
            <ol className="pt-4">
              {questions.map((que) => (
                <li>
                  {que.question}
                  <p>{que.ans}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="imgRight">
            <img
              src="../../public/book.png"
              className="d-block mx-lg-auto"
              alt="book image"
              width="500"
              height="400"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
