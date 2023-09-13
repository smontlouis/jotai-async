import AsyncStorage from '@react-native-async-storage/async-storage'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

const atomWithAsyncStorage = (key, initialValue) => {
  const defaultStorage = createJSONStorage(() => AsyncStorage)
  return atomWithStorage(key, initialValue, defaultStorage)
}
export default atomWithAsyncStorage
