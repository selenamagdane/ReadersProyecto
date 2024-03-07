//sidebar 
const menuItems = document.querySelectorAll('.menu-item');

//theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root')

//theme/display customization

// abrir modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//cerrar modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

//cerca modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

// eliminar la class activa de los intervalos o del selector de tamaño de fuente
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }

     //font the root 
    document.querySelector('html').style.fontSize = fontSize;
    });

});

// change primary color

// Funciones para controlar la ventana emergente de comentarios
function openPopup() {
    document.getElementById("comment-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("comment-popup").style.display = "none";
}

function postComment() {
    // Lógica para publicar el comentario
    // Por ejemplo, enviar el comentario al servidor
    closePopup(); // Cierra la ventana emergente después de publicar el comentario
}

function iniciarSesion() {
    document.getElementById("comment-popup").classList.remove("hide");
}