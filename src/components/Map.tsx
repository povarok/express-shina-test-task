import React from 'react'
import styles from './Map.module.scss'

type Props = { lat: number; lng: number }

const Map: React.FC<Props> = ({ lat, lng }) => {
  return (
    <iframe
      title={'Точка выдачи на карте'}
      width="600"
      height="800"
      className={styles.map}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
    />
  )
}

export default Map
