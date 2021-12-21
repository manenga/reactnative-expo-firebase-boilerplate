import React, { useEffect, useState } from 'react'
import {
  Text, View, ScrollView, StatusBar, useColorScheme,
} from 'react-native'
import styles from './styles'
import { firebase } from '../../firebase/config'

export default function Wallet(props) {
  const userData = props.extraData
  const [token, setToken] = useState('')
  const scheme = useColorScheme()

  useEffect(() => {
    firebase.firestore()
      .collection('tokens')
      .doc(userData.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log('Document data:', doc.data())
          const data = doc.data()
          setToken(data)
        } else {
          console.log('No such document!')
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error)
      })
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, width: '100%' }}>
        <ScrollView style={styles.main}>
          <Text style={scheme === 'dark' ? styles.darkfield : styles.field}>Balance:</Text>
          <Text style={scheme === 'dark' ? styles.darktitle : styles.title}>{'20,000 ZMW'}</Text>
          <View style={{ marginVertical: 10 }}/>
          <Text style={scheme === 'dark' ? styles.darkfield : styles.field}>Pending transactions:</Text>
          <Text style={scheme === 'dark' ? styles.darktitle2 : styles.title2}>{'350 ZMW'}</Text>
        </ScrollView>
      </View>
    </View>
  )
}
