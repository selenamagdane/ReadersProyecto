import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from './showmenssage.js';

const googlebuttom = document.querySelector('#google-login')

googlebuttom.addEventListener('click', async () =>{

    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)

    
        showMessage("Bienvenido " + credentials.user.displayName, "success");

        setTimeout(() => {
            window.location.href = "index2.html";
        }, 2000);


    } catch (error) {
        console.log(error)
    }

})