import { PortalProvider } from '@gorhom/portal'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stacks } from './Stacks'

export const Root = () => {
  return (
    <PortalProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stacks />
      </SafeAreaView>
    </PortalProvider>
  )
}
