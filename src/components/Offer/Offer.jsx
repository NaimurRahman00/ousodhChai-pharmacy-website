import { LuMonitorCheck } from "react-icons/lu";
import Container from "../Shared/Container";
import { FaArrowRightLong } from "react-icons/fa6";

const Offer = () => {
    const cards = [1,2,3]
  return (
    <Container>
      <div className="mx-6 md:mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {/* card 1 */}
        {cards.map((card, index) => (
          <div key={index} className="relative bg-[#a0e1e1] rounded-[2rem] p-4 md:p-8 flex-1 max-w-[650px] w-full">
            <div className="space-y-1.5 flex gap-4 flex-1 flex-col justify-between md:min-h-[17rem] w-full">
              <div className="flex-1 flex justify-center flex-col">
                <h5 className="whitespace-nowrap text-2xl md:text-3xl font-bold text-black/80 tracking-tight mb-4">
                  Headache <br /> and Migraine <br /> Solutions
                </h5>
                <p className="text-sm md:text-lg font-semibold text-gray-700 flex gap-2 items-center uppercase">
                  Browse All <FaArrowRightLong />
                </p>
              </div>
              <div className="">
                <h2 className="text-xl font-bold text-black/80">Flat</h2>
                <h3 className="text-2xl font-bold text-black/80"><span className="text-5xl font-bold">5% </span>Off</h3>
              </div>
            </div>
            <div className="absolute -right-10 md:-right-16 bottom-0">
              <img
                src="https://i.ibb.co/jGhBsLs/free-consultation.png"
                alt="prescription"
                className="w-[40rem]"
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Offer;
