import { atom, useAtom } from 'jotai'
import { Text } from 'react-native'
import atomWithAsyncStorage from '../atomWithAsyncStorage'

const countAtom = atomWithAsyncStorage('countAtom', 0)
const count2Atom = atom(async (get) => (await get(countAtom)) * 2)

const promise = new Promise((r) => setTimeout(r, 3000))
let resolved = false
promise.then(() => {
  console.log('RESOLVED')
  resolved = true
})

const usePromise = () => {
  if (!resolved) {
    throw promise
  }
}

// count2Atom and usePromise will display a blank screen
export const Component = () => {
  const [count] = useAtom(countAtom)
  usePromise()
  return <Text>Component {count}</Text>
}
