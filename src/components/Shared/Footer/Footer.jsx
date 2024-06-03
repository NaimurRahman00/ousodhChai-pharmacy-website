import Container from "../Container";
import FooterComp from "./FooterComp";

const Footer = () => {
  return (
    <Container>
      <div className="bg-gradient-to-t from-[#153200] to-[#163300] p-[60px] rounded-[4rem] mt-28 mb-8">
        <div>
          <FooterComp></FooterComp>
        </div>
        <div className="flex justify-center items-center gap-8 bg-[#9fe870] rounded-[2.5rem] mt-4">
          <div>
            <img src="medicine.png" alt="" />
          </div>
          <h2 className="text-[8rem] text-[#163300] font-bold py-20">
            OushodhChai
          </h2>
        </div>
        <div className="flex justify-between items-center mt-10 text-[#9fe870]">
          <p>&copy; 2024 OusodhChai</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
