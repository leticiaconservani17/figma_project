import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import {
  open,
  delivery as setDelivery,
  payment as setPay
} from '../../store/reducers/cart'
import { useState } from 'react'

const Checkout = () => {
  const { delivery } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [errors, setErrors] = useState({
    name: '',
    adress: '',
    city: '',
    cep: '',
    number: ''
  })

  const [cep, setCep] = useState<string>('')

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = e.target.value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
    setCep(maskedValue)
  }

  const backCart = () => {
    dispatch(open())
    dispatch(setDelivery(false))
  }

  const validateForm = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value
    const adress = (document.getElementById('adress') as HTMLInputElement).value
    const city = (document.getElementById('city') as HTMLInputElement).value
    const number = (document.getElementById('number') as HTMLInputElement).value
    const cep = (document.getElementById('CEP') as HTMLInputElement).value

    const newErrors = {
      name: !name ? 'O nome é obrigatório.' : '',
      adress: !adress ? 'O endereço é obrigatório.' : '',
      city: !city ? 'A cidade é obrigatória.' : '',
      cep: !cep ? 'O CEP é obrigatório.' : '',
      number: !number ? 'O número é obrigatório.' : ''
    }

    setErrors(newErrors)
    return newErrors
  }

  const goToPay = () => {
    const errorMessages = validateForm()

    if (!Object.values(errorMessages).some(Boolean)) {
      dispatch(setPay(true))
      dispatch(setDelivery(false))
    }
  }

  return (
    <S.CartContainer className={delivery ? 'paying' : ''}>
      <S.Overlay />
      <S.Sidebar>
        <S.Form>
          <S.Title>Entrega</S.Title>
          <S.Label htmlFor="name">Quem irá receber</S.Label>
          <S.Input type="text" id="name" isError={!!errors.name} />
          {errors.name && <S.ErrorMessage>{errors.name}</S.ErrorMessage>}

          <S.Label htmlFor="adress">Endereço</S.Label>
          <S.Input type="text" id="adress" isError={!!errors.adress} />
          {errors.adress && <S.ErrorMessage>{errors.adress}</S.ErrorMessage>}

          <S.Label htmlFor="city">Cidade</S.Label>
          <S.Input type="text" id="city" isError={!!errors.city} />
          {errors.city && <S.ErrorMessage>{errors.city}</S.ErrorMessage>}

          <S.CEPDiv>
            <div>
              <S.Label htmlFor="CEP">CEP</S.Label>
              <S.Input
                type="text"
                id="CEP"
                value={cep}
                onChange={handleCepChange}
                isError={!!errors.cep}
                maxLength={9}
              />
              {errors.cep && <S.ErrorMessage>{errors.cep}</S.ErrorMessage>}
            </div>
            <div>
              <S.Label htmlFor="number">Número</S.Label>
              <S.Input type="number" id="number" isError={!!errors.number} />
              {errors.number && (
                <S.ErrorMessage>{errors.number}</S.ErrorMessage>
              )}
            </div>
          </S.CEPDiv>
          <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
          <S.Input type="text" id="complement" />
        </S.Form>
        <S.Button type="button" onClick={goToPay}>
          Continuar com o pagamento
        </S.Button>
        <S.Button type="button" onClick={backCart}>
          Voltar para o carrinho
        </S.Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Checkout
