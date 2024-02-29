import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from './showmenssage.js';

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = loginForm["email-login"].value;
    const password = loginForm["password-login"].value;

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);

        showMessage("Bienvenido de nuevo ", "success");

        setTimeout(() => {
            window.location.href = "index2.html";
        }, 2000);

    } catch (error) {
        console.log(error.code)
        if (error.code === 'auth/wrong-password') {
            showMessage("Contraseña incorrecta", "error");
        } else if (error.code === 'auth/user-not-found') {
            showMessage("Usuario no encontrado", "error");
        } else if (error.code === 'auth/invalid-credential') {
            showMessage("Credencial inválida", "error");
        } else {
            showMessage("Algo salió mal", "error");
        }
    }
});


