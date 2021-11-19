import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Main from '../components/Main';
import {ContenedorStyle} from '../styles/Utilidades.styles';

function App() {
  return (
    <>
      <ContenedorStyle>
        <NavBar />
        <Hero />
        <Main />
      </ContenedorStyle>
    </>
  );
}

export default App;
