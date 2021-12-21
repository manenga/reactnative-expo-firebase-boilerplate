import React, { useEffect, useState } from 'react'
import {
  Text, View, ScrollView, StatusBar, useColorScheme,
} from 'react-native'
import {
  Button,
  ButtonGroup,
  Input,
} from 'react-native-elements'
import styles from './styles'
import { firebase } from '../../firebase/config'

export default function Amount(props) {
  const userData = props.extraData
  const [token, setToken] = useState('')
  const scheme = useColorScheme()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const amounts = ['K50', 'K100', 'K250', 'K500', 'K1000']
  const [depositAmount, setDepositAmount] = useState(0)

  const goToAddFunds = () => {
    props.navigation.navigate('AddFunds', { userData })
  }

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
        <View style={styles.main}>
          <Input
            placeholder="Deposit Amount"
            labelProps={{ color: 'white' }}
            onChangeText={(value) => setDepositAmount(value)}
          />
          <ButtonGroup
            buttons={amounts}
            selectedIndex={selectedIndex}
            onPress={(value) => {
              setSelectedIndex(value)
              setDepositAmount(amounts[value])
            }}
            containerStyle={{ marginBottom: 20 }}
          />
          <Button
            title="Next"
            containerStyle={{
              marginHorizontal: 10,
              marginVertical: 10,
            }}
          />
        </View>
      </View>
    </View>
  )
}
