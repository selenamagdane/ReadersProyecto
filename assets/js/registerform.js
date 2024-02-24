import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth, firestore } from './firebase.js';

const registerForm = document.querySelector('#register-form');

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = registerForm['username-register'].value;
    const email = registerForm['email-register'].value;
    const password = registerForm['password-register'].value;

    console.log(email, username, password);

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        userCredential.user.displayName = username;

        console.log(userCredential);

        console.log('Usuario registrado correctamente');
    } catch (error) {
        console.error('Error al registrar usuario:', error);
    }
});
