import StyledHeaderWithCart from './style'
import efoodLogo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const HeaderWithCart = () => (
  <StyledHeaderWithCart>
    <div className="container">
      <span>Restaurantes</span>
      <Link to={'/'}>
        <img src={efoodLogo} alt="Logo do efood" />
      </Link>
      <span>0 produtos no carrinho</span>
    </div>
  </StyledHeaderWithCart>
)

export default HeaderWithCart
