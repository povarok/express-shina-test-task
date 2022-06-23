import React from 'react'
import classNames from 'classnames'

import { PickPoint } from 'types/entities'
import styles from './PickPointRow.module.scss'

type Props = {
  data: PickPoint
  active?: boolean
  onClick?: () => void
}

const PickPointRow: React.FC<Props> = ({ data, onClick, active }) => {
  return (
    <li className={classNames(styles.row, { [styles.rowActive]: active })} onClick={onClick}>
      <p className={styles.address}>{data.address}</p>
      <div className={styles.budgetRow}>
        {data.budgets.map((b) => (
          <span key={b} className={styles.budget}>
            {b}
          </span>
        ))}
      </div>
      <span></span>
    </li>
  )
}

export default PickPointRow
