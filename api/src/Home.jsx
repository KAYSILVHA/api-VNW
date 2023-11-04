import Cards from './Components/Cards/Cards'
import Main from './Components/Main/Main'
import { GlobalStyle } from '../src/assets/css/GlobalStyle'
// 1 - instalar e importar o axios
// 2- criar uma variavel de estado com UseState
// 3- criar uma função assíncrona
// 4- ativar a func assim que a página carregar com o useeffect
// 5- renderizar na tela: map()

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Cards />
      </Main>
    </>

  )
};

