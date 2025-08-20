import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx';
import Contacto from './pages/Contacto.jsx';
import Blog from './pages/Blog.jsx';

const App = () => {
  return <>
    <Navbar />
    <h1>App</h1>

    
    <Routes>
      <Route element={ <Inicio /> } path="/"/>
      <Route element={ <Contacto /> } path="/contacto"/>
      <Route element={ <Blog /> } path="/blog"/>
    </Routes>
  </>
}

export default App
