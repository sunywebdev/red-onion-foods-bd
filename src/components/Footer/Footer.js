import React from 'react';
import { Image } from 'react-bootstrap';
import logo from './logo.png'

const Footer = () => {
    return (
        <div className='row g-4 bg-dark mt-5 pt-2 '>
            <div className="col-md-6 m-auto">
                <Image src={logo} alt=''></Image>
            </div>
            <div className="col-md-3">
                <div className="list-group text-center text-md-start ">
                    <a href="/" className="list-group-item  bg-dark text-light  border-0">About Online Food</a>
                    <a href="/" className="list-group-item  bg-dark text-light  border-0">Read Our Blog</a>
                    <a href="/" className="list-group-item  bg-dark text-light  border-0">Sign Up To Deliver</a>
                    <a href="/" className="list-group-item  bg-dark text-light  border-0">Add Your Resturant</a>
                </div>
            </div>
            <div className="col-md-3">
                <div className="list-group text-center text-md-start">
                    <a href="/" className="list-group-item  bg-dark text-light  border-0">Get Help</a>
                    <a href="/" className="list-group-item  bg-dark text-light  border-0">Read FAQs</a>
                    <a href="/" className="list-group-item  bg-dark text-light  border-0">View All Cities</a>
                    <a href="/" className="list-group-item  bg-dark text-light  border-0">Resturants Near Me</a>
                </div>
            </div>
            <hr className="border border-1 border-light" />
            <p className="mt-0 text-light">Copyright &copy; 2021 All Rights Reserved by <strong>SUNY</strong> </p>
        </div>
    );
};

export default Footer;