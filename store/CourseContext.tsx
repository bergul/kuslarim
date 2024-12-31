import { createContext, useReducer } from "react";
import React from 'react';

export const CourseContext = createContext({
    courses: [],
    addCourse: ({ description, amount, date }) => { },
    deleteCourse: (id) => { },
    updateCourse: ({ id, description, amount, date }) => { },
    setCourses: (courses) => { },

});
function courseReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = Math.random().toString();
            return [action.payload, ...state];
        case 'DELETE':
            return state.filter(course => course.id !== action.payload);
        case 'UPDATE':
            const updateblecourseindex = state.findIndex((course) => course.id === action.payload.data.id);

            const updatablecourse = state[updateblecourseindex];
            const updatedItem = { ...updatablecourse, ...action.payload.data };
            const updatedCourses = [...state
            ];
            updatedCourses[updateblecourseindex] = updatedItem;
            return updatedCourses;
        case 'SET':
            const reversedCourses = action.payload.reverse();
            return reversedCourses;
        default:
            return state;
    }


}
function CourseContextProvider({ children }) {
    const [coursesState, dispatch] = useReducer(courseReducer, []);

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
    function updateCourse(courseData) {
        dispatch({
            type: 'UPDATE',
            payload: { data: courseData }
        });
    }
    function setCourses(courses) {
        dispatch({
            type: 'SET',
            payload: courses
        });
    }
    const contextValue = {
        courses: coursesState,
        addCourse: addCourse,
        deleteCourse: deleteCourse,
        updateCourse: updateCourse,
        setCourses: setCourses,
    }
    return <CourseContext.Provider value={contextValue}>{children}</CourseContext.Provider>
}
export default CourseContextProvider;