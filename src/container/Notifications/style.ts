import { styled } from 'styled-components'

const StyledNotificationsContainer = styled.ul`
  position: fixed;
  bottom: 0;
  right: 0;
  height: min-content;
  width: 360px;
  z-index: 1000;
  margin-bottom: 32px;
  margin-right: 16px;

  display: flex;
  flex-direction: column;
  row-gap: 8px;
`

export default StyledNotificationsContainer
