import * as S from './styles'
import logo from '../../images/logo.svg'

function Hero() {
  return (
    <S.HeroSection>
      <S.Container>
        <S.Logo src={logo} alt="logo" />
        <S.TitleContent>
          <S.Title>
            Viva experiências gastronômicas no conforto da sua casa
          </S.Title>
        </S.TitleContent>
      </S.Container>
    </S.HeroSection>
  )
}

export default Hero
