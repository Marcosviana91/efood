import { styled } from 'styled-components'

const StyledHero = styled.div`
  background-color: white;
  height: 280px;
  display: block;
  padding-top: 24px;
  padding-bottom: 32px;

  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-size: 32px;
    font-weight: 100;

    strong {
      font-weight: 900;
    }
  }
`
export default StyledHero
