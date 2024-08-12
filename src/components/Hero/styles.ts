import styled from 'styled-components'
import HeroIMG from '../../images/fundo.png'

export const HeroSection = styled.section`
  background-image: url(${HeroIMG});
  width: 100%;
  height: 384px;
  top: -24px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`

export const TitleContent = styled.div`
  width: 539px;
  height: 84px;
  margin: 0;
  margin-top: 136px;
  text-align: center;
`

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  margin: 0;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
`
