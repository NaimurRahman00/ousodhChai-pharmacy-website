import { MdOutlineUploadFile } from "react-icons/md";
import FileUpload from "../Mini/FileUpload";
import Container from "../Shared/Container";
import { LuMonitorCheck } from "react-icons/lu";

const Prescription = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mx-20 py-28">
        <div className="bg-[#ffeb68] rounded-[2rem] p-8 flex-1 max-w-[650px] min-h-[25rem]">
          <div>
            <div>
              <FileUpload></FileUpload>
            </div>
            <div></div>
          </div>
          <div className="flex">
            <div className="p-4 bg-[#3a341c] rounded-full flex justify-center items-center text-[#ffeb68] text-2xl">
              <MdOutlineUploadFile />
            </div>
            <div className="px-7 py-1.5 bg-[#3a341c] rounded-full flex justify-center items-center text-[#ffeb68] text-lg font-semibold">
              <h2>Order via Prescription</h2>
            </div>
            <div className="flex justify-center items-center px-8 underline text-lg font-bold text-black/60">
              <h2>How to order?</h2>
            </div>
          </div>
        </div>
        <div className="relative bg-[#fec091] rounded-[2rem] px-14 py-10 flex-1 max-w-[650px] flex items-center">
          <div className="space-y-1.5 flex flex-1 flex-col justify-between min-h-[20rem]">
            <div className="flex-1 flex justify-center flex-col">
              <h5 className="whitespace-nowrap text-3xl font-bold text-black/80 tracking-tight mb-4">
                Don't have a <br /> Prescription?
              </h5>
              <p className="text-lg font-semibold text-gray-700">
                Upload only .jpg .png or .pdf files <br /> Size limit is 15 MB
              </p>
            </div>
            <div className="flex ">
              <div className="px-7 py-1.5 bg-[#260b2f] rounded-full flex justify-center items-center text-[#fec091] text-lg font-semibold">
                <h2>Start Consultations</h2>
              </div>
              <div className="p-4 bg-[#260b2f] rounded-full flex justify-center items-center text-[#fec091] text-2xl">
                <LuMonitorCheck />
              </div>
            </div>
          </div>
          <div className="absolute -right-16 bottom-0">
            <img src="https://i.ibb.co/jGhBsLs/free-consultation.png" alt="prescription" className="w-[40rem]" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Prescription;
