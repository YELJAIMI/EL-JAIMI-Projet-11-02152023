import React from 'react'
import Background from '../Assets/Background.png'
import styles from '../Styles/sectionban.module.css'

function Section() {
  return (
    <div className={styles.sectionban}>
      <div className="section">
        <div className="centrage">
          <div className="contentImage">
            <img className={styles.img} src={Background} alt="" />
          </div>
          <div className={styles.titre}>
            <h1>Chez vous,partout et ailleurs</h1>
          </div>
        </div>
      </div>
    </div>
  )
}   

export default Section