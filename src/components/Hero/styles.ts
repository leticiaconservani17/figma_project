import styled from 'styled-components'
import HeroIMG from '../../images/fundo.png'

export const HeroSection = styled.section`
  background-image: url(${HeroIMG});
  width: 100%;
  height: 384px;
  top: -24px;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 16px;

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`

export const TitleContent = styled.div`
  width: 80%;
  max-width: 539px;
  margin: 0;
  margin-top: 136px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 90px;
  }

  @media (max-width: 480px) {
    margin-top: 60px;
  }
`

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 34px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 30px;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;

  @media (max-width: 768px) {
    width: 100px;
    height: 46px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 37px;
  }
`
