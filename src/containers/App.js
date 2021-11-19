import Hero from '../components/Hero';
import Main from '../components/Main';
import {ContenedorStyle} from '../styles/Utilidades.styles';
import { AppRouter } from '../router/AppRouter';

function App() {
  return (
    <>
      <ContenedorStyle>
        <AppRouter />
        <Hero />
        <Main />
      </ContenedorStyle>
    </>
  );
}

export default App;
