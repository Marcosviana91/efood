import { styled } from 'styled-components'
import { estilo } from '../../../styles/variaveis'
import { motion } from 'framer-motion'

const StyledCartContainer = styled(motion.div)`
  width: 360px;
  background-color: ${estilo.corDaFonte};
  padding: 32px 8px;

  ul {
    max-height: 80vh;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const StyledCartResumo = styled(motion.div)`
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 16px;
    span {
      color: ${estilo.corDaFonte2};
      font-family: Roboto;
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: center;
    }
  }

  > button {
    background-color: ${estilo.corDaFonte2};
    width: 100%;
    height: 24px;

    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
  }
`
function StyledCartContainerMotion({ children }: { children: JSX.Element[] }) {
  return (
    <StyledCartContainer
      initial={{ x: 360 }}
      animate={{ x: 0 }}
      transition={{ type: 'tween' }}
    >
      {children}
    </StyledCartContainer>
  )
}
export default StyledCartContainerMotion
