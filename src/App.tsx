import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/estaticos/Navbar/Navbar';
import Inicio from './paginas/Inicio/Inicio';
import Projetos from './paginas/projetos/Projetos';
import { ThemeProvider } from './components/estaticos/ThemeToogle/Theme';
import { Sobre } from './paginas/Sobre/Sobre';
import { Footer } from './components/estaticos/Footer/Footer';
import { Certificados } from './paginas/certificados/Certificados';
import { LanguageProvider } from './components/Idioma/idioma';
import Conhecimentos from './paginas/conhecimentos/Conhecimentos';





function App() {

  

  return (
    <div >
      
      <Router>
      <div>
      <LanguageProvider>
          <ThemeProvider>
            <Navbar/>
              <Inicio/>
              <Projetos/>
              <Sobre/>
              <Conhecimentos/>
              <Certificados/>
            <Footer/>
          </ThemeProvider>
        </LanguageProvider>
          </div>
          
          
    
            <Routes>
            
            
            

            

              

              

              

            </Routes>
          
          
      {/* <Footer /> */}
    </Router>
    </div>
  )
}

export default App
