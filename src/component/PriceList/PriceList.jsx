import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(()=>{
        fetch('price.json')
        .then(res =>res.json())
        .then(data=>setPrices(data))
    },[])
    return (
        <div>
            <p className='text-3xl text-center bg-purple-200 font-bold p-4' > Awesome Affordable Prices </p>
            <div className='grid grid-cols-3 gap-5 text-center mx-10 mt-4'>
                {
                    prices.map(price =><PriceCard key={price.id} price={price} ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;