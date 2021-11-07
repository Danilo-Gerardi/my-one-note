import axios from 'axios';

const url = 'http://localhost:8080/signin';

const signIn = (user) => {
    axios.get(url, { data: user })
        .then(res => {
            console.log('Login efetuado com êxito!')
            return res;
        })
        .catch(res => {
            console.log('Ocorreu um erro ao fazer o login. Por favor, tente mais tarde')
            console.log(res)
        })
}

export default signIn;