import Hero from '../components/Hero';
import Main from '../components/Main';
import {ContenedorStyle} from '../styles/Utilidades.styles';
import { GlobalStyle } from '../styles/Main.styles'

function App() {
  return (
    <>
      <ContenedorStyle>
        <Hero />
        <Main />
        <GlobalStyle />
      </ContenedorStyle>
    </>
  );
}

export default App;
