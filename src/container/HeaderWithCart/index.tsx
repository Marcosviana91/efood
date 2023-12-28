import StyledHeaderWithCart from './style'
import efoodLogo from '../../assets/images/logo.svg'

const HeaderWithCart = () => (
  <StyledHeaderWithCart>
    <div className="container">
      <span>Restaurantes</span>
      <img src={efoodLogo} alt="Logo do efood" />
      <span>0 produtos no carrinho</span>
    </div>
  </StyledHeaderWithCart>
)

export default HeaderWithCart
