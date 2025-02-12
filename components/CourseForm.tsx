import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './input'
import { Ionicons } from '@expo/vector-icons'


export default function CourseForm({ cancelHandler, onSubmit, buttonLabel, defaultValues }) {
    const [inputData, setInputData] = useState({ amount: defaultValues ? defaultValues.amount.toString() : '', date: defaultValues ? defaultValues.date : '', description: defaultValues ? defaultValues.description : '' })
    console.log(inputData)
    function inputChange(key, value) {
        setInputData({ ...inputData, [key]: value })
    }
    function validateDate(date: string) {
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        return datePattern.test(date);
    }
    function addUpdateHandler() {
        const data = { amount: parseFloat(inputData.amount), date: new Date(inputData.date), description: inputData.description }
        const isDataValid = data.amount > 0 && data.description.length > 0;
        if (!isDataValid && !validateDate(data.date.toString('YYYY-MM-DD'))) {
            return;
        }
        onSubmit(data);
    }
    return (
        <><Input label='Tutar' textInputConfig={{ keyboardType: 'decimal-pad', onChangeText: inputChange.bind(this, 'amount'), value: inputData.amount, }} /><Input label='Tarih' textInputConfig={{ onChangeText: inputChange.bind(this, 'date'), value: inputData.date, placeHolder: 'YYYY-MM-DD' }} /><Input label='Başlık' textInputConfig={{ onChangeText: inputChange.bind(this, 'description'), value: inputData.description, placeHolder: 'Ders Adı:', multiline: true }} />

            <Pressable onPress={cancelHandler}>
                <View style={{ padding: 10, backgroundColor: 'red', minWidth: 100, alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white' }}>İptal Et</Text>
                </View>
            </Pressable>
            <Pressable onPress={addUpdateHandler}>
                <View style={{ padding: 10, backgroundColor: 'green', minWidth: 100, alignItems: 'center', borderRadius: 10 }}>
                    <Text>
                        {buttonLabel}
                    </Text>
                </View>
            </Pressable>
        </>


    )
}

const styles = StyleSheet.create({})