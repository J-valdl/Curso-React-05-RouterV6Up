const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
        <div className="container">
            <a href="/" className="btn btn-outline-primary">
                Inicio
            </a>
            <a href="/about" className="btn btn-outline-primary">
                Nosotros
            </a>
            <a href="/contacto" className="btn btn-outline-primary">
                Contacto
            </a>
            <a href="/blog" className="btn btn-outline-primary">
                Blog
            </a>
        </div>
    </div>
    
  )
}

export default Navbar