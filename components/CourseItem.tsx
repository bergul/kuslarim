import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'


export default function CourseItem({ amount, date, description, id }) {
    const navigation = useNavigation()
    const coursePress = () => {
        navigation.navigate('ManageCourse', { courseId: id })
    }
    return (

        <Pressable onPress={coursePress}>
            <View style={{ padding: 5, margin: 5, backgroundColor: 'pink', borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5, borderBottomWidth: 1, borderBottomColor: 'black', paddingBottom: 1 }}>
                    <Text>{description}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>date</Text>
                    <Text>{amount}₺</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({})