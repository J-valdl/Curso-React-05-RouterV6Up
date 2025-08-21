import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom';
import LayoutPublic from './layouts/layoutPublic.jsx';
import Inicio from './pages/Inicio.jsx';
import Contacto from './pages/Contacto.jsx';
import Blog from './pages/Blog.jsx';
import NotFound from './pages/NotFound.jsx';
import BlogDetails from './pages/BlogDetails.jsx';

const App = () => {
  return <>
    <Navbar />
      <Routes>
        <Route path="/" element={ <LayoutPublic /> } >
          <Route element={ <Inicio /> } path="/"/>
          <Route element={ <Contacto /> } path="/contacto"/>
          <Route element={ <Blog /> } path="/blog"/>
          <Route element={ <BlogDetails /> } path="/blog/:id"/>
          <Route element={ <NotFound /> } path="*"/>
        </Route>
      </Routes>
  </>
}

export default App
