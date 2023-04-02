import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    //console.log(props)
    //console.log(props)
    //const {feature} = props.feature;
    return (
        <div className='text-left flex items-center pb-2'>
             <CheckCircleIcon className="h-6 w-6 text-blue-500" />
           <span className='pl-2'> {feature}</span>
        </div>
    );
};

export default Feature;