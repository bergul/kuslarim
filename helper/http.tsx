import axios from 'axios'

const baseURL = 'https://crypto-3e5e1-default-rtdb.firebaseio.com';
export function storeCourse(courseData) {
    return axios.post(baseURL + '/courses.json', courseData)
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

