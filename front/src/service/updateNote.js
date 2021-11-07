import axios from 'axios';

const url = 'http://localhost:8080/note';

function update(note) {
    axios.put(url, note)
        .then(res => {
            console.log('Post alterado.')
        })
        .catch(res => {
            console.log(res)
        })
}

export default update;