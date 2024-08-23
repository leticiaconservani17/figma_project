import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const HeadContent = styled.div`
  position: relative;
  width: 100%;
  height: 280px;

  &.noDisplay {
    display: none;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  pointer-events: none;
`

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  padding: 50px 171px;
  transform: translateY(-50%);
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1020px) {
    padding: 50px 100px;
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      width: calc(30% - 32px);
      justify-content: flex-start;

      div {
        min-width: 30%;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 100px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`

export const Title = styled.h1`
  font-family: Roboto, 'sans-serif';
  font-size: 32px;
  font-weight: 900;
  margin-top: 100px;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-top: 90px;
  }

  @media (max-width: 480px) {
    margin-top: 100px;
  }
`

export const Type = styled.p`
  font-family: Roboto, 'sans-serif';
  font-size: 20px;
  font-weight: 100;
  margin: 0 0 10px 0;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`

export const PageContent = styled.div`
  width: 100%;
`

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 56px 171px;

  @media (max-width: 1020px) {
    padding: 56px 100px;
  }

  @media (max-width: 768px) {
    padding: 56px 100px;
  }

  @media (max-width: 480px) {
    padding: 0 60px;
    margin: 30px 0;
  }
`

export const MenuItem = styled.li`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const IMG = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 1024px) {
    height: 100px;
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`

export const ItemDetails = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-around;
`

export const ItemContainer = styled.div`
  background-color: #e66767;
  color: #ffebd9;
  height: 100%;
  padding: 8px 8px 0 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }
`

export const MenuTitle = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 900;
  line-height: 18.75px;
  text-align: left;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 27px;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    line-height: 30px;
  }
`

export const MenuDescription = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #ffebd9;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 25px;
    margin-bottom: 24px;
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
    font-size: 25px;
    height: 40px;
    margin-top: 16px;
  }
`

export const MenuAbout = styled.p``

export const ModalTitle = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  line-height: 21.09px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const ModalDescription = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #fff;
  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`

export const NoMenuMessage = styled.p<{ color?: string }>`
  font-family: Roboto, 'sans-serif';
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.color || '#e66767'};
  text-align: center;
  margin: 20px auto;
  padding: 10px 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 5px 0;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.18);
    pointer-events: none;
  }

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    background-color: #e66767;
    color: #ffebd9;
    width: 82%;
    padding: 20px;

    div {
      display: flex;
      margin-top: 8px;

      @media (max-width: 480px) {
        margin-top: 0;
        display: flex;
      }
    }

    @media (max-width: 1024px) {
      max-width: 100%;
    }
    @media (max-width: 768px) {
      max-width: 75%;
      padding: 10px;
      justify-content: center;

      .modal {
        display: flex;
        flex-direction: column;
      }
    }
    @media (max-width: 480px) {
      max-width: 76%;
      flex-direction: column;
    }
  }

  .image-container {
    margin-right: 20px;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }

  .content-container {
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {
      margin: 10px 0 0 0;
    }
  }
`

export const ButtonModal = styled.button`
  margin-top: 16px;
  background-color: #ffebd9;
  border: none;
  padding: 4px;
  color: #e66767;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  width: 218px;
  height: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    padding: 18px;
    font-size: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    font-size: 8 px;
    width: 100%;
  }
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 8px;
    width: 100%;
    height: 220px;
  }

  @media (max-width: 480px) {
    margin-top: 24px;
    width: 100%;
  }
`

export const ModalAbout = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #fff;
  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
`
