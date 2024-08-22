import styled from 'styled-components'

export const Container = styled.footer`
  background-color: #ffebd9;
  width: 100%;
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  box-sizing: border-box;
`

export const Logo = styled.img`
  max-width: 125px;
  margin-bottom: 20px;
`

export const SociaMedia = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;

  li {
    margin-right: 10px;
  }

  li:last-child {
    margin-right: 0;
  }
`

export const Text = styled.p`
  font-family: Roboto, 'sans-serif';
  font-size: 10px;
  line-height: 11px;
  font-weight: 400;
  text-align: center;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`
