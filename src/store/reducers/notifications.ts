import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type NotificationsStore = {
  itens: NotificationProps[]
}

const initialState: NotificationsStore = {
  itens: []
}

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotif: (state, action: PayloadAction<NotificationProps>) => {
      if (!action.payload.id) action.payload.id = Date.now()
      if (
        state.itens.find((_item) => _item.id === action.payload.id) &&
        action.payload.id == -1
      ) {
        alert('O carrinho está vazio, compre algo para acessá-lo.')
      } else {
        state.itens.push(action.payload)
      }
    },
    removeNotif: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { addNotif, removeNotif } = notificationSlice.actions

export default notificationSlice.reducer
