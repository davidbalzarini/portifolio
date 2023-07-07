import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/estaticos/Navbar/Navbar';
import Inicio from './paginas/Inicio/Inicio';
import Projetos from './paginas/projetos/Projetos';

function App() {

  return (
    <>
      
      <Router>
      <div>
        <Navbar/>
      </div>
      
      <div style={{ minHeight: '100vh' }}>
        <Inicio/>
        {<Projetos/>}
        <Routes>

        
          {/* { <Route path='/navmob' element={<NavMob />} /> */}
        

          

          

          {/* <Route path='/page' element={<NavMob />} />
          
          

          <Route path='/login' element={<Login />} />

          <Route path='/home' element={<Home />} />

          <Route path='/sobre' element={<Sobre />} />

          <Route path='/contato' element={<Contato />} />

          <Route path='/cadastrousuario' element={<CadastroUsuario />} />

          <Route path='/doacoes' element={<ListaProduto />} />
          
          <Route path='/doacao' element={<ListaDoacoes />} />

          <Route path="/formularioProduto" element={<CadastroProduto />} />

          <Route path="/formularioProduto/:id" element={<CadastroProduto />} />

          <Route path='/deletar/:id' element={<DeletarProduto />} />

          <Route path='/categoria' element={<ListaCategoria />} />

          <Route path="/formularioCategoria" element={<CadastroCategoria />} />

          <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />

          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          
          <Route path="/update" element={<FileUploadButton />} /> */}

        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
    </>
  )
}

export default App
