import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';
import { CoursesContext } from '../store/CoursesContext'; // Ensure this path is correct or adjust it to the correct location


import CourseList from './CourseList';
import CourseSummary from './CourseSummary';



export default function Courses({ coursePeriod }) {
    const courses = useContext(CoursesContext)
    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: 'lightgray', }}>
            <CourseSummary courses={courses} periodName={coursePeriod} />
            <CourseList courses={courses} />
        </View>
    )
}

const styles = StyleSheet.create({})