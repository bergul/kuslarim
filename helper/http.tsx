import axios from 'axios'

const baseURL = 'https://crypto-3e5e1-default-rtdb.firebaseio.com';
export async function storeCourse(courseData) {
    const response = await axios.post(baseURL + '/courses.json', courseData)
    return response.data.name;
}
export async function fetchCourses() {
    const response = await axios.get(baseURL + '/courses.json')
    const courses = []
    for (const key in response.data) {

        const course = {
            id: key,
            amount: response.data[key].amount, description: response.data[key].description,
            date: response.data[key].date,
        };
        courses.push(course)
    }

    return courses;
}
export async function updateCourse(courseData) {
    return await axios.put(baseURL + '/courses/' + courseData.id + '.json', courseData)
}

export async function deleteCoursehttp(id) {
    return await axios.delete(baseURL + '/courses/' + id + '.json')
}

