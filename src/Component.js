import { atom, useAtom } from 'jotai'
import { Text } from 'react-native'
import atomWithAsyncStorage from '../atomWithAsyncStorage'

const countAtom = atomWithAsyncStorage('countAtom', 0)
const count2Atom = atom(async (get) => (await get(countAtom)) * 2)

export const Component = () => {
  const [count] = useAtom(count2Atom)
  console.log(count)
  return <Text>Component {count}</Text>
}
