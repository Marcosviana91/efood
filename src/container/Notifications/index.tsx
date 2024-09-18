import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Notification from '../../components/Notification'
import StyledNotificationsContainer from './style'
import { motion, AnimatePresence } from 'framer-motion'

function NotificationsContainer() {
  const notifications = useSelector(
    (state: RootReducer) => state.notificationsReducer.itens
  )
  return (
    <StyledNotificationsContainer>
      <AnimatePresence>
        {notifications.map((value) => {
          return (
            <motion.li layout key={value.id} exit={{ opacity: 0, y: 100 }}>
              <Notification
                title={value.title}
                text={value.text}
                id={value.id}
              />
            </motion.li>
          )
        })}
      </AnimatePresence>
    </StyledNotificationsContainer>
  )
}

export default NotificationsContainer
