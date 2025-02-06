import React from 'react'

const Navbar = () => {
    return (
        <div className=' flex bg-[#2d1647] text-white h-16 items-center justify-between p-4'>
            <span className='font-bold text-2xl '>Manage Tasks</span>

            <ul className=' flex gap-3'>
                <li className='font-bold'>Home</li>
                <li className='font-bold'>Your Tasks</li>
            </ul>
        </div>
    )
}

export default Navbar
