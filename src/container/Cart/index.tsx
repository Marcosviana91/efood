import { useDispatch, useSelector } from 'react-redux'
import { toggleCartDisplay } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import CartCard from '../../components/CartCard'
import StyledCart, {
  StyledOverlay,
  StyledCartContainer,
  StyledCartResumo
} from './style'

function CartContainer() {
  const itens = useSelector((state: RootReducer) => state.cartReducer.itens)
  return (
    <StyledCartContainer>
      <ul>
        {itens.map((item, _index) => {
          console.log(item, _index)
          return <CartCard key={_index} {...item} />
        })}
      </ul>
      <StyledCartResumo>
        <div>
          <span>Valor total:</span>
          <span>R$ 182,70</span>
        </div>
        <button> Continuar com a entrega</button>
      </StyledCartResumo>
    </StyledCartContainer>
  )
}

function Cart() {
  const dispatch = useDispatch()
  const showCart = useSelector((state: RootReducer) => state.cartReducer.show)

  if (showCart) {
    return (
      <StyledCart>
        <StyledOverlay onClick={() => dispatch(toggleCartDisplay())} />
        <CartContainer />
      </StyledCart>
    )
  }
  return <></>
}

export default Cart
