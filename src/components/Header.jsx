import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
      <header className="encabezado">
          <Link className='enlace' to="/Home">Home</Link>
          <Link className='enlace' to="/Servicios">Servicios</Link>
          <Link className='enlace' to="/Contacto">Contacto</Link>
          <Link className='enlace' to="/Productos">Productos</Link>
          <Link className='enlace' to="/Nosotros">Acerca de</Link>
          
      </header>
  )
}

export {Header};