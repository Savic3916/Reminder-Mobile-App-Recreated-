import axios from "axios";

const API_KEY = 'AIzaSyCIlVfjMkiaFivqt1xi99kuAxfVg8byMt0';

export async function signupNewUser(mode, email, password){
    await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`, {
        email: email,
        password: password,
        returnSecureToken: true
    });
};

// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]