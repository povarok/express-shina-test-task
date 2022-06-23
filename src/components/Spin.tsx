import React from 'react'
import styles from './Spin.module.scss'

const Spin: React.FC = () => {
  return (
    <div className={styles.spinBox}>
      <div className={styles.spin}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default Spin
