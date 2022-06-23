import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { getAddresses } from 'api'
import 'styles/index.global.scss'
import Spin from 'components/Spin'
import PickPoints from 'components/PickPoints'
import Map from 'components/Map'
import styles from './styles/App.module.scss'

const App = () => {
  const pickPoints = useQuery('pickPoints', () => getAddresses().then((r) => r.data.pickPoints))
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null)

  useEffect(() => {
    if (pickPoints.data && pickPoints.data.length) {
      setSelectedAddress(pickPoints.data[0].address)
    }
  }, [pickPoints.data])

  const getCurrentLatLng = () => {
    const pp = pickPoints.data?.find((pp) => pp.address === selectedAddress)!
    return { lat: pp.latitude, lng: pp.longitude }
  }

  return (
    <div className={styles.main}>
      {pickPoints.isLoading ? (
        <Spin />
      ) : (
        <PickPoints
          data={pickPoints.data}
          onSelect={(address) => setSelectedAddress(address)}
          selectedAddress={selectedAddress}
        />
      )}
      {selectedAddress ? <Map {...getCurrentLatLng()} /> : <Spin />}
    </div>
  )
}

export default App
