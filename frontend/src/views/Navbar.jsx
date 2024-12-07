import { Container, Button, Navbar as NavbarAlias, Nav } from 'react-bootstrap';
import { setearValor } from '../assets/utils/funciones.js' /* Se crea funcion para ser utilizada cuando se necesite */
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const Navbar = () => {
  const { total } = useContext(CartContext)
  const token = false
  const botones = (token ?
    (<>
      <Link to='/profile'>
        <Button className="me-2" variant="outline-light">🔓Profile</Button>
      </Link>
      <Link to='/logout'>
        <Button className="me-2" variant="outline-light">🔒Logount</Button>
      </Link>
    </>) :
    (<>
      <Link to='/login'>
        <Button className="me-2" variant="outline-light">🔐Login</Button>
      </Link>
      <Link to='/register'>
        <Button className="me-2" variant="outline-light">🔐Registrer</Button>
      </Link>
    </>)
  )

  return (
    <>
      <NavbarAlias expand="lg" bg="dark" className='justify-content-between' data-bs-theme="dark">
        <Container>
          <NavbarAlias.Brand href="#home">¡Pizzeria Mamma Mia!</NavbarAlias.Brand>
          <NavbarAlias.Toggle aria-controls="basic-navbar-nav" />
          <NavbarAlias.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/'>
                <Button className="me-2" variant="outline-light">🍕Home</Button>
              </Link>
              {botones}
            </Nav>
            <Nav className='justify-content-end'>
              <Link to='/cart'>
                <Button variant="outline-light">🛒Total: ${setearValor(total)}</Button>
              </Link>
            </Nav>
          </NavbarAlias.Collapse>
        </Container>
      </NavbarAlias>
    </>
  )
}

export default Navbar