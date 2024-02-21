import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import InputMask from 'react-input-mask'

import { changeContent } from '../../../store/reducers/cart'

import StyledCardForm from './style'

function CardPaymentForm() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      cardExpiresMonth: '',
      cardExpiresYear: ''
    },
    validationSchema: Yup.object({
      cardOwner: Yup.string()
        .min(3, 'O nome deve ter ao menos 3 letras ')
        .required('Este campo é obrigatório'),
      cardNumber: Yup.string().required('Este campo é obrigatório'),
      cardCode: Yup.string().required('Este campo é obrigatório'),
      cardExpiresMonth: Yup.string().required('Este campo é obrigatório'),
      cardExpiresYear: Yup.string().required('Este campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
      // dispatch(changeContent('ordermsg'))
    }
  })
  return (
    <StyledCardForm>
      <h3>Pagamento - Valor a pagar R$ 190,90</h3>
      <form onSubmit={formik.handleSubmit}>
        <label>
          <span>Nome no cartão</span>
          <input
            type="text"
            name="cardOwner"
            value={formik.values.cardOwner}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small>{formik.errors.cardOwner}</small>
        </label>
        <div>
          <label id="cardNumber">
            <span>Número do cartão</span>
            <InputMask
              mask="9999-9999-9999-9999"
              type="text"
              name="cardNumber"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small>{formik.errors.cardNumber}</small>
          </label>
          <label id="cardCode">
            <span>CVV</span>
            <InputMask
              mask="999"
              type="text"
              name="cardCode"
              value={formik.values.cardCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small>{formik.errors.cardCode}</small>
          </label>
        </div>
        <div>
          <label>
            <span>Mês de vencimento</span>
            <InputMask
              mask="99"
              type="text"
              name="cardExpiresMonth"
              value={formik.values.cardExpiresMonth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small>{formik.errors.cardExpiresMonth}</small>
          </label>
          <label>
            <span>Ano de vencimento</span>
            <InputMask
              mask="99"
              type="text"
              name="cardExpiresYear"
              value={formik.values.cardExpiresYear}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small>{formik.errors.cardExpiresYear}</small>
          </label>
        </div>
        <button type="submit">Finalizar pagamento</button>
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
