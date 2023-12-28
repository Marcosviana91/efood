import { styled } from 'styled-components'

import hioki_sushi from '../../assets/hioki_sushi.png'

const StyledCard = styled.div`
  height: 400px;
  width: 474px;
  border: 1px solid #e66767;

  #desc {
    padding: 8px;

    #card_header {
      display: flex;
      justify-content: space-between;

      h3 {
        font-size: 18px;
        font-weight: 700;
      }

      #card_point {
        display: flex;
        gap: 8px;
      }
    }

    p {
      font-size: 14px;
      margin: 16px 0;
    }
  }
`

const CardImg = styled.div`
  height: 218px;
  background-image: url(${hioki_sushi});
`

export default StyledCard

export { CardImg }
