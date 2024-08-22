/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Button } from '../RestaurantPage/styles'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import {
  close,
  conclude,
  delivery,
  payment,
  remove
} from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const totalValue = () => {
    return items.reduce((some, TotalValue) => {
      return (some += TotalValue.price)
    }, 0)
  }

  const removeItem = (uniqueId: number) => {
    dispatch(remove(uniqueId))
  }

  const deliveryInfos = () => {
    dispatch(delivery(true))
    dispatch(close())
    dispatch(payment(false))
    dispatch(conclude(false))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CarItem key={item.uniqueId}>
                  <S.ProductImage src={item.productImage} alt={item.name} />
                  <div>
                    <S.TitleItem>{item.name}</S.TitleItem>
                    <S.PriceItem>{formatPrice(item.price)}</S.PriceItem>
                  </div>
                  <S.TrashButton
                    onClick={() => removeItem(item.uniqueId)}
                    type="button"
                  />
                </S.CarItem>
              ))}
            </ul>
            <S.ValueCar>
              Valor total: <span>{formatPrice(totalValue())}</span>
            </S.ValueCar>
            <S.Button type="button" onClick={deliveryInfos}>
              Continuar com a entrega
            </S.Button>
          </>
        ) : (
          <S.EmptyMensage>
            O Carrinho está vazio, adicione pelo menos um item do menu para
            continuar com a compra.
          </S.EmptyMensage>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
