import Container from "../../components/Shared/Container";


const Invoice = () => {
  return (
    <Container>
      <div className="mx-32 bg-[#f1f5f9] border border-black/5 rounded p-20">
        <div className="flex items-center gap-2 border-b border-black/10 pb-8">
          <img
            src="https://i.ibb.co/SBTB6sj/medicine.png"
            alt="logo"
            width="30"
            height="30"
            className="w-10"
          />
          <h2 className="text-green-900 text-2xl md:text-3xl font-bold">
            Ousodh<span>Chai</span>
          </h2>
        </div>
      </div>
    </Container>
  );
};

export default Invoice;
