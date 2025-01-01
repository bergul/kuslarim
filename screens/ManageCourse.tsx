import { Pressable, StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect, useContext, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { CourseContext } from '../store/courseContext'
import CourseForm from '../components/CourseForm';
import { deleteCoursehttp, storeCourse, updateCourse } from '../helper/http';
import ErrorText from '../components/ErrorText';
export default function ManageCourse({ route, navigation }) {
    const [isFetch, setIsFetch] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const courseId = route.params?.courseId;
    let isEdit = false;
    const selectedCourse = courseId ? useContext(CourseContext).courses.find(course => course.id === courseId) : null;  // If courseId is not null, find the course with the same id
    if (courseId !== undefined) {
        isEdit = true;
    }
    const coursesContext = useContext(CourseContext);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEdit ? 'Dersi Düzenle' : 'Ders Ekle',


        }, [isEdit, navigation]);
    });
    function cancelHandler() {

        navigation.goBack();
    }
    async function deleteCourse() {
        setError(null);
        setIsFetch(true);
        coursesContext.deleteCourse(courseId);
        await deleteCoursehttp(courseId).catch(() => { setError('SİLEMEDİ') });
        navigation.goBack();
    }
    if (error?.length && !isFetch) {
        return (
            <ErrorText message={error} />
        )
    }
    async function addUpdateHandler(courseData) {
        setError(null);
        const formattedCourseData = {
            ...courseData,
            date: courseData.date.toISOString(), // Date nesnesini dizeye dönüştür
        };

        if (isEdit) {
            setIsFetch(true);
            coursesContext.updateCourse({ id: courseId, ...formattedCourseData });
            await updateCourse(formattedCourseData, courseId).catch(() => { setError('GÜNCELLENEMEDİ') });
            setIsFetch(false);
        } else {
            setIsFetch(true);
            const id = await storeCourse(formattedCourseData).catch(() => { setError('EKLENEMEDİ') });
            coursesContext.addCourse({
                ...formattedCourseData,
                id: id
            });
            setIsFetch(false);
        }
        navigation.goBack();
    }
    if (isFetch) {
        return (
            <ActivityIndicator size="large" color="#0000ff" />
        )
    }
    return (
        <View>
            <CourseForm cancelHandler={cancelHandler} onSubmit={addUpdateHandler} buttonLabel={isEdit ? 'Dersi Güncelle' : 'Ders Ekle'} defaultValues={selectedCourse} />
            {isEdit && (
                <View>
                    <Ionicons name="trash" size={24} color="black" onPress={deleteCourse} />
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({});