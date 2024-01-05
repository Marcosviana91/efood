export type CardProps = {
  image: string
  title: string
  desciption: string
  tags: string[]
  note: number
  page: number
}

export interface MenuItemProps {
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
}

export interface MenuItemModalProps extends MenuItemProps {
  showModal: boolean
  toggleModal: () => void
}

export type RestaurantPageProps = {
  name: string
  food_type: string
  hero_image: string
  menu_itens: MenuItemProps[]
}

export type RestauranteApiProps = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItemProps[]
}
