import React from 'react'
import styles from './footer.module.css'
import Logo from '../../Assets/kasaFooter.png'

function Footer() {
  return (
    <footer> 
    <div className={styles.footer}>
      <img className="logoKasa" src={Logo} alt="logo" />
      <p className="copyright">© 2023 Kasa. All rights reserved</p>
    </div>
    </footer>
  )
}

export default Footer