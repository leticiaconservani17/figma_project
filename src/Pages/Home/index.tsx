import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantsList from '../../components/ListRestaurants/list'
import Restaurant from '../../components/models/restaurant'

import Hioki_Sushi from '../../images/28895a55942ffb290182da4c32ba645d.png'
import La_Dolce_Vita_Trattoria from '../../images/c90467aeb9c58ffac7808807e160ee0c.png'

const Restaurantes: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: Hioki_Sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    rank: '4.9'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: La_Dolce_Vita_Trattoria,
    infos: ['Italiana'],
    rank: '4.6'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: La_Dolce_Vita_Trattoria,
    infos: ['Italiana'],
    rank: '4.6'
  }
]

const Home = () => {
  return (
    <>
      <Hero />
      <RestaurantsList restaurants={Restaurantes} />
      <Footer />
    </>
  )
}

// Certifique-se de que há apenas uma exportação padrão
export default Home
