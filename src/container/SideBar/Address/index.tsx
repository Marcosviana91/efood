import { useDispatch } from 'react-redux'
import { changeContent } from '../../../store/reducers/cart'

import StyledAdressForm from './style'

function AddressForm() {
  const dispatch = useDispatch()
  return (
    <StyledAdressForm>
      <h3>Entrega</h3>
      <form>
        <label>
          <span>Quem irá receber</span>
          <input type="text" />
        </label>
        <label>
          <span>Endereço</span>
          <input type="text" />
        </label>
        <label>
          <span>Cidade</span>
          <input type="text" />
        </label>
        <div>
          <label>
            <span>CEP</span>
            <input type="text" />
          </label>
          <label>
            <span>Número</span>
            <input type="text" />
          </label>
        </div>
        <label>
          <span>Complemento (opcional)</span>
          <input type="text" />
        </label>
        <button
          type="submit"
          onClick={(evt) => {
            evt.preventDefault()
            dispatch(changeContent('cardform'))
          }}
        >
          Continuar com o pagamento
        </button>
        <button type="button" onClick={() => dispatch(changeContent('cart'))}>
          Voltar para o carrinho
        </button>
      </form>
    </StyledAdressForm>
  )
}

export default AddressForm
