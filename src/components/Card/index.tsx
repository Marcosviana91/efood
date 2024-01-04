import StyledCard, { CardImg } from './style'
import estrela from '../../assets/images/estrela.svg'
import { CardButton } from '../Button'
import CardTag from '../Tags'
import { CardProps } from '../../utilities/types'

const Card = (props: CardProps) => (
  <StyledCard>
    <div id="card_container">
      {props.tags.map((tag, index) => (
        <CardTag key={index}>{tag}</CardTag>
      ))}
    </div>
    <CardImg style={{ backgroundImage: `url(${props.image})` }} />
    <div id="desc">
      <div id="card_header">
        <h3>{props.title}</h3>{' '}
        <div id="card_point">
          <span>{props.note}</span>
          <img src={estrela} />
        </div>
      </div>
      <p>{props.desciption}</p>
      <div>
        <CardButton to={`${props.page}`}>Saiba mais</CardButton>
      </div>
    </div>
  </StyledCard>
)

export default Card
