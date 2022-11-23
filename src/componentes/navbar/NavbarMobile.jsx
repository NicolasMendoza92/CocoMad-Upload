import React from 'react'
import { Nav, Offcanvas } from 'react-bootstrap';
import { BsFacebook } from 'react-icons/bs';
import { FaWrench } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { VscClose } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';


export const NavbarMobile = ({ setShow, show, user }) => {

  const handleClose = () => setShow(false);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} className="responsive-navbar text-white">
        <Offcanvas.Header className="responsive-navbar-header">
          <div className="logo-container-responsive" >
            <Nav.Link as={NavLink} to="/" onClick={handleClose}>
              <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1647437646/cocoMAD/LOGO_CON_CIRCULO-02_1_ya2rd3.png" alt="img logo" className="nav-logo-desktop" />
            </Nav.Link>
          </div>
          <button type="button" aria-label="Close" className="navbar-button mx-1" onClick={handleClose} ><VscClose /></button>
        </Offcanvas.Header>

        {/* si esta registrado el normal entonces  */}
        {user.role === 'admin' &&
          <Offcanvas.Header className="d-flex flex-column text-center bienvenido-user">
            <p>Bienvenido Sr/a {user.name} </p>
            <div>
              <Nav.Link as={NavLink} to="/adminBoard" onClick={handleClose}>
                <button className="boton-artesanal-cel px-4" >AdminBoard</button>
              </Nav.Link>
            </div>
            <button onClick={logout} className="boton-artesanal-cel p-1">Cerrar Sesion</button>
          </Offcanvas.Header>
        }

        {/* si esta registrado el admin entonces muestra  */}
        {user.role === 'user' &&
          <Offcanvas.Header className="d-flex flex-column bienvenido-user">
            <p>Bienvenido Sr/a {user.name}</p>
            <div className="d-flex flex-column m-2 ">
              <NavLink as={NavLink} to="/perfil" onClick={handleClose} >
                <button className="boton-artesanal-cel px-4">Mi Perfil</button>
              </NavLink>
            </div>
            <button onClick={logout} className="boton-artesanal-cel p-2">Cerrar Sesion</button>
          </Offcanvas.Header>
        }

        <Offcanvas.Body >
          <div className="responsive-navbar-links text-center ">
            <li className="p-2 mx-3" >
              <Nav.Link as={NavLink} to="/productos" activeClassName="link-active-cel" onClick={handleClose} >PRODUCTOS</Nav.Link>
            </li>
            <li className="p-2 mx-3">
              <NavLink as={NavLink} to="/contacto" activeClassName="link-active-cel" onClick={handleClose}>CONTACTO</NavLink>
            </li>
            <li className="p-2 mx-3">
              <NavLink as={NavLink} to="/nosotros" activeClassName="link-active-cel" onClick={handleClose}>NOSOTROS</NavLink>
            </li>

            {user.role === 'admin' &&
              <li className="p-2 mx-3">
                <Nav.Link as={NavLink} to="/productList" activeClassName="link-active"><FaWrench className="mb-1 me-2" />ADMIN BOARD</Nav.Link>
              </li>
            }

          </div>
          <div className="navbar-responsive-redes">
            <Offcanvas.Title className="navbar-responsive-subtitle mt-3">Seguinos en nuestras redes</Offcanvas.Title>
            <div className="navbar-responsive-icons-container d-flex justify-content-evenly my-5">
              <li>
                <a href="https://www.facebook.com/CocoMad-Bakery-825265017858105" target="blank" className="face-icon"><BsFacebook /></a>
              </li>
              <li>
                <a  href="https://www.instagram.com/cocomadbakery/" target="blank" className="insta-icon"><GrInstagram /></a>
              </li>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}

