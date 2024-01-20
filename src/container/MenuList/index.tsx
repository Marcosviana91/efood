import StyledMenuList from './style'

import Hero from '../Hero'

import MenuItem from '../../components/MenuItem'
import { RestauranteApiProps } from '../../utilities/types'

const MenuList = (props: RestauranteApiProps) => (
  <>
    <Hero {...props} />
    <div className="container">
      <StyledMenuList>
        {props.cardapio.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </StyledMenuList>
    </div>
  </>
)

export default MenuList
