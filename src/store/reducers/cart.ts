import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { MenuItemProps } from '../../utilities/types'

type CartState = {
  show: boolean
  itens: MenuItemProps[]
}

const initialState: CartState = {
  show: false,
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartDisplay: (state) => {
      state.show = !state.show
    },
    addIten: (state, action: PayloadAction<MenuItemProps>) => {
      if (state.itens.find((_item) => _item.id === action.payload.id)) {
        alert('Item já adicionado...')
      } else {
        state.itens.push(action.payload)
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { toggleCartDisplay, addIten, removeItem } = cartSlice.actions

export default cartSlice.reducer
