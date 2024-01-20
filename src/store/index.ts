import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/cart'

export const cartStore = configureStore({
  reducer: {
    cartReducer
  }
})

export type RootReducer = ReturnType<typeof cartStore.getState>
