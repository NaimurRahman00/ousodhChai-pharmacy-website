import { useLocation } from "react-router-dom";
import Container from "../../components/Shared/Container";

const Invoice = () => {
  const location = useLocation();
  const orderData = location.state;

  // Calculate subtotal
  let subtotal = 0;
  orderData.products.forEach((item) => {
    subtotal += item.price * item.quantity;
  });

  // date
  const today = new Date();
  const day = today.getDate();
  const monthIndex = today.getMonth();
  const year = today.getFullYear();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeek[today.getDay()];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthsOfYear[monthIndex];

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
        <div className="flex items-start justify-between mt-5">
          <div className="font-semibold">
            <h2 className="text-xl font-bold">{orderData.name}</h2>
            <p className="mt-3">
              {dayName}, {day} {monthName}
            </p>
            <p>{year}</p>
          </div>
          <div className="text-end font-semibold">
            <h2>{orderData.address}</h2>
            <p>{orderData.city}</p>
            <p>{orderData.country}</p>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="mx-auto w-full my-10">
              <thead>
                <tr>
                  <th className="py-3 text-left border-b border-black">Item</th>
                  <th className="py-3 text-center border-b border-black">
                    Cost
                  </th>
                  <th className="py-3 text-end border-b border-black">
                    Quantity
                  </th>
                  <th className="py-3 border-b border-black text-end ps-10">Total</th>
                </tr>
              </thead>
              <tbody className="border-b-2 border-black/30">
                {orderData.products.map((item, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-50 transition duration-300 my-10"
                  >
                    <td className="py-4 border-b font-semibold">{item.name}</td>
                    <td className="py-4 text-center border-b">${item.price}</td>
                    <td className="py-4 text-end border-b">
                      x{item.quantity}
                    </td>
                    <td className="py-4 border-b text-end text-red-500 font-semibold">
                      ${item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="hover:bg-gray-50 transition duration-300 py-10">
                  <td className="py-4 border-b font-semibold"></td>
                  <td className="py-4 text-center border-b"></td>
                  <td className="py-4 text-end border-b font-medium">Delivery Charge</td>
                  <td className="py-4 border-b text-end font-semibold">
                    $10
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition duration-300 py-10">
                  <td className="py-4 border-b font-semibold"></td>
                  <td className="py-4 text-center border-b"></td>
                  <td className="py-4 text-end border-b font-medium">Tax</td>
                  <td className="py-4 border-b text-end font-semibold">
                    $5
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition duration-300 py-10">
                  <td className="py-4 border-b font-semibold"></td>
                  <td className="py-4 text-center border-b"></td>
                  <td className="py-4 text-end border-b font-bold text-xl">Sub Total</td>
                  <td className="py-4 border-b text-end text-red-500 font-semibold text-lg">
                    ${subtotal + 10 + 5}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Invoice;
