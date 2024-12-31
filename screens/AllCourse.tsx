import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Courses from '../components/Courses'
import { CourseContext } from '../store/courseContext'

export default function AllCourse() {
    const coursesContext = useContext(CourseContext)
    return (
        <Courses courses={coursesContext.courses} coursePeriod='Hepsi' />
    )
}

const styles = StyleSheet.create({})