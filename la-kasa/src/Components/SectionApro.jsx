import React from 'react'
import Kalen from '../Assets/kalen.png'
import Styles from '../Styles/apropos.module.css'

function SectionApro() {
  return (
    <div className="Photo">
      <img className={Styles.img} src={Kalen} alt="" />
    </div>
  )
}

export default SectionApro