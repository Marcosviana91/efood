import StyledMain from './style'

import Card from '../../components/Card'
import { CardProps } from '../../utilities/types'

import hioki_sushi from '../../assets/images/restaurants/hioki_sushi/hioki_sushi.png'
import la_dolce_vita_trattoria from '../../assets/images/restaurants/la_dolce_vita_trattoria/la_dolce_vita_trattoria.png'

const mock: CardProps[] = [
  {
    image: hioki_sushi,
    title: 'Hioki Sushi',
    desciption:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    tags: ['Destaque da semana', 'Japonesa'],
    note: 4.9,
    page: 'hioki_sushi'
  },
  {
    image: la_dolce_vita_trattoria,
    title: 'La Dolce Vita Trattoria',
    desciption:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    note: 4.6,
    page: 'la_dolce_vita_trattoria'
  },
  {
    image: hioki_sushi,
    title: 'Hioki Sushi',
    desciption:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    tags: ['Destaque da semana', 'Japonesa'],
    note: 4.9,
    page: 'hioki_sushi'
  },
  {
    image: la_dolce_vita_trattoria,
    title: 'La Dolce Vita Trattoria',
    desciption:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    note: 4.6,
    page: 'la_dolce_vita_trattoria'
  },
  {
    image: la_dolce_vita_trattoria,
    title: 'La Dolce Vita Trattoria',
    desciption:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    note: 4.6,
    page: 'la_dolce_vita_trattoria'
  },
  {
    image: hioki_sushi,
    title: 'Hioki Sushi',
    desciption:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    tags: ['Destaque da semana', 'Japonesa'],
    note: 4.9,
    page: 'hioki_sushi'
  }
]

const Main = () => (
  <>
    <StyledMain>
      {mock.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          desciption={card.desciption}
          title={card.title}
          tags={card.tags}
          note={card.note}
          page={card.page}
        />
      ))}
    </StyledMain>
  </>
)

export default Main
