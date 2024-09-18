import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform
} from 'framer-motion'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../store/reducers/cart'

import StyledCartCard from './style'

import lixeira from '../../assets/images/lixeira_icon.png'
import { formataPreco } from '../../utilities/helper'

function CartCard(props: MenuItemProps) {
  const dispatch = useDispatch()

  const x = useMotionValue(0)
  const lixeiraScale = useTransform(x, [-60, -40, 40, 60], [5, 1, 1, 5])
  const lixeiraXPos = useTransform(x, [-350, -50, 0, 350], [80, -250, 0, -400])
  const lixeiraYPos = useTransform(x, [-50, 0, 50], [-35, 0, -35])
  const lixeiraBackground = useTransform(
    x,
    [-20, 0, 20],
    ['#FFEBD9ff', '#FFEBD900', '#FFEBD9ff']
  )
  const cardOpacity = useTransform(x, [-270, -150, 150, 270], [0.4, 1, 1, 0.4])

  useMotionValueEvent(x, 'change', (latest) => {
    if (latest > 250 || latest < -250) dispatch(removeItem(props.id))
  })
  return (
    <motion.div
      style={{ x, opacity: cardOpacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1.1}
    >
      <StyledCartCard>
        <img src={props.foto} alt={props.nome} />
        <h3>{props.nome}</h3>
        <span>{formataPreco(props.preco)}</span>
        <button
          type="button"
          onClick={() => {
            dispatch(removeItem(props.id))
          }}
        >
          <motion.img
            src={lixeira}
            initial={false}
            style={{
              backgroundColor: lixeiraBackground,
              scale: lixeiraScale,
              x: lixeiraXPos,
              y: lixeiraYPos
            }}
          />
        </button>
      </StyledCartCard>
    </motion.div>
  )
}

export default CartCard
