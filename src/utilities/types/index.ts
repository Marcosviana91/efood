export type CardProps = {
  image: string
  title: string
  desciption: string
  tags: string[]
  note: number
  page: number
}

export type MenuItemProps = {
  item_name: string
  item_description: string
  item_image: string
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
  cardapio: {
    id: number
    nome: string
    descricao: string
    preco: number
    porcao: string
    foto: string
  }
}
