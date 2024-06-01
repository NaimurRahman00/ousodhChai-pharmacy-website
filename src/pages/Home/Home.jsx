import { Helmet } from 'react-helmet-async'
import DiscountProduct from '../../components/Home/DiscountProduct'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Oushodh Chai | Medicine Store</title>
      </Helmet>
      <Slider></Slider>
      {/* Categories section  */}
      <Categories></Categories>
      {/* Rooms section */}
      <DiscountProduct />
    </div>
  )
}

export default Home
