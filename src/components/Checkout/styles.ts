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
export const ErrorMessage = styled.p`
  color: #ffebd9;
  background-color: rgba(255, 77, 77, 0.6);
  border-left: 4px solid #ffebd9;
  padding: 8px 12px;
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  &::before {
    content: '⚠️';
    margin-right: 8px;
  }
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
export const Sidebar = styled.aside`
  background-color: #e66767;
  z-index: 1;
  padding: 32px 8px 0 8px;
  width: 360px;
  @media (max-width: 768px) {
    width: 300px;
  }
  ul {
    max-height: 83%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 8px;
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

export const Title = styled.h3`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.75px;
  text-align: left;
  color: #ffebd9;
  margin-bottom: 8px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`

export const Label = styled.label`
  margin-top: 8px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: left;
  color: #ffebd9;
  margin-bottom: 8px;
`

export const Input = styled.input<{ isError?: boolean }>`
  height: 32px;
  line-height: 32px;
  border: none;
  background-color: ${(props) => (props.isError ? '#ffcab5' : '#ffebd9')};
  color: black;
  padding: 5px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
`
export const CEPDiv = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;

  div {
    width: 45%;
    input {
      width: 100%;
    }
  }
`
