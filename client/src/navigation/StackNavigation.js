import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Registration } from '../screens/Registration.js';
import { Login } from '../screens/Login.js';
import { LoginWithPhone } from '../screens/LoginWithPhone.js';
import { Profile } from '../screens/Profile.js';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "white",
                    },
                    headerTintColor: "black",
                    headerBackTitle: "Back",
                }}>
                <Stack.Screen name="Registration" component={Registration} initialParams={{ isRegistered: false }} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="LoginWithPhone" component={LoginWithPhone} />
                <Stack.Screen name="Profile" component={Profile}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


