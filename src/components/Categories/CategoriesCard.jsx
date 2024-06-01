
const CategoriesCard = () => {
  return (
    <div className="max-w-xs overflow-hidden min-w-28 md:min-w-40">
        <div className="bg-[#ffd6ef] rounded-xl">
      <img
        className="object-cover w-full h-32 md:h-56 rounded-xl"
        src="bones-joint.png"
        alt="avatar"
      />

        </div>

      <div className="py-2 md:py-5 text-center">
        <a
          href="#"
          className="block text-sm md:text-xl font-bold text-gray-800"
          tabIndex="0"
          role="link"
        >
          Bones & joint care
        </a>
      </div>
    </div>
  );
};

export default CategoriesCard;
