import { StyledCardButton, StyledMenuItemButton } from './style'

type Props = {
  children: string
  to: string
}

export const CardButton = (props: Props) => (
  <StyledCardButton to={`/restaurantes?q=${props.to}`}>
    {props.children}
  </StyledCardButton>
)

export const MenuItemButton = (props: Props) => (
  <StyledMenuItemButton>{props.children}</StyledMenuItemButton>
)
