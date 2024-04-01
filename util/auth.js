import axios from "axios";

const API_KEY = 'AIzaSyCIlVfjMkiaFivqt1xi99kuAxfVg8byMt0';

async function authenticateUser(mode, email, password){
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`, {
        email: email,
        password: password,
        returnSecureToken: true
    });
    console.log(response.data);
};

export async function signupNewUser(email, password){
    const response = await authenticateUser('signUp', email, password);
};

export async function loginUser(email, password){
    const response = await authenticateUser('signInWithPassword', email, password);;
}
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]