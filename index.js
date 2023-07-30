/* we declare the global attributes that are going to get called in this application. */

const tasks = document.getElementById("task-list");  // we get the list 
const addTask = document.querySelector(".new-task") // get the button for adding task
const deleteTask = document.querySelector(".remove-task") // get the button for removing task

// functions
function addNewTask(){ 

    let taskName = document.querySelector(".new-task-input").value; // we get the text inside input element
    let placeHolderText = document.querySelector(".new-task-input").getAttribute("placeholder"); //we get the placeholder of our text input element
    
    if(taskName == "" || taskName == placeHolderText){
        alert("please enter a valid task name!")
    }else{

        // we create a new li element with a class of new-task-wrapper
        let newTask = document.createElement("li") 
        newTask.classList.add("new-task-wrapper");

        // set the innerHTML of the new task
        newTask.innerHTML = `
            <div class="new-task">
                <input type="checkbox" class="new-task_checkbox">
                <span class="new-task_title">${taskName}</span>
                <button type="button" class="remove-task btn" onclick="deleteCurrTask()">Delete</button>
            </div>
        `;
        
        tasks.appendChild(newTask); // add the new task to the unordered list
    }
    
}

function deleteCurrTask(){
    let currTask = document.querySelector(".new-task-wrapper") // we get the elemeent that has the selector

    /*
        The current problem of this is that It will get the first element it finds.
        In this case it deletes the first task in the list no matter what delete button you press.
    */

    if(currTask){ // checks if task item is found 
        currTask.remove();
    }
}
