import { BrowserRouter as Router } from 'react-router';
import './App.css'
import Navbar from './components/estaticos/Navbar/Navbar';
import Inicio from './paginas/Inicio/Inicio';
import Projetos from './paginas/projetos/Projetos';
import { ThemeProvider } from './components/estaticos/ThemeToogle/Theme';
import { Footer } from './components/estaticos/Footer/Footer';
import { Certificados } from './paginas/certificados/Certificados';
import { LanguageProvider } from './components/Idioma/idioma';
import Conhecimentos from './paginas/conhecimentos/Conhecimentos';





function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <Navbar/>
          <div id="inicio">
            <Inicio />
          </div>
          <div id="projetos">
            <Projetos />
          </div>
          <div id="conhecimentos">
            <Conhecimentos />
          </div>
          <div id="certificados">
            <Certificados />
          </div>
          <Footer/>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
