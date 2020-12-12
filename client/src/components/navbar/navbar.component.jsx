import React, { useState } from 'react';
import Container from '../container/container.component';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-2.png'
import NavbarToggle from './navbar.toggle';
import './navbar.css'
import NavbarList from './navbar.list';

const NavBar = () => {
    // implement toggle state
    const [active, setActive] = useState(false);
    //toggle Controller
    const menuState = () => {
        setActive(!active);
    };

    return (
        <Container>
            <nav className='navbar'>
                {/* Left Side */}
                <div className='flex justify-between w-full md:w-32 items-center'>
                    <Link to='/' className='logo w-16 animate'>
                        <img src={logo} alt="Main Logo"/>
                    </Link>
                    <NavbarToggle active={ active } menuState={ menuState }/>
                </div>

                {/* Right Side */}
                <div className={`${active ? 'flex' : 'hidden'} md:flex `}>
                    <NavbarList />
                </div>
            </nav>
        </Container>
    );
};



export default NavBar;
