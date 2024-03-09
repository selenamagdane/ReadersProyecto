import { 
    createTask,
    onGetTask,
    updateTask,
    deleteTask, 
    getTask} from "./firebase.js";

import "./logout.js"

const taskForm = document.getElementById("create-form");
const tasksContainer = document.getElementById("tasks-container");

let id = "";
let editStatus = false;
let userGlobal;

let user = JSON.parse(localStorage.getItem("user"));

addEventListener("DOMContentLoaded", () => {
    userGlobal = user;
    console.log(user);

    onGetTask((querySnapshot) => {
        let html = '';

        querySnapshot.forEach(doc => {
            const data = doc.data();
           

            html += `
                <div class="card mb-3 transparent-card">
                    <div class="card-body">
                    <h6 class="text-light">${data.username}</h6>
                    <img src=${data.userPhotoURL}>
                        <h4 class="text-light card-title">${data.title}</h4>
                        <p class="text-light card-text">${data.description}</p>
                        <h6 class="text-light">${data.date}</h6>
                        <p class="text-light">${data.time}</p>
                        <div class="row">
                        <button class='btn btn-dark btn-delete-custom mx-auto col-5' data-id='${doc.id}'>Delete</button>
                        <button class='btn btn-dark btn-edit-custom mx-auto col-5' data-id='${doc.id}'>Edit</button>
                    </div>
                </div>
              </div>
              <style>
                body {
                  background-image: url('./assets/img/esqueleto.png');
                  background-size: cover; 
                  background-position: center; 
                }
                .navbar {
                  background-color: rgba(0, 0, 0, 0.6) !important; 
                }
            
                .transparent-card {
                background-color: rgba(0, 0, 0, 0.6) !important; /* ajusta el último valor (0.6) para cambiar la opacidad */
                }
            `;
        });

        tasksContainer.innerHTML = html;
        
        const btssDelete = document.querySelectorAll(".btn-delete-custom");

        btssDelete.forEach(btn => {
            btn.addEventListener("click", ({target: {dataset}}) => deleteTask(dataset.id));
        });

        const btsEdit = document.querySelectorAll(".btn-edit-custom");

        btsEdit.forEach(btn => {
            btn.addEventListener("click", async ({target: {dataset}}) => {
                const doc = await getTask(dataset.id);
                const task = doc.data();

                taskForm["task-title"].value = task.title;
                taskForm["task-content"].value = task.description;

                editStatus = true;
                id = doc.id;

                taskForm['btn-task-save'].innerHTML = 'Update';
            });
        });

    });
});
taskForm.addEventListener("submit", (e) => {
    // Evitamos que recargue la pagina
    e.preventDefault();

    const fullDate = new Date();

    const date = getFormattedDate(fullDate);
    
    const time = getFormattedHour(fullDate);

    const userName = userGlobal.displayName;

    const title = taskForm["task-title"].value;
    const description = taskForm["task-content"].value;

    if (!editStatus){
        createTask(title, description, userName, userGlobal.photoURL, date, time);
    }
    else{
        updateTask( id, ({
            title: title,
            description: description,
            username: userName,
            date: date,
            time: time,
            userPhotoURL: userGlobal.photoURL
        }));

        editStatus = false;
        
        taskForm['btn-task-save'].innerHTML ='create';
    }

    taskForm.reset();
});

function getFormattedDate(date) {
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
  }

  function getFormattedHour(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
 
    if (hours < 10) {
     hours = '0' + hours;
    }
 
    if (minutes < 10) {
     minutes = '0' + minutes;
    }
 
    return hours + ':'  + minutes;
}

