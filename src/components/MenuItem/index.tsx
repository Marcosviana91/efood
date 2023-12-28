import StyledMenuItem from './style'

import { StyledMenuItemButton } from '../Button/style'
import { MenuItemProps } from '../../utilities/types'

const MenuItem = (props: MenuItemProps) => (
  <StyledMenuItem>
    <img src={props.item_image} alt="Pizza de Marguerita" />
    <h3>{props.item_name}</h3>
    <p>{props.item_description}</p>
    <StyledMenuItemButton>Adicionar ao carrinho</StyledMenuItemButton>
  </StyledMenuItem>
)

export default MenuItem
