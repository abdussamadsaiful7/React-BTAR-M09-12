import React from 'react';
import Feature from '../Feature/Feature';


const PriceCard = (props) => {
    //console.log(props)
    const { name, image_url, price, features } = props.price;


    return (
        <div className='shadow-lg rounded-lg pb-4 mb-5 flex flex-col relative'>
            <img className='px-auto rounded-lg' src={image_url}/>
            <h4 className='text-xl pt-2'>Package: {name}</h4>
            <p>Price: {price} /month</p>
            <p className='text-xl font-semibold underline'>Features: </p>
            <div className='p-4 mb-4'>
                {
                    features.map((feature, idx) => <Feature feature={feature} key={idx}></Feature>)
                }
                <div className='absolute bottom-0 left-0 right-0'>
                    <button className='w-full bg-green-500 py-2 rounded-md font-bold mt-auto'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;