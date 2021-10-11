import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeTokenInfo = async (tokenInfo) => {
  try {
    const jsonValue = JSON.stringify(tokenInfo);
    await AsyncStorage.setItem('tokenInfo', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getTokenInfo = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('tokenInfo');  
    return jsonValue != null ? JSON.parse(jsonValue) : null
  
  } catch(e) {
    console.log(e)
    return false;
  }
 
}

export const removeTokenInfo = async () => {
  try {
    await AsyncStorage.removeItem('tokenInfo');
  } catch(e) {
    console.log(e);
  } 
};