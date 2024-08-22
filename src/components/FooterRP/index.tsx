import logo from '../../images/logo.svg'
import insta from '../../images/instagram.svg'
import face from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Container>
      <S.Logo src={logo} alt="logo" />
      <S.SociaMedia>
        <li>
          <img src={insta} alt="instagram" />
        </li>
        <li>
          <img src={face} alt="instagram" />
        </li>
        <li>
          <img src={twitter} alt="instagram" />
        </li>
      </S.SociaMedia>
      <S.Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.Text>
    </S.Container>
  )
}

export default Footer
