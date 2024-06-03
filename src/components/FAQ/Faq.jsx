import Container from "../Shared/Container";

const Faq = () => {
//   const green = "bg-[#9fe870]";
  const gray = "bg-[#f1f5f9]";
//   const [bg, setBg] = useState(gray);
//   const handleBgChange = () => {
//     setBg(green);
//   };

  return (
    <Container>
      <div className="mx-6 md:mx-48 space-y-6 -mt-14">
        <div className="text-5xl text-[#242a60] font-extrabold text-center py-14">
          <h2>Got questions?</h2>
        </div>
        {/* FAQ 1 */}
        <div
          className={`collapse collapse-arrow ${gray} text-[#242a60] pt-4 px-6 rounded-[2rem]`}
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-3xl font-semibold">
            How do I bla bla bla question?
          </div>
          <div className="collapse-content text-lg font-medium mt-6">
            <p>This is bla bla bla answer.</p>
          </div>
        </div>
        {/* FAQ 2 */}
        <div
          className={`collapse collapse-arrow ${gray} text-[#242a60] pt-4 px-6 rounded-[2rem]`}
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-3xl font-semibold">
            How do I bla bla bla question?
          </div>
          <div className="collapse-content text-lg font-medium mt-6">
            <p>This is bla bla bla answer.</p>
          </div>
        </div>
        {/* FAQ 3 */}
        <div
          className={`collapse collapse-arrow ${gray} text-[#242a60] pt-4 px-6 rounded-[2rem]`}
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-3xl font-semibold">
            How do I bla bla bla question?
          </div>
          <div className="collapse-content text-lg font-medium mt-6">
            <p>This is bla bla bla answer.</p>
          </div>
        </div>
        {/* FAQ 4 */}
        <div
          className={`collapse collapse-arrow ${gray} text-[#242a60] pt-4 px-6 rounded-[2rem]`}
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-3xl font-semibold">
            How do I bla bla bla question?
          </div>
          <div className="collapse-content text-lg font-medium mt-6">
            <p>This is bla bla bla answer.</p>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default Faq;
