import { RestaurantPageProps } from '../../utilities/types'
import StyledHero from './style'

const Hero = (props: Omit<RestaurantPageProps, 'menu_itens'>) => (
  <StyledHero style={{ backgroundImage: `url(${props.hero_image})` }}>
    <div className="container">
      <h2>{props.food_type}</h2>
      <div>
        <strong>{props.name}</strong>
      </div>
    </div>
  </StyledHero>
)

export default Hero
