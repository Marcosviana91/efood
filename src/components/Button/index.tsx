import StyledCardButton from './style'

type Props = {
  children: string
}

const CardButton = (props: Props) => (
  <StyledCardButton>{props.children}</StyledCardButton>
)

export default CardButton
