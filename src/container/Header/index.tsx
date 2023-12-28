import StyledHeader from './style'
import efoodLogo from '../../assets/logo.svg'

const Header = () => (
  <StyledHeader>
    <img src={efoodLogo} alt="Logo do efood" />
    <h1>Viva experiências gastronômicasno conforto da sua casa</h1>
  </StyledHeader>
)

export default Header
