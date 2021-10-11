import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

export const Profile = () => {
    return (
        <View style={styles.view} >
            <Text>Helo there!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})