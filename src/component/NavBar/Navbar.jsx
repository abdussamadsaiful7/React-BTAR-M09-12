import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "About",
            path: "/about"
        },
        {
            id: 3,
            name: "Contact",
            path: "/contact"
        },
        {
            id: 4,
            name: "Products",
            path: "/products"
        },
        {
            id: 5,
            name: "Login",
            path: "/login"
        }
    ];

    return (
        <nav className='bg-purple-400 pb-2 pt-2 mt-2 mb-20' >
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>{open === true ? <XMarkIcon className="h-6 w-6 text-blue-500" /> : <Bars3Icon className="h-6 w-6 text-blue-500" />}</span>
            </div>

            <ul className={`md:flex justify-around absolute md:static duration-300 bg-purple-400 mt-6 ml-6 ${open ? 'top-6' : '-top-96'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;