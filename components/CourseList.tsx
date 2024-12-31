import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CourseItem from './CourseItem'

const CourseList = ({ courses }) => {
    const renderCourseItem = ({ item }) => {
        return (
            <CourseItem {...item} />
        )
    }
    return (
        <FlatList data={courses} keyExtractor={(item) => item.id} renderItem={renderCourseItem} />
    )
}

export default CourseList