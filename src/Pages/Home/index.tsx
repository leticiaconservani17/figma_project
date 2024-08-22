import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantsList from '../../components/ListRestaurants/list'
import Loader from '../../components/loader'

import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurant = {
  title: string
  description: string
  type: string
  image: string
  infos: string[]
  rank: string
  id: number
  menu: [
    {
      name: string
      price: number
      description: string
      productImage: string
      serves: string
      itemAbout: string
    }
  ]
}

const Home = () => {
  const { data: restaurants, isLoading: isLoadingRestaurant } =
    useGetRestaurantsQuery()

  if (isLoadingRestaurant) {
    return <Loader />
  }

  return (
    <>
      <Hero />
      {restaurants && (
        <RestaurantsList
          restaurants={restaurants}
          isLoading={isLoadingRestaurant}
        />
      )}
      <Footer />
    </>
  )
}

export default Home
