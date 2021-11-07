import axios from 'axios';

const url = 'http://localhost:8080/signup';

function signIn(user) {
    axios.post(url, JSON.parse(JSON.stringify(user)))
        .then(res => {
            console.log('Conta criada com êxito!')
        })
        .catch(res => {
            console.log('Ocorreu um erro ao criar a conta. Por favor, tente mais tarde')
        })
}

export default signIn;