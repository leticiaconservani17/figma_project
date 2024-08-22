import * as S from './styles'
import Item from '../Restaurants'
import { Restaurant } from '../../Pages/Home'
import Loader from '../loader'
import { useEffect, useState } from 'react'

export type Props = {
  restaurants: Restaurant[]
  isLoading: boolean
}

const RestaurantsList = ({ restaurants, isLoading }: Props) => {
  const [allLoaded, setAllLoaded] = useState(false)

  useEffect(() => {
    const handleLoad = () => setAllLoaded(true)

    const imgElements = document.querySelectorAll('img')
    let loadedCount = 0

    imgElements.forEach((img) => {
      if (img.complete) {
        loadedCount += 1
      } else {
        img.addEventListener('load', handleLoad)
      }
    })

    if (loadedCount === imgElements.length) {
      setAllLoaded(true)
    }

    return () => {
      imgElements.forEach((img) => img.removeEventListener('load', handleLoad))
    }
  }, [restaurants])

  if (!allLoaded || isLoading) {
    return <Loader />
  }

  return (
    <S.Container>
      <S.List>
        {restaurants.map((restaurant) => (
          <Item
            key={restaurant.id}
            title={restaurant.title}
            description={restaurant.description}
            image={restaurant.image}
            rank={restaurant.rank}
            infos={restaurant.infos}
            id={restaurant.id}
          />
        ))}
      </S.List>
    </S.Container>
  )
}

export default RestaurantsList
