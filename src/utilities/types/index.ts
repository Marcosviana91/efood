export type CardProps = {
  image: string
  title: string
  desciption: string
  tags: string[]
  note: number
  page: string
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
