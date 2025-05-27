import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
    const navigate = useNavigate();
    const click = () => {
        navigate('/products');
    }
  return (
    < div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to Products Store</h1>
      <button 
        onClick={click} 
        className='px-6 py-3 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300'
      >
        View Products
      </button>
        
    </div>
  )
}

export default Home