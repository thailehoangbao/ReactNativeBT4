import axios from "axios";


export const fetchApi= () => {

    const url = 'https://jsonplaceholder.typicode.com/todos';

    return axios.get(url)
        .then((response) => response.data)
        .catch(err => console.log(err));
}