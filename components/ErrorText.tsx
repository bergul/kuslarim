import { View, Text } from 'react-native'
import React from 'react'

export default function ErrorText({ message }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>HATA</Text>
            <Text style={{ fontSize: 18, color: 'red' }}>{message}</Text>
        </View>
    )
}