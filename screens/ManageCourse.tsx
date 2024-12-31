import { Pressable, StyleSheet, View, Text } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { CourseContext } from '../store/courseContext'
import CourseForm from '../components/CourseForm';
import { deleteCoursehttp, storeCourse, updateCourse } from '../helper/http';
export default function ManageCourse({ route, navigation }) {
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
        coursesContext.deleteCourse(courseId);
        await deleteCoursehttp(courseId);
        navigation.goBack();
    }
    async function addUpdateHandler(courseData) {
        const formattedCourseData = {
            ...courseData,
            date: courseData.date.toISOString(), // Date nesnesini dizeye dönüştür
        };

        if (isEdit) {
            coursesContext.updateCourse({ id: courseId, ...formattedCourseData });
            await updateCourse(formattedCourseData, courseId);
        } else {
            const id = await storeCourse(formattedCourseData);
            coursesContext.addCourse({
                ...formattedCourseData,
                id: id
            });
        }
        navigation.goBack();
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