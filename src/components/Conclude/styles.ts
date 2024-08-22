import styled from 'styled-components'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.paying {
    display: flex;
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
    font-size: 15px;
    height: 40px;
    margin-top: 16px;
  }
`

export const Sidebar = styled.aside`
  background-color: #e66767;
  z-index: 1;
  padding: 32px 8px 0 8px;
  width: 360px;
  ul {
    max-height: 83%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 8px;
  }
`

export const Title = styled.h3`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.75px;
  text-align: left;
  color: #ffebd9;
  margin-bottom: 8px;
`
export const Text = styled.p`
  margin-top: 16px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #ffebd9;
  margin-bottom: 16px;

  span {
    display: block;
    margin-bottom: 24px;
  }
`
