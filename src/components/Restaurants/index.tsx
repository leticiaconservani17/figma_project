import * as S from './styles'
import star from '../../images/star.svg'
import { useNavigate } from 'react-router-dom'

type Props = {
  title: string
  description: string
  image: string
  infos: string[]
  rank: string
  id: number
}

const Item = ({ title, description, infos, image, rank, id }: Props) => {
  const navigate = useNavigate()

  const Navigation = () => {
    navigate(`/restaurant/${id}`)
  }

  return (
    <S.ContentItem>
      <S.HeadDiv>
        <S.Image src={image} alt={title} />
        <S.TagContent>
          {infos.map((info) => (
            <S.Tag key={info}>{info}</S.Tag>
          ))}
        </S.TagContent>
      </S.HeadDiv>
      <S.Item>
        <S.HeadItem>
          <ul>
            <li>
              <S.Title>{title}</S.Title>
            </li>
            <li>
              <S.Rank>{rank}</S.Rank>
              <img src={star} alt="" />
            </li>
          </ul>
        </S.HeadItem>
        <S.Description>{description}</S.Description>
        <S.Button onClick={Navigation}>
          {' '}
          <p> Saiba mais</p>
        </S.Button>
      </S.Item>
    </S.ContentItem>
  )
}

export default Item
