import { StatusBar } from 'expo-status-bar'
import { Provider } from 'jotai'
import { StyleSheet, Text, View } from 'react-native'
import { Component } from './src/Component'
import { Suspense } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PortalProvider } from '@gorhom/portal'

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider>
        <Suspense fallback={null}>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
              <Text>Open up App.js to start working on your app!</Text>
              <Component />
              <StatusBar style="auto" />
            </View>
          </SafeAreaView>
        </Suspense>
      </Provider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
