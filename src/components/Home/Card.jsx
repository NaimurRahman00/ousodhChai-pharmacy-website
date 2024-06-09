import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaStar } from "react-icons/fa6";

const Card = ({ medicine }) => {
  console.log(medicine)
  return (
    <Link to={`/room/${medicine?._id}`} className='col-span-1 cursor-pointer group w-full'>
      <div className='flex flex-col gap-2 w-full bg-[#f1f5f9] rounded-[2rem]'>
        <div className='flex justify-center items-center w-full pt-12 pb-4 relative'>
          <img src="discount-1.png" alt="" className='w-28'/>
          <h2 className='absolute right-0 top-10 bg-yellow-400/60 font-bold px-4 py-1 rounded-l-md'>20% Off</h2>
        </div>
        <div className='rounded-[2rem] border-2 border-black/5 p-4 bg-white space-y-3'>
          <div className='flex justify-between items-center'>
            <h2 className='text-black/40 font-semibold'>{medicine?.category}</h2>
            <h2 className='flex items-center gap-1 text-black/40 font-bold'><FaStar className='text-[#fc8540]'/>(4.5)</h2>
          </div>
          <div>
            <h2 className='font-bold text-[#36395b] leading-[1.3rem]'>Dietary supplements <br /> organics products</h2>
          </div>
          <div className='flex justify-between items-center pt-4'>
            <button className='px-4 py-1.5 font-bold text-black/80 border-2 border-[#4a4f7c] text-sm rounded-full hover:bg-[#4a4f7c] hover:text-white/80 transition-all'>+ Add to Cart</button>
            <h2 className='text-xl font-bold text-black/70'><del className='text-base font-semibold text-black/50 mr-1'>$80.00</del>$64.00</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  room: PropTypes.object,
}

export default Card
