import { Component } from '../Component'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function Page() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Open up App.js to start working on your app!</Text>
      <Component />
      <StatusBar style="auto" />
    </View>
  )
}
