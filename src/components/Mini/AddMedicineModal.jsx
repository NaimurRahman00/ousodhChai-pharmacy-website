import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AddMedicineModal = ({
  openAddMedicineModal,
  setOpenAddMedicineModal,
  refetch
}) => {
  const { user } = useAuth();
  const handleAddMedicine = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      medicine_name: form.name.value,
      generic_name: form.generic_name.value,
      image: form.image.value,
      category: form.category.value,
      company_name: form.company.value,
      mass_unit: form.mass_unit.value,
      discounted_price: form.price.value,
      discount: form.discount.value || "0%",
      short_description: form.description.value,
      seller_email: user?.email,
      rating: '4.7',
      previous_price: "20"
    };

    try {
      await mutateAsync(formData)
      } catch (err) {
        toast.error(err.message)
      }
  };

  // Add medicine using tanstack query
  const { mutateAsync } = useMutation({
    mutationFn: async (formData) => {
      await axios.post(`${import.meta.env.VITE_API_URL}/discountedMedicines`, formData);
    },
    onSuccess: () => {
      setOpenAddMedicineModal(false);
      refetch();
      toast.success("Medicine added successfully!");
    },
  });

  return (
    <div className="mx-auto flex w-2/3 items-center justify-center">
      <div
        onClick={() => setOpenAddMedicineModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openAddMedicineModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-2/5 rounded-lg bg-[#dcdcdc] p-8 drop-shadow-2xl ${
            openAddMedicineModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form onSubmit={handleAddMedicine} className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-nowrap border-2 border-black/20 rounded-full px-2">
              <label
                htmlFor="name"
                className="text-lg font-medium bg-black/30 text-white rounded-full px-3 w-[15rem] text-center"
              >
                Item name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                className="bg-transparent flex h-10 w-full px-3 outline-none"
                placeholder="Glucose-D"
              />
            </div>
            <div className="flex items-center justify-center gap-4 text-nowrap border-2 border-black/20 rounded-full px-2">
              <label
                htmlFor="generic_name"
                className="text-lg font-medium bg-black/30 text-white rounded-full px-3 w-[15rem] text-center"
              >
                Generic Name
              </label>
              <input
                name="generic_name"
                id="generic_name"
                className="bg-transparent flex h-10 w-full rounded-md px-3 outline-none"
                placeholder="Glucose"
              />
            </div>
            <div className="flex items-center justify-center gap-4 text-nowrap border-2 border-black/20 rounded-full px-2">
              <label
                htmlFor="image"
                className="text-lg font-medium bg-black/30 text-white rounded-full px-3 w-[15rem] text-center"
              >
                Product Image
              </label>
              <input
                name="image"
                id="image"
                className="bg-transparent flex h-10 w-full rounded-md px-3 outline-none"
                placeholder="Enter image URL"
              />
            </div>
            <div className="flex items-center justify-center gap-4">
              <select
                name="category"
                className="select select-bordered select-sm text-base font-medium w-full max-w-xs bg-black/30 text-white"
              >
                <option disabled selected>
                  Category
                </option>
                <option>Vitamin</option>
                <option>HealthCare</option>
                <option>Others</option>
              </select>
              <select
                name="company"
                className="select select-bordered select-sm text-base font-medium w-full max-w-xs bg-black/30 text-white"
              >
                <option disabled selected>
                  Company
                </option>
                <option>Square</option>
                <option>Lazz Pharma</option>
                <option>Others</option>
              </select>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="space-y-2">
                <label className="text-lg font-medium">Mass Unit (Mg/Ml)</label>
                <input
                  name="mass_unit"
                  className="flex h-10 w-full rounded-md border px-3"
                  placeholder="100 mg / 100 ml"
                />
              </div>
              <div className="space-y-2">
                <label className="text-lg font-medium">Price</label>
                <input
                  name="price"
                  type="number"
                  className="flex h-10 w-full rounded-md border px-3"
                  placeholder="Enter Price"
                />
              </div>
              <div className="space-y-2">
                <label className="text-lg font-medium">Discount (%)</label>
                <input
                  name="discount"
                  type="number"
                  className="flex h-10 w-full rounded-md border px-3"
                  defaultValue="0%"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-2 text-nowrap rounded-xl px-2">
              <label
                htmlFor="description"
                className="text-lg font-medium bg-black/30 text-white rounded-md px-3"
              >
                Short description
              </label>
              <textarea
                name="description"
                id="description"
                className="bg-transparent flex h-32 w-full rounded-md p-3 outline-none border-2 border-black/30 resize-none"
                placeholder="Product short description"
              />
            </div>
            <div>
              <input
                type="submit"
                name="submit"
                id="submit"
                value="Add medicine"
                className="btn w-full text-xl bg-black/30 text-white border-none hover:bg-black/50"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMedicineModal;
