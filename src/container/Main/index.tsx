import { useGetRestaurantesQuery } from '../../services/api'

import StyledMain from './style'

import Card from '../../components/Card'

const Main = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  return (
    <StyledMain>
      {isLoading && <h1>Carregando</h1>}
      {restaurantes &&
        restaurantes.map((card) => <Card key={card.id} {...card} />)}
    </StyledMain>
  )
}

export default Main
