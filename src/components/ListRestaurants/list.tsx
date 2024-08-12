import * as S from './styles'
import Item from '../Restaurants'
import Restaurant from '../models/restaurant'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => {
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
          />
        ))}
      </S.List>
    </S.Container>
  )
}

export default RestaurantsList
