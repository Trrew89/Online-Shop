import React, { useContext } from 'react';
import { Context } from '../index';
import {Nav, Container, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from "mobx-react-lite"
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate()
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>BuyDevice</NavLink>
                    {user.isAuth ? 
                        <Nav className="ms-auto" style={{color: 'white'}}>
                            <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>Admin panel</Button>                        
                            <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)} className='ms-3'>Log out</Button>
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