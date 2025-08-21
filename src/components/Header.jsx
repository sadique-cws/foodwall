import React from 'react'

const Header = (props) => {
  return (
    <div className='bg-zinc-800 text-white px-10 py-2 flex-1 flex'>
        <h2 className='font-semibold text-xl'>{props.title}</h2>
    </div>
  )
}

export default Header