import React from 'react'
import { FaDelicious } from 'react-icons/fa'

export default function Header() {
    const x = 1
  return (
    <header className='header' data-testid='header'>
        <nav>
            <div className='logo'>
                <img src='' />
            </div>
            <div className='settings'>
                <ul>
                    <li>+</li>
                    <li><FaDelicious /></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
