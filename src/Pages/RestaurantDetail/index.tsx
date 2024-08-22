import { useState } from 'react'
import Cart from '../../components/Cart'
import Checkout from '../../components/Checkout'
import Conclude from '../../components/Conclude'
import Footer from '../../components/FooterRP'
import Header from '../../components/Head'
import Payment from '../../components/Payment'
import RestaurantPage from '../../components/RestaurantPage'

const RestaurantDetail = () => {
  const [orderId, setOrderId] = useState<string>('ID não disponível')

  return (
    <>
      <Header />
      <RestaurantPage />
      <Footer />
      <Cart />
      <Checkout />
      <Payment setOrderId={setOrderId} />
      <Conclude orderId={orderId || 'ID não disponível'} />
    </>
  )
}

export default RestaurantDetail
