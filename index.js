/* we declare the common attributes that are going to get called in this application. */

const tasks = document.getElementById("task-list"); 
const addTask = document.querySelector(".new-task")
const deleteTask = document.querySelector(".remove-task")
const placeHolderText = document.querySelector(".new-task-input").getAttribute("placeholder");

function addNewTask(){
    let taskName = document.querySelector(".new-task-input").value;
    
    if(taskName == "" || taskName == placeHolderText){
        alert("please enter a valid task name!")
    }else{
        let newTask = document.createElement("li")
        newTask.classList.add("new-task-wrapper");

        // set the innerHTML of the new task
        newTask.innerHTML = `
        <div class="new-task">
            <input type="checkbox" class="new-task_checkbox">
            <span class="new-task_title">${taskName}</span>
            <button type="button" class="remove-task btn">Delete</button>
        </div>
        `;
        
        console.log(newTask);
        // tasks.appendChild(newTask);
    }





    
}
