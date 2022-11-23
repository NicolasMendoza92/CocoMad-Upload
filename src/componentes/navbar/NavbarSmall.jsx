import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { BsCartDash, BsCartFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavbarMobile } from './NavbarMobile';
import './navbar.css';
import { NavbarAdmin } from './NavbarAdmin';




export const NavbarSmall = ({ user, cart }) => {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);


    return (
        <>
            {splitLocation[1] !== "productList"
                && splitLocation[1] !== "messageList"
                && splitLocation[1] !== "userList"
                && splitLocation[1] !== "adminBoard"
                && splitLocation[1] !== "login"
                &&
                <>
                    <nav>
                        <Container bg="none" className="py-2">
                            <div className="d-flex align-items-center justify-content-between contenedor-small " >
                                <div className="d-block d-md-none ">
                                    <button
                                        className="navbar-button-small"
                                        onClick={handleShow}>
                                        <GiHamburgerMenu />
                                    </button>
                                </div>
                                <div className="logo-container-small" >
                                    <Link as={NavLink} to="/"  >
                                        <img id="main-img-small" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1647437646/cocoMAD/LOGO_CON_CIRCULO-02_1_ya2rd3.png" alt="img logo" className="nav-logo-desktop" />
                                    </Link>
                                </div>
                                <div className="d-flex align-items-center login-register  ">
                                    <div className="d-flex align-items-center">
                                        <Nav.Link className="link-nav-small" as={NavLink} to="/carrito" exact>
                                            {splitLocation[1] === "carrito" ? <BsCartFill /> : <BsCartDash />} </Nav.Link>
                                            {cart.length > 0 &&
                                                <span className="swym-header--count-small">{cart.length}</span>
                                            }
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </nav>
                    <nav>
                        <Container bg="none" className="pb-2 d-none d-md-block border-0 ">
                            <div className="d-flex align-items-center justify-content-center w-100 navbar-links-small">
                                <li className="p-2 mx-3">
                                    <Nav.Link className="link-nav-small" activeClassName="link-active-small" as={NavLink} to="/productos" exact>PRODUCTOS</Nav.Link>
                                </li>
                                <li className="p-2 mx-3">
                                    <Nav.Link className="link-nav-small" activeClassName="link-active-small" as={NavLink} to="/nosotros" exact>NOSOTROS</Nav.Link>
                                </li>
                                <li className="p-2 mx-3">
                                    <Nav.Link className="link-nav-small" activeClassName="link-active-small" as={NavLink} to="/contacto" exact>CONTACTO</Nav.Link>
                                </li>
                            </div>
                        </Container>
                    </nav>
                </>
            }
            {splitLocation[1] !== "productList"
                && splitLocation[1] !== "messageList"
                && splitLocation[1] !== "userList"
                && splitLocation[1] !== "adminBoard"
                && splitLocation[1] !== "login"
                &&
                <NavbarMobile setShow={setShow} show={show} user={user} />
            }
            {splitLocation[1] === "productList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "messageList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "userList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "adminBoard" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "login" && <NavbarAdmin user={user} />}
        </>
    );
}
