import StyledNotification from './style'
import btn_close from '../../assets/images/btn_close.png'
import { useDispatch } from 'react-redux'
import { removeNotif } from '../../store/reducers/notifications'
import { motion, useTime, useTransform } from 'framer-motion'

const AUTO_DISMISS_TIMER = 6000

function Notification({ title, text, id }: NotificationProps) {
  const dispatch = useDispatch()
  const timer = useTime()
  const timerBar = useTransform(timer, [0, AUTO_DISMISS_TIMER], [360, 0])

  setTimeout(() => {
    dispatch(removeNotif(id!))
  }, AUTO_DISMISS_TIMER)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', damping: 8 }}
    >
      <StyledNotification>
        <motion.div id="timer" style={{ width: timerBar }}></motion.div>
        <div>
          <h1>{title}</h1>
          <button onClick={() => dispatch(removeNotif(id!))}>
            <img src={btn_close} />
          </button>
        </div>
        <p>{text}</p>
      </StyledNotification>
    </motion.div>
  )
}

export default Notification
