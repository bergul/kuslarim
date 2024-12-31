import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';




import CourseList from './CourseList';
import CourseSummary from './CourseSummary';



export default function Courses({ coursePeriod, courses, contentnulltext }) {
    let content = <Text>{contentnulltext}</Text>
    if (courses.length > 0) {
        content = <CourseList courses={courses} />
    }
    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: 'lightgray', }}>
            <CourseSummary courses={courses} periodName={coursePeriod} />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({})