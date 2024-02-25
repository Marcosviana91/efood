import { styled } from 'styled-components'
import { motion } from 'framer-motion'

const StyledOverlay = styled(motion.div)`
  height: 100vh;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`
const StyledSideBar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
`

export function StyledOverlayMotion({ onClick }: { onClick: () => void }) {
  return (
    <StyledOverlay
      onClick={onClick}
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'tween' }}
    />
  )
}

export default StyledSideBar
