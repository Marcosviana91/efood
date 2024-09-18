import { StyledMenuItemButton } from '../Button/style'

import StyledModal, { StyledModalContainer } from './style'
import btn_close from '../../assets/images/btn_close.png'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { addIten } from '../../store/reducers/cart'
import { addNotif } from '../../store/reducers/notifications'

import { formataPreco } from '../../utilities/helper'

const ModalItem = (props: MenuItemModalProps) => {
  const dispatch = useDispatch()
  const itensInCart = useSelector(
    (state: RootReducer) => state.cartReducer.itens
  )
  if (!props.showModal) return <></>

  return (
    <StyledModal onClick={props.toggleModal}>
      <StyledModalContainer className="container">
        <img
          id="btn_close"
          src={btn_close}
          alt="X"
          onClick={props.toggleModal}
        />
        <img id="image_item" src={props.foto} alt="imagem" />
        <div id="details">
          <h3>{props.nome}</h3>
          <p>
            {props.descricao}
            <br />
            <br />
            Serve: de {props.porcao}
          </p>
          <StyledMenuItemButton
            onClick={() => {
              const { id, nome, descricao, foto, porcao, preco } = props
              const data = { id, nome, descricao, foto, porcao, preco }

              if (itensInCart.find((_item) => _item.id === data.id)) {
                dispatch(
                  addNotif({
                    title: 'Este item já está no carrinho',
                    text: `${data.nome}`
                  })
                )
              } else {
                dispatch(addIten(data))

                dispatch(
                  addNotif({
                    title: 'Item adicionado ao carrinho',
                    text: `${data.nome} no valor de ${formataPreco(data.preco)}`
                  })
                )
              }
            }}
          >
            Adicionar ao carrinho - {formataPreco(props.preco)}
          </StyledMenuItemButton>
        </div>
      </StyledModalContainer>
    </StyledModal>
  )
}

export default ModalItem
