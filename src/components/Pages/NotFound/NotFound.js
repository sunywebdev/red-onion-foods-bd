import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2 className="pt-5 fw-bold">404 NOT FOUND</h2>
            <Button className='bg-danger border-0 my-3'><Link className=' text-light text-decoration-none' to='/'>Back To Home</Link></Button>
        </div>
    );
};

export default NotFound;