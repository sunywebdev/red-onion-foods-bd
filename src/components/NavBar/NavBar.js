import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo2.png'
const NavBar = () => {
    return (
        <Container>
            <Navbar>
                <Container>
                    <Navbar.Brand><NavLink to='/Home'><Image className='w-100' src={logo} alt=''></Image></NavLink></Navbar.Brand>
                </Container>
                <Link className='px-3 fw-bold text-danger text-decoration-none' to='/cart'><i className="fas fa-shopping-cart"></i></Link>
                <NavLink className='px-3 fw-bold text-danger text-decoration-none' to='/Login'>Login</NavLink>
                <NavLink className='px-3 fw-bold text-danger text-decoration-none' to='/SignUp'>SignUp</NavLink>
            </Navbar>
        </Container>
    );
};

export default NavBar;