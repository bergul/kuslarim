import { Pressable, StyleSheet, View, Text } from 'react-native'
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


        }, [isEdit, navigation]);
    });

    function deleteCourse() {
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
                <Pressable>
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