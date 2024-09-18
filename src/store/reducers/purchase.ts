import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: OrderProps = {
  products: [{ id: 1, price: 1 }],
  delivery: {
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: NaN,
      complement: ''
    }
  },
  payment: {
    card: {
      name: '',
      number: '',
      code: NaN,
      expires: {
        month: NaN,
        year: NaN
      }
    }
  }
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setProdutos: (state, action: PayloadAction<ProductProps[]>) => {
      state.products = action.payload
    },
    setDelivery: (state, action: PayloadAction<OrderProps['delivery']>) => {
      state.delivery = action.payload
    },
    setPayment: (state, action: PayloadAction<OrderProps['payment']>) => {
      state.payment = action.payload
    }
  }
})

export const { setProdutos, setDelivery, setPayment } = orderSlice.actions

export default orderSlice.reducer
