import { useParams } from 'react-router-dom'

import HeaderWithCart from '../../container/HeaderWithCart'
import MenuList from '../../container/MenuList'

import { useEffect, useState } from 'react'
import { RestauranteApiProps } from '../../utilities/types'

const Restaurants = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<RestauranteApiProps>()
  useEffect(() => {
    console.log(id)

    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/' + id)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setRestaurante(res)
      })
  }, [])
  if (!restaurante) return <h3>Carregando</h3>
  document.title = 'eFood | ' + restaurante.titulo

  return (
    <>
      <HeaderWithCart />
      <MenuList
        name={restaurante?.titulo}
        food_type={restaurante?.tipo}
        hero_image={restaurante?.capa}
        menu_itens={restaurante?.cardapio}
      />
    </>
  )
}

export default Restaurants
