import HeaderWithCart from '../../container/HeaderWithCart'
import MenuList from '../../container/MenuList'

import logo_la_dolce_vita_trattoria from '../../assets/images/restaurants/la_dolce_vita_trattoria/la_dolce_vita_trattoria.png'
import logo_hioki_sushi from '../../assets/images/restaurants/hioki_sushi/hioki_sushi.png'
import pizza_marguerita from '../../assets/images/restaurants/la_dolce_vita_trattoria/pizza_marguerita.png'
import barca_tradicional from '../../assets/images/restaurants/hioki_sushi/barca_tradicional.jpg'
import { MenuItemProps, RestaurantPageProps } from '../../utilities/types'

const mock_itens: MenuItemProps[] = [
  {
    item_name: 'Pizza Marquerita',
    item_description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    item_image: pizza_marguerita
  },
  {
    item_name: 'Pizza Marquerita',
    item_description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    item_image: pizza_marguerita
  },
  {
    item_name: 'Pizza Marquerita',
    item_description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    item_image: pizza_marguerita
  },
  {
    item_name: 'Pizza Marquerita',
    item_description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    item_image: pizza_marguerita
  },
  {
    item_name: 'Pizza Marquerita',
    item_description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    item_image: pizza_marguerita
  },
  {
    item_name: 'Pizza Marquerita',
    item_description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    item_image: pizza_marguerita
  }
]
const mock_itens2: MenuItemProps[] = [
  {
    item_name: 'Barca Japonesa Tradicional - (40 Un.)',
    item_description:
      'Contém 7 Sashimi de Salmão, 6 Sushi de Salmão, 4 Maki Filadélfia, 2 Maki Salmão, 3 Nigiri Skin, 3 Uramaki Salmão Grelhado, 3 Uramaki Salmão Cheddar, 4 Joy Tartar de Salmão com...',
    item_image: barca_tradicional
  },
  {
    item_name: 'Barca Japonesa Tradicional - (40 Un.)',
    item_description:
      'Contém 7 Sashimi de Salmão, 6 Sushi de Salmão, 4 Maki Filadélfia, 2 Maki Salmão, 3 Nigiri Skin, 3 Uramaki Salmão Grelhado, 3 Uramaki Salmão Cheddar, 4 Joy Tartar de Salmão com...',
    item_image: barca_tradicional
  },
  {
    item_name: 'Barca Japonesa Tradicional - (40 Un.)',
    item_description:
      'Contém 7 Sashimi de Salmão, 6 Sushi de Salmão, 4 Maki Filadélfia, 2 Maki Salmão, 3 Nigiri Skin, 3 Uramaki Salmão Grelhado, 3 Uramaki Salmão Cheddar, 4 Joy Tartar de Salmão com...',
    item_image: barca_tradicional
  },
  {
    item_name: 'Barca Japonesa Tradicional - (40 Un.)',
    item_description:
      'Contém 7 Sashimi de Salmão, 6 Sushi de Salmão, 4 Maki Filadélfia, 2 Maki Salmão, 3 Nigiri Skin, 3 Uramaki Salmão Grelhado, 3 Uramaki Salmão Cheddar, 4 Joy Tartar de Salmão com...',
    item_image: barca_tradicional
  },
  {
    item_name: 'Barca Japonesa Tradicional - (40 Un.)',
    item_description:
      'Contém 7 Sashimi de Salmão, 6 Sushi de Salmão, 4 Maki Filadélfia, 2 Maki Salmão, 3 Nigiri Skin, 3 Uramaki Salmão Grelhado, 3 Uramaki Salmão Cheddar, 4 Joy Tartar de Salmão com...',
    item_image: barca_tradicional
  },
  {
    item_name: 'Barca Japonesa Tradicional - (40 Un.)',
    item_description:
      'Contém 7 Sashimi de Salmão, 6 Sushi de Salmão, 4 Maki Filadélfia, 2 Maki Salmão, 3 Nigiri Skin, 3 Uramaki Salmão Grelhado, 3 Uramaki Salmão Cheddar, 4 Joy Tartar de Salmão com...',
    item_image: barca_tradicional
  }
]

const mock_la_dolce_vita_trattoria: RestaurantPageProps = {
  name: 'La Dolce Vita Trattoria',
  food_type: 'Italiana',
  hero_image: logo_la_dolce_vita_trattoria,
  menu_itens: mock_itens
}
const mock_hioki_sushi: RestaurantPageProps = {
  name: 'Hioki Sushi',
  food_type: 'Japonesa',
  hero_image: logo_hioki_sushi,
  menu_itens: mock_itens2
}

const mock_page: { [key: string]: RestaurantPageProps } = {
  la_dolce_vita_trattoria: mock_la_dolce_vita_trattoria,
  hioki_sushi: mock_hioki_sushi
}

const Restaurants = () => {
  const getRestaurantNameFromQuerie = window.location.search.substring(3)
  if (
    getRestaurantNameFromQuerie == '' &&
    window.location.pathname == '/restaurantes'
  ) {
    window.location.reload()
  }
  if (!Object.keys(mock_page).includes(getRestaurantNameFromQuerie)) {
    window.location.href = window.location.origin
  }

  document.title = 'eFood | ' + mock_page[getRestaurantNameFromQuerie].name

  return (
    <>
      <HeaderWithCart />
      <MenuList
        name={mock_page[getRestaurantNameFromQuerie].name}
        food_type={mock_page[getRestaurantNameFromQuerie].food_type}
        hero_image={mock_page[getRestaurantNameFromQuerie].hero_image}
        menu_itens={mock_page[getRestaurantNameFromQuerie].menu_itens}
      />
    </>
  )
}

export default Restaurants
