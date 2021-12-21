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
          <Text style={scheme === 'dark' ? styles.darktext : styles.text}>Funding methods</Text>
          {providers.map((item: Partial<List2Data>, i: React.Key) => (
            <View style={{ marginVertical: 4 }}>
              <ListItem key={i} bottomDivider>
                <Icon name="money" type="font-awesome" color="red" />
                <ListItem.Content>
                  <ListItem.Title style={{ color: 'red' }}>
                    {item.merchent}
                  </ListItem.Title>
                  <ListItem.Subtitle>{item.limits}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right>
                  <ListItem.Subtitle right>fee: {item.fee}</ListItem.Subtitle>
                  <ListItem.Subtitle right style={{ color: 'green' }}>~{item.speed}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const providers: Partial<List2Data>[] = [
  {
    limits: '50 ZMW - 1000 ZMW',
    avatar_url: 'https://uifaces.co/our-content/donated/XdLjsJX_.jpg',
    merchent: 'Mobile Money (Airtel)',
    fee: '3%',
    speed: '1 hour',
    linearGradientColors: ['#FF9800', '#F44336'],
  },
  {
    limits: '25 ZMW - 10000 ZMW',
    avatar_url: 'https://randomuser.me/api/portraits/women/48.jpg',
    merchent: 'Mobile Money (MTN)',
    fee: '3%',
    speed: '1 hour',
    linearGradientColors: ['#4CAF50', '#8BC34A'],
  },
  {
    limits: '25 ZMW - 10000 ZMW',
    avatar_url:
      'https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=047fade70e80ebb22ac8f09c04872c40',
    merchent: 'Bank Card',
    fee: '3%',
    speed: '3 hours',
    linearGradientColors: ['#FFD600', '#FF9800'],
  },
  {
    limits: '25 ZMW - 10000 ZMW',
    avatar_url:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg',
    merchent: 'Bank Transfer',
    fee: '3%',
    speed: '2 days',
    linearGradientColors: ['#F44336', '#E91E63'],
  },
]