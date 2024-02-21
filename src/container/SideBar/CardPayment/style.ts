import { styled } from 'styled-components'

const StyledCardForm = styled.aside`
  width: 360px;
  background-color: #e66767;
  padding: 32px 8px;
  > h3 {
    color: #ffebd9;
    font-weight: 700;
    font-size: 16px;
    line-height: 18.75px;
    margin-bottom: 16px;
  }
  > form {
    label {
      display: block;
      margin-bottom: 8px;
      > span {
        display: block;
        color: #ffebd9;
        font-weight: 700;
        font-size: 14px;
        line-height: 16.41px;
        margin-bottom: 8px;
      }
      > input {
        width: 100%;
        height: 32px;
        padding: 8px;
        color: #4b4b4b;
        background-color: #ffebd9;
        font-weight: 700;
        font-size: 14px;
        line-height: 16.41px;
      }
    }
    > div {
      display: flex;
      justify-content: space-between;
      > label {
        width: 155px;
        &#cardNumber {
          width: 228px;
        }
        &#cardCode {
          width: 87px;
        }
      }
    }

    > button {
      background-color: #ffebd9;
      font-weight: 700;
      font-size: 14px;
      line-height: 16.41px;
      width: 100%;
      padding: 4px;
      margin-bottom: 8px;
      &[type='submit'] {
        margin-top: 16px;
      }
    }
  }
`

export default StyledCardForm
