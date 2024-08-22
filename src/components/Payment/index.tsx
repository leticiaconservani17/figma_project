/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import {
  delivery as setDelivery,
  payment as setPay,
  conclude as setConclude
} from '../../store/reducers/cart'
import { useEffect, useState } from 'react'
import { usePurchaseMutation } from '../../services/api'

const Payment = ({ setOrderId }: { setOrderId: (id: string) => void }) => {
  const { payment, items, billingDetails, paymentDetails } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const [errors, setErrors] = useState({
    name: '',
    card: '',
    cvv: '',
    month: '',
    year: ''
  })

  // Estado do formulário de pagamento
  const [card, setCard] = useState('')
  const [cvv, setCvv] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  // Funções de manipulação de input
  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '')
    value = value
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})\d+?$/, '$1')

    setCard(value.trim().slice(0, 19))
  }

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3)
    setCvv(value)
  }

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 2)
    setMonth(value)
  }

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4)
    setYear(value)
  }

  const backToDelivery = () => {
    dispatch(setPay(false))
    dispatch(setDelivery(true))
  }

  const finishPayment = async () => {
    const errorMessages = validateForm()

    if (!Object.values(errorMessages).some(Boolean)) {
      await handleSubmit()
      dispatch(setPay(false))
      dispatch(setDelivery(false))
      dispatch(setConclude(true))
    }
  }

  const validateForm = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value

    const newErrors = {
      name: !name ? 'O nome no cartão é obrigatório.' : '',
      card: card.length !== 19 ? 'Número do cartão inválido.' : '',
      cvv: cvv.length !== 3 ? 'CVV inválido.' : '',
      month:
        !month || parseInt(month) > 12 || parseInt(month) < 1
          ? 'Mês inválido.'
          : '',
      year: year.length !== 4 ? 'Ano inválido.' : ''
    }

    setErrors(newErrors)
    return newErrors
  }

  const handleSubmit = async () => {
    const products = items.map((item) => ({
      id: item.uniqueId,
      price: item.price
    }))

    const response = await purchase({
      billing: {
        ...billingDetails,
        complement: billingDetails.complement || ''
      },
      products,
      payment: {
        card: {
          owner: { name: paymentDetails.card.owner }, // Corrigido para ser um objeto com 'name'
          name: paymentDetails.card.name,
          number: paymentDetails.card.number,
          expires: {
            month: paymentDetails.card.expires.month,
            year: paymentDetails.card.expires.year
          },
          code: paymentDetails.card.code
        }
      }
    }).unwrap()

    // Atualiza o orderId no estado
    setOrderId(response.id)
  }

  // Efeito para monitorar a resposta e lidar com o ID do pedido
  useEffect(() => {
    if (isSuccess && data) {
      setOrderId(data.id)
    }
  }, [data, isSuccess, setOrderId])

  const totalValue = () => {
    return items.reduce((sum, item) => sum + item.price, 0)
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <S.CartContainer className={payment ? 'paying' : ''}>
      <S.Overlay />
      <S.Sidebar>
        <S.Form>
          <S.Title>
            Pagamento - Valor a pagar <span>{formatPrice(totalValue())}</span>
          </S.Title>
          <S.Label htmlFor="name">Nome no cartão</S.Label>
          <S.Input type="text" id="name" isError={!!errors.name} />
          {errors.name && <S.ErrorMessage>{errors.name}</S.ErrorMessage>}

          <S.CARDDiv>
            <div>
              <S.Label htmlFor="card">Número do cartão</S.Label>
              <S.Input
                type="text"
                id="card"
                value={card}
                onChange={handleCardChange}
                isError={!!errors.card}
              />
              {errors.card && <S.ErrorMessage>{errors.card}</S.ErrorMessage>}
            </div>
            <div>
              <S.Label htmlFor="cvv">CVV</S.Label>
              <S.Input
                type="text"
                id="cvv"
                value={cvv}
                onChange={handleCvvChange}
                isError={!!errors.cvv}
              />
              {errors.cvv && <S.ErrorMessage>{errors.cvv}</S.ErrorMessage>}
            </div>
          </S.CARDDiv>
          <S.DateDiv>
            <div>
              <S.Label htmlFor="month">Mês de vencimento</S.Label>
              <S.Input
                type="text"
                id="month"
                value={month}
                onChange={handleMonthChange}
                placeholder="MM"
                isError={!!errors.month}
              />
              {errors.month && <S.ErrorMessage>{errors.month}</S.ErrorMessage>}
            </div>
            <div>
              <S.Label htmlFor="year">Ano de vencimento</S.Label>
              <S.Input
                type="text"
                id="year"
                value={year}
                onChange={handleYearChange}
                placeholder="YYYY"
                isError={!!errors.year}
              />
              {errors.year && <S.ErrorMessage>{errors.year}</S.ErrorMessage>}
            </div>
          </S.DateDiv>
        </S.Form>
        <S.Button type="button" onClick={finishPayment}>
          Finalizar pagamento
        </S.Button>
        <S.Button type="button" onClick={backToDelivery}>
          Voltar para a edição de endereço
        </S.Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Payment
