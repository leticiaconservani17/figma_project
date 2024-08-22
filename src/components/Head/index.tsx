import logo from '../../images/logo.svg'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const BackHome = () => {
    navigate('/')
  }

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.Container>
      <S.Header>
        <li className="backButton">
          <S.Button onClick={BackHome}>
            <S.HeadText>Restaurantes</S.HeadText>
          </S.Button>
        </li>
        <li>
          <img src={logo} alt="logo" />
        </li>
        <li className="carrinho">
          <S.HeadText onClick={openCart}>
            <div>
              <FiShoppingCart className="icon" />
              {items.length} <span>produto(s) no carrinho</span>
            </div>
          </S.HeadText>
        </li>
      </S.Header>
    </S.Container>
  )
}

export default Header
