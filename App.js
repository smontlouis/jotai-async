import { PortalProvider } from '@gorhom/portal'
import { Provider } from 'jotai'
import { Suspense } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Page from './src/app'

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider>
        <Suspense fallback={null}>
          <PortalProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <Page />
            </SafeAreaView>
          </PortalProvider>
        </Suspense>
      </Provider>
    </SafeAreaProvider>
  )
}
