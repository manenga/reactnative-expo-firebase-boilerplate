import React, { useEffect, useState } from 'react'
import {
  Text, View, ScrollView, StatusBar, useColorScheme,
} from 'react-native'
import {
  ListItem,
  Icon,
  Button,
} from 'react-native-elements'
import styles from './styles'
import { firebase } from '../../firebase/config'

export default function Fund(props) {
  const userData = props.extraData
  const [token, setToken] = useState('')
  const scheme = useColorScheme()

  const goToAddFunds = () => {
    props.navigation.navigate('AddFunds', { userData: userData })
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
        <ScrollView style={styles.main}>
          <Text style={scheme === 'dark' ? styles.darkfield : styles.field}>Balance:</Text>
          <Text style={scheme === 'dark' ? styles.darktitle : styles.title}>20,000 ZMW</Text>
          <View style={{ marginVertical: 10 }} />
          <Text style={scheme === 'dark' ? styles.darkfield : styles.field}>Pending transactions:</Text>
          <Text style={scheme === 'dark' ? styles.darktitle2 : styles.title2}>350 ZMW</Text>
          <ScrollView horizontal={true} style={{ marginVertical: 15 }}>
            <Button
              title="Add funds"
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                marginHorizontal: 10,
                marginVertical: 10,
              }}
              onPress={goToAddFunds}
            />
            <Button
              title="Request"
              buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
              containerStyle={{
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            />
            <Button
              title="Send"
              containerStyle={{
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            />
            <Button
              title="Withdraw"
              buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
              containerStyle={{
                marginingHorizontal: 10,
                marginVertical: 10,
              }}
            />
          </ScrollView>
          <Text style={scheme === 'dark' ? styles.darktext : styles.text}>Transactions</Text>
          {list2.map((item: Partial<List2Data>, i: React.Key) => (
            <ListItem key={i} bottomDivider>
              <Icon name="money" type="font-awesome" color="red" />
              <ListItem.Content>
                <ListItem.Title style={{ color: 'red' }}>
                  {item.amount}
                </ListItem.Title>
                <ListItem.Subtitle>{item.merchent}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Content right>
                <ListItem.Title right style={{ color: 'green' }}>{item.action}</ListItem.Title>
                <ListItem.Subtitle right>{item.dateTime}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const list2: Partial<List2Data>[] = [
  {
    amount: '500 ZMW',
    avatar_url: 'https://uifaces.co/our-content/donated/XdLjsJX_.jpg',
    merchent: 'Mobile Money (Airtel)',
    action: 'Deposit',
    dateTime: '11:00am',
    linearGradientColors: ['#FF9800', '#F44336'],
  },
  {
    amount: '2500 ZMW',
    avatar_url: 'https://uifaces.co/our-content/donated/KtCFjlD4.jpg',
    merchent: 'Mobile Money (Airtel)',
    action: 'Deposit',
    dateTime: '2 days ago',
    linearGradientColors: ['#3F51B5', '#2196F3'],
  },
  {
    amount: '15000 ZMW',
    avatar_url:
      'https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=047fade70e80ebb22ac8f09c04872c40',
    merchent: 'Bank Card',
    action: 'Deposit',
    dateTime: '10 days ago',
    linearGradientColors: ['#FFD600', '#FF9800'],
  },
  {
    amount: '1000 ZMW',
    avatar_url: 'https://randomuser.me/api/portraits/women/48.jpg',
    merchent: 'Mobile Money (MTN)',
    action: 'Deposit',
    dateTime: '22 days ago',
    linearGradientColors: ['#4CAF50', '#8BC34A'],
  },
  {
    amount: '1000 ZMW',
    avatar_url:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg',
    merchent: 'Bank Transfer',
    action: 'Deposit',
    dateTime: '1 month ago',
    linearGradientColors: ['#F44336', '#E91E63'],
  },
];