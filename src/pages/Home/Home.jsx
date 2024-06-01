import { Helmet } from 'react-helmet-async'
import Rooms from '../../components/Home/Rooms'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Oushodh Chai | Medicine Store</title>
      </Helmet>
      {/* Categories section  */}
      <Slider></Slider>
      {/* Rooms section */}
      <Rooms />
    </div>
  )
}

export default Home
