import StyledCartCard from './style'

import lixeira from '../../assets/images/lixeira_icon.png'
import { MenuItemProps } from '../../utilities/types'
import { formataPreco } from '../../utilities/helper'

function CartCard(props: MenuItemProps) {
  return (
    <StyledCartCard>
      <img src={props.foto} alt={props.nome} />
      <h3>{props.nome}</h3>
      <span>{formataPreco(props.preco)}</span>
      <button type="button">
        <img src={lixeira} />
      </button>
    </StyledCartCard>
  )
}

export default CartCard
