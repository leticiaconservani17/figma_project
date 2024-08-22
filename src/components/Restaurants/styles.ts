import styled from 'styled-components'

export const ContentItem = styled.div`
  background-color: #ffffff;
  border: 1px solid #e66767;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1280px) {
    margin-top: 30px;
  }
`

export const HeadDiv = styled.div`
  widht: 100%;
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  position: relative;
  display: block;
  object-fit: cover;
`

export const TagContent = styled.div`
  position: absolute;
  top: 20px;
  z-index: 2;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  width: 100%;
  right: 16px;
`

export const Tag = styled.span`
  font-weight: bold;
  font-size: 12px;
  padding: 4px 8px;
  background-color: #e66767;
  color: #fff;
`

export const Item = styled.li`
  padding: 16px;
  list-style: none;
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const HeadItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: space-between;

    li {
      margin-right: 10px;
      display: flex;
      align-items: center;
    }

    img {
      margin-left: 5px;
      width: 20px;
      height: 20px;
    }
  }
`

export const Description = styled.p`
  margin-bottom: 14px;
  margin-top: 24px;
`

export const Title = styled.h3`
  margin-top: 5px;
`

export const Rank = styled.p`
  margin-right: 10px;
  margin-top: 5px;
  font-weight: bold;
  font-size: 18px;
`

export const Button = styled.button`
  background-color: #e66767;
  border: none;
  color: #fff;
  padding: 10px;
  align-self: flex-start;
  margin-top: auto;
  cursor: pointer;
`
