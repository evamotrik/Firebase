import { Alert } from 'react-native';
import { storeTokenInfo } from './asyncStorage.service';

const URL = 'http://192.168.1.132:3000';

export async function registration(data) {
    try {
        const res = await fetch(`${URL}/auth/registration`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.status === 200) {
            return true
        } 
        else if(res.status === 401){
            Alert.alert('Error', 'User with this email already exist');
            return false;
        }
        else {
            Alert.alert('Error', 'Something went wrong... Server is not answering!!!');
            return false;
        }
    } catch (e) {
        Alert.alert(e.message)
    }
}

export async function logIn(data) {
    try {
        const res = await fetch(`${URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.status == 200) {
            const json = await res.json();
            storeTokenInfo({
                accessToken: json.token,
            });
            return json;
        }
        else if(res.status === 401){
            Alert.alert('Error', 'User with this email not found');
            return false;
        }
        else if(res.status === 402){
            Alert.alert('Error', 'Incorrect password');
            return false;
        }
        else {
            Alert.alert('Error', 'Something went wrong... Server is not answering!!!');
            return false;
        }
    } catch (e) {
        Alert.alert(e.message)
    }
}






