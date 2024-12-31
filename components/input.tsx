import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function input({ label, textInputConfig }) {
    const inputstyle = {
        backgroundColor: 'pink',
        padding: 5,
        borderRadius: 10,
        fontSize: 18,
        ...(textInputConfig.multiline && { minHeight: 100 })
    }
    return (
        <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
            <Text style={{ fontSize: 15, color: 'blue', marginBottom: 5 }}>{label}</Text>
            <TextInput style={inputstyle} {...textInputConfig} />
        </View>
    )
}

const styles = StyleSheet.create({})