import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Courses from '../components/Courses'
import { CourseContext } from '../store/courseContext'
import { getLastWeek } from '../helper/date'
import { fetchCourses } from '../helper/http'
import ErrorText from '../components/ErrorText'

export default function RecentCourse() {
    const coursesContext = useContext(CourseContext)
    const [isFetch, setIsFetch] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setError(null);
        setIsFetch(true);
        fetchCourses().then((data) => {
            coursesContext.setCourses(data);
            setIsFetch(false);
        }).catch(() => {
            setIsFetch(false);
            setError('Bir hata oluştu');
        });

    }, []);

    if (error?.length) {
        return (
            <ErrorText message={error} />
        )
    }
    const recentCourses = coursesContext.courses.filter((course: { date: string }) => {
        const today = new Date();
        const lastWeek = getLastWeek(today, 7); // Son 1 hafta için 7 gün
        const courseDate = new Date(course.date);
        return courseDate >= lastWeek && courseDate <= today;
    });
    if (isFetch) {
        return (
            <ActivityIndicator size="large" color="#0000ff" />
        )
    }
    return (
        <Courses contentnulltext='Yakın Zamanda Kurs Kaydınız Yapılmadı' courses={recentCourses} coursePeriod='Son 1 Hafta' />
    )
}

const styles = StyleSheet.create({})