import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Courses from '../components/Courses'
import { CourseContext } from '../store/courseContext'
import { getLastWeek } from '../helper/date'
import { fetchCourses } from '../helper/http'

export default function RecentCourse() {
    // const coursesContext = useContext(CourseContext)
    const [fetchedCourses, setFetchedCourses] = useState([]);

    useEffect(() => {
        fetchCourses().then((data) => {
            setFetchedCourses(data);

        });
    });
    const recentCourses = fetchedCourses.filter((course: { date: string }) => {
        const today = new Date();
        const lastWeek = getLastWeek(today, 7); // Son 1 hafta için 7 gün
        const courseDate = new Date(course.date);
        return courseDate >= lastWeek && courseDate <= today;
    });

    return (
        <Courses contentnulltext='Yakın Zamanda Kurs Kaydınız Yapılmadı' courses={recentCourses} coursePeriod='Son 1 Hafta' />
    )
}

const styles = StyleSheet.create({})