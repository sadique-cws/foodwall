import React from 'react'
import { NavLink } from 'react-router'

const Header = (props) => {
  return (
    <div className='bg-zinc-800 text-white px-10 py-2 flex-1 flex justify-between'>
        <h2 className='font-semibold text-xl'>{props.title}</h2>

        <div className="flex gap-5">
            <NavLink className="" to="/">Home</NavLink>
            <NavLink className="" to="/login">Login</NavLink>
        </div>
    </div>
  )
}

export default Header