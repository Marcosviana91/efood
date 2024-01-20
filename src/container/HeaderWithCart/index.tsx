import { useDispatch, useSelector } from 'react-redux'
import { toggleCartDisplay } from '../../store/reducers/cart'

import StyledHeaderWithCart from './style'
import efoodLogo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { RootReducer } from '../../store'

const HeaderWithCart = () => {
  const dispatch = useDispatch()
  const itens = useSelector((state: RootReducer) => state.cartReducer.itens)
  return (
    <StyledHeaderWithCart>
      <div className="container">
        <span>Restaurantes</span>
        <Link to={'/'}>
          <img src={efoodLogo} alt="Logo do efood" />
        </Link>
        <span
          onClick={() => {
            if (itens.length > 0) dispatch(toggleCartDisplay())
            else alert('Carrinho Vazio')
          }}
        >
          {itens.length} produtos no carrinho
        </span>
      </div>
    </StyledHeaderWithCart>
  )
}

export default HeaderWithCart
