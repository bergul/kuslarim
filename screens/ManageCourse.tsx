import { Pressable, StyleSheet, View, Text } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { CourseContext } from '../store/courseContext'
import CourseForm from '../components/CourseForm';
export default function ManageCourse({ route, navigation }) {
    const courseId = route.params?.courseId;
    let isEdit = false;
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
    function deleteCourse() {
        coursesContext.deleteCourse(courseId);
        navigation.goBack();
    }
    function addUpdateHandler(courseData) {
        if (isEdit === true) {
            coursesContext.updateCourse({ id: courseId, description: courseData.description, amount: courseData.amount, date: courseData.date });
        } else {
            coursesContext.addCourse({ description: courseData.description, amount: courseData.amount, date: courseData.date });
        }
        navigation.goBack();
    }
    return (
        <View>
            <CourseForm cancelHandler={cancelHandler} onSubmit={addUpdateHandler} buttonLabel={isEdit ? 'Dersi Güncelle' : 'Ders Ekle'} />
            {isEdit && (
                <View>
                    <Ionicons name="trash" size={24} color="black" onPress={deleteCourse} />
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({});