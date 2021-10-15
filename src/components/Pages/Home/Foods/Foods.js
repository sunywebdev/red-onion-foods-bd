import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import { Card, Col, Placeholder, Row } from 'react-bootstrap';
import './Foods.css'
import LoadFoods from '../../../LoadFoods/LoadFoods';

const Foods = () => {
    const [foods] = LoadFoods()
    return (
        <div className='container mt-5'>
            {
                foods
                    ?
                    <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                        <Tab className='border-0' label="Breakfast">
                            <Row xs={1} md={3} className="g-2 g-md-5">
                                {foods?.map(food => food?.section === 'breakfast' &&
                                    <Col id='breakfast' key={food?.id} >
                                        <Link to={`/foods/${food?.id}`} className='text-decoration-none text-dark'>
                                            <Card className='h-100 cards text-align-center border-0 rounded-3'>
                                                <Card.Img className=" my-2 mx-auto img" src={food?.image} style={{ maxWidth: "50%" }} />
                                                <Card.Body className='d-flex flex-column justify-content-center px-1 px-md-2'>
                                                    <Card.Title className='fw-bold'>{food?.name}</Card.Title>
                                                    <p>{food?.shortDetails}</p>
                                                    <h3 className='fw-bold'>
                                                        $ {food?.price}
                                                    </h3>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                )}
                            </Row>
                        </Tab>
                        <Tab className='border-0' label="Lunch">
                            <Row xs={1} md={3} className="g-2 g-md-5">
                                {foods?.map(food => food?.section === 'lunch' &&
                                    <Col id='lunch' key={food?.id} >
                                        <Link to={`/foods/${food?.id}`} className='text-decoration-none text-dark'>
                                            <Card className='h-100 cards text-align-center border-0 rounded-3'>
                                                <Card.Img className=" my-2 mx-auto img" src={food?.image} style={{ maxWidth: "50%" }} />
                                                <Card.Body className='d-flex flex-column justify-content-center px-1 px-md-2'>
                                                    <Card.Title className='fw-bold'>{food?.name}</Card.Title>
                                                    <p>{food?.shortDetails}</p>
                                                    <h3 className='fw-bold'>
                                                        $ {food?.price}
                                                    </h3>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                )}
                            </Row>
                        </Tab>
                        <Tab className='border-0' label="Dinner">
                            <Row xs={1} md={3} className="g-2 g-md-5">
                                {foods?.map(food => food?.section === 'dinner' &&
                                    <Col id='dinner' key={food?.id} >
                                        <Link to={`/foods/${food?.id}`} className='text-decoration-none text-dark'>
                                            <Card className='h-100 cards text-align-center border-0 rounded-3'>
                                                <Card.Img className=" my-2 mx-auto img" src={food?.image} style={{ maxWidth: "50%" }} />
                                                <Card.Body className='d-flex flex-column justify-content-center px-1 px-md-2'>
                                                    <Card.Title className='fw-bold'>{food?.name}</Card.Title>
                                                    <p>{food?.shortDetails}</p>
                                                    <h3 className='fw-bold'>
                                                        $ {food?.price}
                                                    </h3>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                )}
                            </Row>
                        </Tab>
                    </Tabs>
                    :
                    <Card style={{ width: '18rem' }} className='mx-auto'>
                        <Placeholder variant="top" src="" style={{ Width: '100px', height: '180px' }} />
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                        </Card.Body>
                    </Card>
            }
        </div>
    );
};

export default Foods;