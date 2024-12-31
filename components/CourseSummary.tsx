import { View, Text } from 'react-native'
import React from 'react'

const CourseSummary = ({ periodName, courses }) => {

    const courseSum = courses.reduce((sum, course) => sum + course.amount, 0)
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>{periodName}</Text>
            <Text>{courseSum}₺</Text>
        </View>
    )
}

export default CourseSummary