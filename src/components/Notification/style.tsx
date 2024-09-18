import { styled } from 'styled-components'
import { motion, MotionProps } from 'framer-motion'
import { estilo } from '../../styles/variaveis'

const StyledNotification = styled.div`
  background-color: ${estilo.corDaFonte2};
  border: 1px solid ${estilo.corDaFonte};
  border-radius: 4px;
  padding: 8px;
  min-height: 100px;
  position: relative;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    h1 {
      font-weight: 700;
      width: 90%;
      border-bottom: 1px solid ${estilo.corDaFonte};
    }

    button {
      background-color: ${estilo.corDaFonte};
      padding: 2px;
      border-radius: 4px;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }

  > p {
    text-align: justify;
    text-indent: 0.25in;
  }
`

const StyledNotificationTimer = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  height: 4px;
  width: 100%;
  background-color: ${estilo.corDaFonte};
  border-radius: 2px;
`
type MotionStyle = {
  style?: MotionProps['style']
}

export function MotionNotificationTimer(props: MotionStyle) {
  return <StyledNotificationTimer style={props.style} />
}

export default StyledNotification
