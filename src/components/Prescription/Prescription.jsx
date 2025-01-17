import { motion, useAnimation } from "framer-motion";
import { MdOutlineUploadFile } from "react-icons/md";
import FileUpload from "../Mini/FileUpload";
import Container from "../Shared/Container";
import { LuMonitorCheck } from "react-icons/lu";
import { useEffect } from "react";

const Prescription = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section = document.getElementById("prescriptionSection");
      if (section && scrollY > section.offsetTop - window.innerHeight / 2) {
        controlsLeft.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        });
        controlsRight.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controlsLeft, controlsRight]);

  return (
    <Container>
      <motion.div
        id="prescriptionSection"
        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mx-5 md:mx-20 py-4 md:py-28"
      >
        {/* Left Card */}
        <motion.div
          className="bg-[#ffeb68] rounded-[2rem] p-6 md:p-8 flex-1 max-w-[650px] min-h-[25rem]"
          initial={{ opacity: 0, x: -100 }}
          animate={controlsLeft}
        >
          <div>
            <FileUpload title={`Upload Prescription to place order`} />
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0">
            <div className="flex">
              <div className="p-4 bg-[#3a341c] rounded-full flex justify-center items-center text-[#ffeb68] text-2xl">
                <MdOutlineUploadFile />
              </div>
              <div className="px-7 py-1.5 bg-[#3a341c] rounded-full flex justify-center items-center text-[#ffeb68] text-lg font-semibold">
                <h2>Order via Prescription</h2>
              </div>
            </div>
            <div className="flex justify-center items-center px-8 underline text-lg font-bold text-black/60">
              <h2>How to order?</h2>
            </div>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="relative bg-[#fec091] rounded-[2rem] px-4 md:px-14 py-4 md:py-10 flex-1 max-w-[650px] w-full"
          initial={{ opacity: 0, x: 100 }}
          animate={controlsRight}
        >
          <div className="space-y-1.5 flex gap-4 flex-1 flex-col justify-between md:min-h-[20rem] w-full">
            <div className="flex-1 flex justify-center flex-col">
              <h5 className="whitespace-nowrap text-4xl md:text-3xl font-bold text-black/80 tracking-tight mb-4">
                Don't have a <br /> Prescription?
              </h5>
              <p className="text-lg font-semibold text-gray-700">
                Upload only .jpg .png or .pdf files <br /> Size limit is 15 MB
              </p>
            </div>
            <div className="flex ">
              <div className="px-7 md:py-1.5 bg-[#260b2f] rounded-full flex justify-center items-center text-[#fec091] md:text-lg font-semibold">
                <h2>Start Consultations</h2>
              </div>
              <div className="p-4 bg-[#260b2f] rounded-full flex justify-center items-center text-[#fec091] text-2xl">
                <LuMonitorCheck />
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:absolute -right-16 bottom-0">
            <img
              src="https://i.ibb.co/jGhBsLs/free-consultation.png"
              alt="prescription"
              className="w-[40rem]"
            />
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Prescription;
