import StyledCartCard from './style'

import pizza from '../../assets/images/pizza_cart_card.png'
import lixeira from '../../assets/images/lixeira_icon.png'

function CartCard() {
  return (
    <StyledCartCard>
      <img src={pizza} alt="" />
      <h3>Pizza Marguerita</h3>
      <span>R$ 60,90</span>
      <button type="button">
        <img src={lixeira} />
      </button>
    </StyledCartCard>
  )
}

export default CartCard
