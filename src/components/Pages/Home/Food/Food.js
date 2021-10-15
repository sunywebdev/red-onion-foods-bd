import React from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import LoadFoods from '../../../LoadFoods/LoadFoods';

const Food = () => {
    const { foodId } = useParams()
    const [foods] = LoadFoods()
    return (
        <div className='container mx-auto'>
            {foods?.map(food => food?.id === foodId &&
                <div key={food?.id} className='row'>
                    <div className="col-md-6 m-auto text-start">
                        <h2>{food?.name}</h2>
                        <p>{food?.details}</p>
                        <h3>$ {food?.price}</h3>
                        <div className="btn btn-danger rounded-pill px-3"><i className="fas fa-shopping-cart me-2"></i> Add</div>
                    </div><div className="col-md-6">
                        <Image className=" my-2 mx-auto w-100" style={{ maxWidth: "400px" }} src={food?.image} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Food;