import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffebd9;
  width: 100%;
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  max-width: 125px;
  margin-bottom: 35px;
`
export const SociaMedia = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-right: 10px;
  }
`

export const Text = styled.p`
  font-family: Roboto, 'sans-serif';
  font-size: 10px;
  line-height: 11px;
  font-weight: 400;
  width: 480px;
  text-align: center;
  margin-top: 70px;
`
