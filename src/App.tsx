import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/estaticos/Navbar/Navbar';
import Inicio from './paginas/Inicio/Inicio';
import Projetos from './paginas/projetos/Projetos';
import { Conhecimentos } from './paginas/conhecimentos/Conhecimentos';


function App() {

  return (
    <>
      
      <Router>
      <div>
        <Navbar/>
      </div>
      
      <div style={{ minHeight: '100vh' }}>
        <Inicio/>
        <Projetos/>
        <Conhecimentos/>
        <Routes>
        
        
        

        

          

          

          

        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
    </>
  )
}

export default App
