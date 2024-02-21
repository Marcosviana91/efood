import { useParams } from 'react-router-dom'

import { useGetRestauranteByIdQuery } from '../../services/api'

import HeaderWithCart from '../../container/HeaderWithCart'
import MenuList from '../../container/MenuList'

const Restaurants = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestauranteByIdQuery(id!)

  if (!restaurante) return <h3>Carregando</h3>
  document.title = 'eFood | ' + restaurante.titulo

  return (
    <>
      <HeaderWithCart />
      <MenuList {...restaurante} />
    </>
  )
}

export default Restaurants
