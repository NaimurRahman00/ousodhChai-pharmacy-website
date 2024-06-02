import { Helmet } from 'react-helmet-async'
import DiscountProduct from '../../components/Home/DiscountProduct'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import Prescription from '../../components/Prescription/Prescription'
import Brands from '../../components/Brands/Brands'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Oushodh Chai | Medicine Store</title>
      </Helmet>
      {/* Banner section */}
      <Slider></Slider>
      {/* Categories section  */}
      <Categories></Categories>
      {/* Rooms section */}
      <DiscountProduct />
      {/* Prescription */}
      <Prescription></Prescription>
      {/* Featurs brands */}
      <Brands></Brands>
    </div>
  )
}

export default Home
