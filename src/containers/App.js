import Hero from '../components/Hero';
import Main from '../components/Main';
import {ContenedorStyle} from '../styles/Utilidades.styles';
import { GlobalStyle } from '../styles/Main.styles'

function App({oferta, popular}) {
  return (
    <>
      <ContenedorStyle>
        <Hero />
        <Main oferta={oferta} popular={popular} />
        <GlobalStyle />
      </ContenedorStyle>
    </>
  );
}

export default App;
