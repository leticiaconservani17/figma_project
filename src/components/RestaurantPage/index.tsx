import { useParams } from 'react-router-dom'
import * as S from './styles'
import Close from '../../images/close.svg'
import { useEffect, useState } from 'react'
import { Restaurant } from '../../Pages/Home'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import Loader from '../loader'

const RestaurantPage: React.FC = () => {
  const [openModal, setModalOpen] = useState(false)
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [selectedItem, setSelectedItem] = useState<
    Restaurant['menu'][0] | null
  >(null)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams<{ id: string }>()
  const restaurantId = id ? parseInt(id) : null

  const API_URL =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_URL
      : 'https://project-figma-data.onrender.com'

  useEffect(() => {
    if (restaurantId !== null) {
      setIsLoading(true)
      fetch(`${API_URL}/restaurants/${restaurantId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Restaurante não encontrado')
          }
          return res.json()
        })
        .then((data) => {
          setRestaurant(data)
          setIsLoading(false)
        })
        .catch((error) => {
          console.error('Erro ao buscar o restaurante:', error.message)
          setRestaurant(null) // Limpa o estado do restaurante
          setIsLoading(false)
        })
    }
  }, [restaurantId, API_URL])

  const OpenModal = (item: Restaurant['menu'][0]) => {
    setSelectedItem(item)
    setModalOpen(true)
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    if (selectedItem && restaurant) {
      dispatch(
        add({
          ...selectedItem,
          restaurantId: restaurant.id
        })
      )
    }
    dispatch(open())
    setModalOpen(false)
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container>
      {isLoading ? (
        <Loader />
      ) : restaurant ? (
        <>
          <S.HeadContent>
            <S.Image src={restaurant?.image} alt={restaurant?.title} />
            <S.Overlay />
            <S.TextContainer>
              <S.Type>{restaurant?.type}</S.Type>
              <S.Title>{restaurant?.title}</S.Title>
            </S.TextContainer>
          </S.HeadContent>
          {restaurant?.menu && restaurant.menu.length > 0 ? (
            <S.PageContent>
              <S.Menu>
                <S.MenuItem>
                  {restaurant.menu.map((item) => (
                    <li key={item.name}>
                      <S.ItemContainer>
                        <S.IMG src={item.productImage} alt={item.name} />
                        <S.ItemDetails>
                          <S.MenuTitle>{item.name}</S.MenuTitle>
                          <S.MenuDescription>
                            {item.description}
                          </S.MenuDescription>
                          <S.Button onClick={() => OpenModal(item)}>
                            Mais detalhes
                          </S.Button>
                        </S.ItemDetails>
                      </S.ItemContainer>
                    </li>
                  ))}
                </S.MenuItem>
              </S.Menu>
            </S.PageContent>
          ) : (
            <S.NoMenuMessage color="#e66767">
              Este restaurante ainda não possui um cardápio.
            </S.NoMenuMessage>
          )}
        </>
      ) : (
        <S.NoMenuMessage color="#e66767">
          Restaurante não encontrado.
        </S.NoMenuMessage>
      )}

      {openModal && selectedItem && (
        <S.Modal className={openModal ? 'visible' : ''} key={selectedItem.name}>
          <div className="container">
            <S.CloseButton onClick={() => setModalOpen(false)}>
              <img src={Close} alt="Fechar" />
            </S.CloseButton>
            <div className="modal">
              <div className="image-container">
                <S.ModalImage
                  src={selectedItem.productImage}
                  alt={selectedItem.name}
                />
              </div>
              <div className="content-container">
                <S.ModalTitle>{selectedItem.name}</S.ModalTitle>
                <S.ModalAbout>{selectedItem.itemAbout}</S.ModalAbout>
                <S.ModalDescription>
                  Serve: {selectedItem.serves}
                </S.ModalDescription>
                <S.ButtonModal onClick={addToCart}>
                  Adicionar ao carrinho : {formatPrice(selectedItem.price)}
                </S.ButtonModal>
              </div>
            </div>
          </div>
          <div className="overlay" />
        </S.Modal>
      )}
    </S.Container>
  )
}

export default RestaurantPage
