import { createContext, useReducer } from "react";
import React from 'react';
const COURSES = [
    {
        id: '1',
        description: 'C Programlama',
        amount: 69,
        date: new Date('2023-01-05'),
    },
    {
        id: '2',
        description: 'C# Programlama',
        amount: 69,
        date: new Date('2023-04-10'),
    },
    {
        id: '3',
        description: 'Angular',
        amount: 69,
        date: new Date('2022-12-08'),
    },
    {
        id: '4',
        description: 'Bootstrap 5',
        amount: 69,
        date: new Date('2022-10-10'),
    },
    {
        id: '5',
        description: 'React Js',
        amount: 69,
        date: new Date('2023-05-20'),
    },
    {
        id: '6',
        description: 'React Native',
        amount: 69,
        date: new Date('2023-07-30'),
    },
    {
        id: '7',
        description: 'Javascript',
        amount: 69,
        date: new Date('2023-06-12'),
    },
    {
        id: '8',
        description: 'Komple Web',
        amount: 69,
        date: new Date('2021-10-22'),
    },
    {
        id: '9',
        description: 'Frontend',
        amount: 69,
        date: new Date('2022-11-25'),
    },
];

export const CourseContext = createContext({
    courses: [],
    addCourse: ({ description, amount, date }) => { },
    deleteCourse: (id) => { },
    updateCourse: ({ id, description, amount, date }) => { },


});
function courseReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case 'DELETE':
            return state.filter(course => course.id !== action.payload);
        case 'UPDATE':
            const updatecourseIndex = state.findIndex(course => course.id === action.payload.id);

            const updatablecourse = state[updatecourseIndex];
            const updatedItem = { ...updatablecourse, ...action.payload.data };
            const updatedCourses = [...state
            ];
            updatedCourses[updatecourseIndex] = updatedItem;
            return updatedCourses;

        default:
            return state;
    }


}
function CourseContextProvider({ children }) {
    const [coursesState, dispatch] = useReducer(courseReducer, COURSES);

    function addCourse(courseData) {
        dispatch({
            type: 'ADD',
            payload: courseData,
        });
    }
    function deleteCourse(id) {
        dispatch({
            type: 'DELETE',
            payload: id,
        });
    }
    function updateCourse(id, courseData) {
        dispatch({
            type: 'UPDATE',
            payload: { id: id, data: courseData }
        });
    }
    const contextValue = {
        courses: coursesState,
        addCourse: addCourse,
        deleteCourse: deleteCourse,
        updateCourse: updateCourse,
    }
    return <CourseContext.Provider value={contextValue}>{children}</CourseContext.Provider>
}
export default CourseContextProvider;