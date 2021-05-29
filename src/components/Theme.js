import React, { useState } from 'react'
import { BsMoon } from 'react-icons/bs'
import { BiSun } from 'react-icons/bi'
const Theme = ({ setDarkMode, darkMode }) => {
  const [state, setState] = useState('')
  const handleClick = () => {
    setDarkMode(!darkMode)
    if (state === '') {
      setState('dark')
    } else {
      setState('')
    }
  }
  return (
    <div>
      <button className='theme' onClick={handleClick}>
        {state ? <BiSun className='icon' /> : <BsMoon className='icon' />}
      </button>
    </div>
  )
}

export default Theme
