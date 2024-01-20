import { useEffect, useState } from 'react'

import StyledMain from './style'

import Card from '../../components/Card'
import { RestauranteApiProps } from '../../utilities/types'

const Main = () => {
  const [restaurantes, setRestaurantes] = useState<RestauranteApiProps[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setRestaurantes(res)
      })
  }, [])

  return (
    <>
      <StyledMain>
        {restaurantes.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </StyledMain>
    </>
  )
}

export default Main
