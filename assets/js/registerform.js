import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth, firestore } from './firebase.js';
import { showMessage } from './showmenssage.js';

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
        
    showMessage("Bienvenido " + userCredential.user.displayName)

    setTimeout(() => {
        window.location.href = "index2.html";
    }, 2000);

    } catch (error) {
        console.error('Error al registrar usuario:', error);
        console.log(error.menssege)
        console.log(error.code)

        if (error.code === 'auth/email-already-in-use'){
            showMessage("Email usado", "error")
        }
        else if(error.code === 'auth/invalid-email'){
            showMessage("Email invalido", "error")
        } else if (error.code === 'auth/weak-password'){
            showMessage("Contraseña Debil", "error")
        } else if (error.code){
            showMessage("Algo fallo", "error")
        }
    }
});
