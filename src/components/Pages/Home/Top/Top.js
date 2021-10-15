import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Top.css'

const Top = () => {
    return (
        <div className='top container-fluid row g-0'>
            <div className="m-auto">
                <h2 className='my-4 fw-bold'>Best Food Waiting For Your Belly</h2>
                <div className="col-md-5 col-10 mx-auto">
                    <InputGroup>
                        <FormControl className='rounded-pill input' id="inlineFormInputGroupUsername" placeholder="Search....." />
                        <Button className='px-4 button border-0 rounded-pill'>Search</Button>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default Top;