import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native';

export default function loading() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

const styles = StyleSheet.create({})