import { useDispatch } from 'react-redux'
import { changeContent } from '../../../store/reducers/cart'

import StyledCardForm from './style'

function CardPaymentForm() {
  const dispatch = useDispatch()
  return (
    <StyledCardForm>
      <h3>Pagamento - Valor a pagar R$ 190,90</h3>
      <form>
        <label>
          <span>Nome no cartão</span>
          <input type="text" />
        </label>
        <div>
          <label id="cardNumber">
            <span>Número do cartão</span>
            <input type="text" />
          </label>
          <label id="cardCode">
            <span>CVV</span>
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            <span>Mês de vencimento</span>
            <input type="text" />
          </label>
          <label>
            <span>Ano de vencimento</span>
            <input type="text" />
          </label>
        </div>
        <button
          type="submit"
          onClick={(evt) => {
            evt.preventDefault()
            dispatch(changeContent('ordermsg'))
          }}
        >
          Finalizar pagamento
        </button>
        <button
          type="button"
          onClick={() => dispatch(changeContent('adressform'))}
        >
          Voltar par a edição de endereço
        </button>
      </form>
    </StyledCardForm>
  )
}

export default CardPaymentForm
