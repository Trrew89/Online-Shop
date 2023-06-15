import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight -54}}
            >
            <Card style = {{width: 600}} className='p-5'>
                <h2 className='mx-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter your email...'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter your password...'
                    />
                    <Row className='d-flex justify-content-between mt-3'>
                        {isLogin ? 
                            <div>
                                No account? <NavLink to={REGISTRATION_ROUTE}>Sign up!</NavLink>
                            </div>
                            :
                            <div>
                                Already have an account? <NavLink to={LOGIN_ROUTE}>Sign in!</NavLink>
                            </div>   
                        }
                    </Row>
                    <Button 
                            className='align-self-end' 
                            variant={'outline-success'}>
                            {isLogin ? 'Login' : 'Registration'}
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;