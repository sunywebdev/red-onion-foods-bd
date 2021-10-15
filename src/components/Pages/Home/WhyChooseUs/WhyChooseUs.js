import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import wcs1 from './wcs1.png'
import wcs2 from './wcs2.png'
import wcs3 from './wcs3.png'

const WhyChooseUs = () => {
    return (
        <Container className="text-start mt-5 ">
            <h2 className="py-3 fw-bold">Why Choose Us</h2>
            <p className="py-2 col-md-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure assumenda sit ullam voluptatum? Veniam, et.</p>

            <Row xs={1} md={3} className="g-2 g-md-3">
                <Col>
                    <Card className='h-100 text-align-center border-0'>
                        <img className=" my-2 mx-auto img  w-100" src={wcs1} alt='' />
                        <Card.Body className='d-flex flex-column justify-content-center px-1 px-md-2'>

                            <div className="row g-5">
                                <div className="col-2">

                                    <i className="fas fa-bus fa-2x bg-danger p-2 text-light"></i>
                                </div>
                                <div className="col-10">
                                    <Card.Title className='fw-bold'> Fast Delevery</Card.Title>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo qui fuga error reiciendis quod dignissimos corporis veritatis hic voluptatum totam.</p>
                                    <p className="fw-bold text-danger">See More <i className="fas fa-arrow-circle-right"></i> </p>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100 text-align-center border-0'>
                        <img className=" my-2 mx-auto img  w-100" src={wcs2} alt='' />
                        <Card.Body className='d-flex flex-column justify-content-center px-1 px-md-2'>

                            <div className="row g-5">
                                <div className="col-2">

                                    <i className="fas fa-bell fa-2x bg-danger p-2 text-light"></i>
                                </div>
                                <div className="col-10">
                                    <Card.Title className='fw-bold'> Fast Delevery</Card.Title>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo qui fuga error reiciendis quod dignissimos corporis veritatis hic voluptatum totam.</p>
                                    <p className="fw-bold text-danger">See More <i className="fas fa-arrow-circle-right"></i> </p>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100 text-align-center border-0'>
                        <img className=" my-2 mx-auto img  w-100" src={wcs3} alt='' />
                        <Card.Body className='d-flex flex-column justify-content-center px-1 px-md-2'>

                            <div className="row g-5">
                                <div className="col-2">

                                    <i className="fas fa-truck fa-2x bg-danger p-2 text-light"></i>
                                </div>
                                <div className="col-10">
                                    <Card.Title className='fw-bold'> Fast Delevery</Card.Title>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo qui fuga error reiciendis quod dignissimos corporis veritatis hic voluptatum totam.</p>
                                    <p className="fw-bold text-danger"> See More <i className="fas fa-arrow-circle-right"></i></p>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default WhyChooseUs;