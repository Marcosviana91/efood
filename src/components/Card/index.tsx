import StyledCard, { CardImg } from './style'
import estrela from '../../assets/estrela.svg'
import CardButton from '../Button'

type Props = {
  image: string
  title: string
  desciptiom: string
  tags: string[]
}

const Card = () => (
  <StyledCard>
    <CardImg />
    <div id="desc">
      <div id="card_header">
        <h3>Hioki Sushi</h3>{' '}
        <div id="card_point">
          <span>4.9</span>
          <img src={estrela} />
        </div>
      </div>
      <p>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </p>
      <div>
        <CardButton>Saiba mais</CardButton>
      </div>
    </div>
  </StyledCard>
)

export default Card
