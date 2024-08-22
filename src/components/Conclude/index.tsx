/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'

import { conclude as setConclude } from '../../store/reducers/cart'

const Conclude = ({ orderId }: { orderId: string }) => {
  const { conclude } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const finishOrder = () => {
    dispatch(setConclude(false))
  }

  return (
    <S.CartContainer className={conclude ? 'paying' : ''}>
      <S.Overlay />
      <S.Sidebar>
        <S.Title>Pedido realizado - {orderId || 'ID não disponível'}</S.Title>
        <S.Text>
          <span>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </span>
          <span>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </span>
          <span>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </span>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </S.Text>
        <S.Button type="button" onClick={finishOrder}>
          Concluir
        </S.Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Conclude
