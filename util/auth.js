import axios from "axios";

const API_KEY = 'AIzaSyCIlVfjMkiaFivqt1xi99kuAxfVg8byMt0';

export async function signupNewUser(email, password){
    await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`),
        {
            email: email,
            password: password,
            returnSecureToken: true,
        }
}