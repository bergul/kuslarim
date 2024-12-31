import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Courses from '../components/Courses'
import { CourseContext } from '../store/courseContext'
import { getLastWeek } from '../helper/date'

export default function RecentCourse() {
    const coursesContext = useContext(CourseContext)
    const recentcourses = coursesContext.courses.filter((course: { date: Date }) => {
        const today = new Date();
        const lastWeek = getLastWeek(today, 30);
        return course.date >= lastWeek && course.date <= today;
    })
    return (
        <Courses contentnulltext='Yakın Zamanda Kurs Kaydınız Yapılmadı' courses={recentcourses} coursePeriod='Son 1 Hafta' />
    )
}

const styles = StyleSheet.create({})