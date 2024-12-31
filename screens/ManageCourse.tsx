import { StyleSheet, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function ManageCourse({ route, navigation }) {
    const courseId = route.params?.courseId;
    let isEdit = false;
    if (courseId) {
        isEdit = true;
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEdit ? 'Dersi Düzenle' : 'Ders Ekle',
            headerRight: () => (
                <Ionicons
                    name="trash"
                    size={24}
                    color="black"
                    onPress={deleteCourse}
                />
            ),
        }, [isEdit, navigation]);
    });

    function deleteCourse() {
        navigation.goBack();
    }

    return (
        <View>
            {isEdit && (
                <View>
                    <Ionicons name="trash" size={24} color="black" onPress={deleteCourse} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({});