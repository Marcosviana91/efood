import StyledMenuItem from './style'

import { StyledMenuItemButton } from '../Button/style'
import { MenuItemProps } from '../../utilities/types'

const MenuItem = (props: MenuItemProps) => (
  <StyledMenuItem>
    <img src={props.foto} alt="Pizza de Marguerita" />
    <h3>{props.nome}</h3>
    <p>{props.descricao.substring(0, 170) + '...'}</p>
    <StyledMenuItemButton>Adicionar ao carrinho</StyledMenuItemButton>
  </StyledMenuItem>
)

export default MenuItem
