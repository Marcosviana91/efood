import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence, motion, Variants } from 'framer-motion'

import { RootReducer } from '../../../store'
import { changeContent } from '../../../store/reducers/cart'

import CartCard from '../../../components/CartCard'

import { formataPreco } from '../../../utilities/helper'

import StyledCartContainerMotion, { StyledCartResumo } from './style'

const itemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut'
    }
  }
}

const listVariants: Variants = {
  initial: {
    opacity: 0
  },
  final: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
}

function CartContainer() {
  const itens = useSelector((state: RootReducer) => state.cartReducer.itens)
  const dispatch = useDispatch()

  return (
    <StyledCartContainerMotion>
      <motion.ul variants={listVariants} initial="initial" animate="final">
        <AnimatePresence>
          {itens.map((item) => {
            return (
              <motion.li
                key={item.id}
                variants={itemVariants}
                exit={{
                  opacity: 0,
                  scale: 0
                }}
              >
                <CartCard {...item} />
              </motion.li>
            )
          })}
        </AnimatePresence>
      </motion.ul>
      {itens.length ? (
        <StyledCartResumo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <span>Valor total:</span>
            <span>
              {formataPreco(
                itens.reduce((acc, val) => {
                  return (acc += val.preco)
                }, 0)
              )}
            </span>
          </div>
          <button onClick={() => dispatch(changeContent('adressform'))}>
            Continuar com a entrega
          </button>
        </StyledCartResumo>
      ) : (
        <span style={{ color: 'white' }}>O carrinho está vazio...</span>
      )}
    </StyledCartContainerMotion>
  )
}

export default CartContainer
