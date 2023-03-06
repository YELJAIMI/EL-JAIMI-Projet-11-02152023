import React from 'react'
import Logo from '../Assets/Logo.png';
import styles from '../Styles/header.module.css'
import { NavLink } from 'react-router-dom'

function header() {
  return (
    <header>
    <nav>
        <h1>
            <img src={Logo} alt="logo Kasa" />
        </h1>
        <ul>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
                <li>Accueil</li>
            </NavLink>

            <NavLink
                to="/Apropos"
                className={({ isActive }) => (isActive ? styles.active : "")}
            >
                <li>A Propos</li>
            </NavLink>
        </ul>
    </nav>
</header>
  )
}

export default header