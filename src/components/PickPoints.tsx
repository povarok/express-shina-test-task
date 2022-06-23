import React from 'react'

import { PickPoint } from 'types/entities'
import PickPointRow from 'components/PickPointRow'
import styles from './PickPoints.module.scss'

type Props = {
  data?: PickPoint[]
  onSelect: (address: string) => void
  selectedAddress?: string | null
}

const PickPoints: React.FC<Props> = (props) => {
  return (
    <ul className={styles.pickPoints}>
      {props.data?.map((pp) => (
        <PickPointRow
          key={pp.address}
          data={pp}
          onClick={() => props.onSelect?.(pp.address)}
          active={props.selectedAddress === pp.address}
        />
      ))}
    </ul>
  )
}

export default PickPoints
