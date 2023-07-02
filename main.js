const addTask = document.getElementById('add-task');
const enteredTask = document.getElementById('entered-task');
const tasksContainer = document.getElementById('tasks-container');
let mydata = [];


addTask.addEventListener('click', function(){
    let tasks = document.createElement('div');
    tasks.classList.add('tasks');

    let newTask = document.createElement('li');
    newTask.innerText = `${enteredTask.value}`;
    tasks.appendChild(newTask);
    
    if (enteredTask.value === "") {
        alert('pls Enter Task')
    } else {
        tasksContainer.appendChild(tasks);
        let obj = {};
        obj.task = newTask.innerText;
        mydata.push(obj);
        let myJson = JSON.stringify(mydata);
        localStorage.setItem('myTask', myJson);
    }
    

    let checkbtn = document.createElement("button");
    checkbtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkbtn.classList.add('checkbtn');
    tasks.appendChild(checkbtn);

    let deletebtn =document.createElement("button");
    deletebtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'; 
    deletebtn.classList.add('deletebtn');
    tasks.appendChild(deletebtn);

   
    enteredTask.value = ""

    checkbtn.addEventListener('click', function () {
        newTask.style.textDecoration = "line-through";
    })

    deletebtn.addEventListener('click', function () {
        tasks.remove()
        
    })
    // json appending code
    //const fs = require('fs');
    
    //console.log(myJson);
   /* writeFile("./data.json", myJson, err=> {
        if (err) {
            console.log('ERROR' ,err)
        } else {
            console.log('json data is wriiten successfully')
        }
    })*/
    
    

});

