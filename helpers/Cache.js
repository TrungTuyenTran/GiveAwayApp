import AsyncStorage from '@react-native-community/async-storage'

export default class Cache {
    // Save Cache
    static async storeCacheData(key, value) {
        try {
            await AsyncStorage.setItem(key, value)
          } catch (e) {
            console.log(e)
          }
    }

    // Get Cache
    static async getCacheData(key) {
        try {
            const value = await AsyncStorage.getItem(key)
            return value
          } catch (e) {
            return null
          }
    }

    // Remove Item 
    static async removeCacheItem(key) {
      try {
          await AsyncStorage.removeItem(key)
        } catch(e) {
          console.log(e)
        }
    }
}