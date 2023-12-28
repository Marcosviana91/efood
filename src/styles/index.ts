import { createGlobalStyle } from 'styled-components'
import { estilo } from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: ${estilo.corDaFonte};
  }
`

export default EstiloGlobal
