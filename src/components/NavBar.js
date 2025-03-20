import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCompass } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  return (
    <header>
        <nav>
            <img src={require('../img/logo.png')} alt="logo" />
            <div className='nav-right-el'>
                <ul>
                    <li>LOGIN</li>
                    <li>SIGNUP</li>
                </ul>
                <div><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
                <div><FontAwesomeIcon icon={faCompass} /></div>
            </div>
        </nav>
    </header>
  )
}

export default NavBar