import axios from 'axios';




export function searchUsers(keyword) {
    return axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
        response => {
            console.log(`Request success of ${keyword}`, response.data.items)
            return response.data.items;
        },
        error => {
            console.log('Bad request', response.data)
        }
    );
}


