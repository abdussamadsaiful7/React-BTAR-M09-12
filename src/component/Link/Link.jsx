import React from 'react';


const Link = (props) => {
    const {name, path} =props.route;
    return (
        <div>
           
            <li className=' hover:bg-neutral-200 mr-10 '> 
                <a href={path}>{name}</a>
            </li>
        </div>
    );
};

export default Link;