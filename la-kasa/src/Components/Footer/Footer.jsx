import React from 'react'
import styles from '../Footer/footer.module.css'
import Logo from '../../Components/Footer/Footer'

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