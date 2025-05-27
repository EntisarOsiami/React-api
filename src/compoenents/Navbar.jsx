import React from 'react';
import { Link } from 'react-router';
import { CiMenuBurger } from 'react-icons/ci';

function Navbar() {
  return (
    <div>
      <nav className='navbar hidden md:block text-white  bg-indigo-900 shadow'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <Link to='/' className='text-2xl text-white font-bold'>
            Products Store
          </Link>
          <ul className='flex space-x-4'>
            <li>
              <Link to='/' className='hover:text-indigo-500'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/products' className='hover:text-indigo-500'>
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav className='md:hidden bg-indigo-900 shadow'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <Link to='/' className='text-2xl text-white font-bold'>
            Products Store
          </Link>
          <button className='text-white hover:text-blue-500 focus:outline-none'>
            <CiMenuBurger />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
