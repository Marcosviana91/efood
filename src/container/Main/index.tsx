import StyledMain from './style'

import Card from '../../components/Card'
import { CardProps } from '../../utilities/types'

import hioki_sushi from '../../assets/hioki_sushi.png'
import la_dolce_vita_trattoria from '../../assets/la_dolce_vita_trattoria.png'

const mock: CardProps[] = [
  {
    image: hioki_sushi,
    desciption:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    tags: ['Destaque da semana', 'Japonesa'],
    note: 4.9
  }
]

const Header = () => (
  <StyledMain>
    {mock.map((card, index) => (
      <Card
        key={index}
        image={card.image}
        desciption={card.desciption}
        title={card.title}
        tags={card.tags}
        note={card.note}
      />
    ))}
  </StyledMain>
)

export default Header
