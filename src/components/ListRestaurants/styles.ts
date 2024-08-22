import styled from 'styled-components'
import { Props } from './list'

export const Container = styled.div<Omit<Props, 'isLoading' | 'restaurants'>>`
  display: flex;
  justify-content: center;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 472px);
  justify-content: center;
  gap: 50px 80px;
  font-family: Roboto, 'sans-serif';
  margin-top: 100px;
  margin-bottom: 100px;

  @media (max-width: 1280px) {
    display: block;
    width: 80%;
  }
`
