import StyledFooter from './style'
import efoodLogo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <StyledFooter>
    <img src={efoodLogo} alt="Logo do efood" />
    <div>
      <img src={facebook} alt="Facebook" />
      <img src={instagram} alt="Instagram" />
      <img src={twitter} alt="Twitter" />
    </div>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </StyledFooter>
)

export default Footer
