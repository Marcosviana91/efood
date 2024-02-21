declare interface MenuItemProps {
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
}

declare interface MenuItemModalProps extends MenuItemProps {
  showModal: boolean
  toggleModal: () => void
}

declare interface RestauranteApiProps {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItemProps[]
}
