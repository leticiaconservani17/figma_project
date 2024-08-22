import styled from 'styled-components'
import trash from '../../images/trash.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: #e66767;
  z-index: 1;
  padding: 32px 8px 0 8px;
  width: 360px;
  @media (max-width: 768px) {
    width: 300px;
  }
  ul {
    max-height: 83%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 8px;

    @media (max-width: 768px) {
      padding: 0;
    }
  }
`

export const Button = styled.button`
  width: 100%;
  border: none;
  height: 24px;
  background-color: #ffebd9;
  color: #e66767;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 15px;
    height: 40px;
    margin-top: 16px;
  }
`

export const ValueCar = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  display: flex;
  justify-content: space-between;
  color: #ffebd9;
  margin: 40px 0 16px 0;
  span {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
  }
`

export const CarList = styled.ul``

export const CarItem = styled.li`
  display: flex;
  padding: 8px;
  background-color: #ffebd9;
  list-style: none;
  width: 100%;
  height: 100px;
  margin-bottom: 16px;
  position: relative;
`

export const TitleItem = styled.h3`
  margin-bottom: 16px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  line-height: 21.09px;
`

export const PriceItem = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 8px;
`

export const TrashButton = styled.button`
  background-image: url(${trash});
  border: none;
  width: 16px;
  height: 16px;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 76px;
  right: 16px;
  background-size: contain;
  background-repeat: no-repeat;
`

export const EmptyMensage = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #ffebd9;
`
