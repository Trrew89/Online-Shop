import React, { useContext } from 'react';
import { Context } from '../index';
import {Nav, Container, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from "mobx-react-lite"

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>BuyDevice</NavLink>
                    {user.isAuth ? 
                        <Nav className="ms-auto" style={{color: 'white'}}>
                            <Button variant={'outline-light'}>Admin panel</Button>                        
                            <Button variant={'outline-light'} className='ms-3'>Login</Button>
                        </Nav>
                        :
                        <Nav className="ms-auto" style={{color: 'white'}}>
                            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Registration</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </div>
    );
});

export default NavBar;