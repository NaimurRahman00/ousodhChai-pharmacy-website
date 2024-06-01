import { Helmet } from 'react-helmet-async'
import Rooms from '../../components/Home/Rooms'
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
      <Rooms />
    </div>
  )
}

export default Home
