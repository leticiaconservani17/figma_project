import styled from 'styled-components'
import HeroIMG from '../../images/fundo.png'

export const Container = styled.div`
  width: 100%;
  background-image: url(${HeroIMG});
  padding: 0 171px;
  box-sizing: border-box;

  @media (max-width: 1020px) {
    padding: 0 100px;
  }

  @media (max-width: 768px) {
    padding: 0 100px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`

export const Header = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
  margin: 0;
  list-style: none;

  .carrinho {
    justify-content: flex-end;
  }

  .backButton {
    justify-content: flex-start;
  }

  li {
    display: flex;
    align-items: center;
    width: calc(30% - 32px);
    justify-content: center;
  }

  img {
    max-width: 125px;
  }

  @media (max-width: 768px) {
    img {
      max-width: 100px;
      margin: 10px 0;
    }

    li {
      margin: 5px 0;
    }
  }
`

export const HeadText = styled.span`
  text-decoration: none;
  font-family: Roboto, 'sans-serif';
  font-weight: 900;
  font-size: 18px;
  margin: 0;
  color: #e66767;
  cursor: pointer;
  display: flex;
  align-items: center;

  div {
    min-width: 70px;
  }

  .icon {
    display: none;
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    font-size: 22px;

    div {
      justify-content: flex-end;
      display: flex;
      min-width: 110px;
    }

    span {
      display: none;
    }

    .icon {
      display: block;
      margin-right: 8px;
    }
  }
`

export const Button = styled.button`
  background: transparent;
  border: none;
  color: #e66767;
  cursor: pointer;
  padding: 0;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`
