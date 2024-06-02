import Container from "../Shared/Container";

const Brands = () => {
  const brands = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Container>
      <div className="mx-20">
        <div>
          <h1 className="text-[#252b61] text-2xl md:text-6xl font-bold mb-4 md:mb-16 text-center md:text-start">
            Featured Brands
          </h1>
        </div>
        <div className="flex gap-4 items-center justify-between">
          {brands.map((brand, index) => (
            <div key={index}>
              <div className="bg-[#f1f5f9] rounded-full size-40 flex justify-center items-center">
                <img src="" alt="Brand Logo" />
              </div>
              <h2 className="text-xl font-bold text-center text-black/70 mt-2">Brand Name</h2>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Brands;
