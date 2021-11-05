import axios from 'axios';

const url = 'http://localhost:8080/signin';

function createUser(user) {
    axios.get(url, JSON.parse(JSON.stringify(user)))
        .then(res => {
            console.log('Login efetuado com êxito!')
        })
        .catch(res => {
            console.log('Ocorreu um erro ao fazer o login. Por favor, tente mais tarde')
        })
}

export default createUser;