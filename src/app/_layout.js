import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Provider } from 'jotai'
import { Suspense } from 'react'
import { Root } from '../Root'

// import AsyncStorage from '@react-native-async-storage/async-storage'
// AsyncStorage.clear()

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Provider>
        <Suspense fallback={null}>
          <Root />
        </Suspense>
      </Provider>
    </SafeAreaProvider>
  )
}
