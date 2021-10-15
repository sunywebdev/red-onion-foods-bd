import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <h2 className="fw-bold text-danger">LogIn</h2>
            <form className='col-md-7 mx-auto'>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <Button className='w-100 bg-danger border-0'>LogIn</Button>
                <p className='p-0 m-0'>------------ Or -------------</p>
                <Button className='w-100 bg-danger border-0'>LogIn With Google</Button>
                <p className='p-0 m-0'>------------ Or -------------</p>
                <Button className='w-100 bg-danger border-0 text-light'><Link className='text-decoration-none text-light' to='/SignUp'>Create New Account</Link></Button>
            </form>
        </div>
    );
};

export default Login;