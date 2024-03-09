import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js"

const logout = document.getElementById('logout');

logout.addEventListener('click', async () => {
    await signOut(auth);
    window.location.href = "index.html"; // Reemplaza "ruta_de_tu_html.html" con la ruta correcta a tu HTML
});
