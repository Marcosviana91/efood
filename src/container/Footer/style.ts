import { styled } from 'styled-components'

const StyledFooter = styled.footer`
  height: 298px;
  background-color: #ffebd9;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    gap: 8px;
    margin-top: 32px;
    margin-bottom: 80px;
  }

  p {
    width: 480px;
    font-size: 10px;
    text-align: center;
  }
`
export default StyledFooter
