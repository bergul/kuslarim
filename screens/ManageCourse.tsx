import { Pressable, StyleSheet, View, Text } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { CourseContext } from '../store/courseContext'
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

    function deleteCourse() {
        coursesContext.deleteCourse(courseId);
        navigation.goBack();
    }
    function addUpdateHandler() {
        if (isEdit === true) {
            coursesContext.updateCourse({ id: courseId, description: 'Güncel Ders', amount: 100, date: new Date() });
        } else {
            coursesContext.addCourse({ description: 'Yeni Ders', amount: 100, date: new Date() });
        }
        navigation.goBack();
    }
    return (
        <View>
            <View>
                <Pressable onPress={() => navigation.goBack()}>
                    <View style={{ padding: 10, backgroundColor: 'red', minWidth: 100, alignItems: 'center', borderRadius: 10 }}>
                        <Text style={{ color: 'white' }}>İptal Et</Text>
                    </View>
                </Pressable>
                <Pressable onPress={addUpdateHandler}>
                    <View style={{ padding: 10, backgroundColor: 'green', minWidth: 100, alignItems: 'center', borderRadius: 10 }}>
                        <Text>
                            {isEdit ? 'Dersi Güncelle' : 'Ders Ekle'}
                        </Text>
                    </View>
                </Pressable>
            </View>

            {isEdit && (
                <View>
                    <Ionicons name="trash" size={24} color="black" onPress={deleteCourse} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({});