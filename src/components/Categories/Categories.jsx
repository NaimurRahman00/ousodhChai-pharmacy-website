import Container from "../Shared/Container";
// import CategoryBox from './CategoryBox'
import { categories } from "./CategoriesData.js";
import CategoriesCard from "./CategoriesCard.jsx";
const Categories = () => {
  return (
    <Container>
      <div className="bg-white rounded-t-[2rem] z-10">
        <div className="py-6 md:py-20 mx-4 md:px-16 -mt-10 relative flex gap-5 md:gap-6 items-center justify-between overflow-x-auto bg-white rounded-t-[2rem]">
          {categories.map((item, index) => (
            // <CategoryBox key={item.label} label={item.label} icon={item.icon} />
            <CategoriesCard key={index}></CategoriesCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Categories;
