/* we declare the global attributes that are going to get called in this application. */

const tasks = document.getElementById("task-list");  // we get the list 
const addTask = document.querySelector(".new-task") // get the button for adding task
const deleteTask = document.querySelector(".remove-task") // get the button for removing task

// functions

/* functions to addd

    1. when clicking the check box i want the task to be striked out ✅
    2. be able to delete the selected task 🚧

*/

function addNewTask(){ 

    let taskName = document.querySelector(".new-task-input"); // we get the text inside input element
    let placeHolderText = document.querySelector(".new-task-input").getAttribute("placeholder"); //we get the placeholder of our text input element
    
    if(taskName.value == "" || taskName.value == placeHolderText){
        alert("please enter a valid task name!")
    }else{

        // we create a new li element with a class of new-task-wrapper
        let newTask = document.createElement("li") 
        newTask.classList.add("new-task-wrapper");

        // set the innerHTML of the new task
        newTask.innerHTML = `
            <div class="new-task">
                <input type="checkbox" class="new-task_checkbox" onchange="finishedTask(this)">
                <span class="new-task_title">${taskName.value}</span>
                <button type="button" class="remove-task btn" onclick="deleteCurrTask()">Delete</button>
            </div>
        `;
        
        tasks.appendChild(newTask); // add the new task to the unordered list
        
    }
    taskName.value = taskName.defaultValue;
}

function finishedTask(task){
    let currTask = task.closest("li"); // we get the closest anscestor element of the checkbox
    
    if(currTask){ // if the li element exists
        let taskName = currTask.querySelector(".new-task_title");
        /*
            Q -> why use currTask.querySelector instead of document.QuerySelector?

            A -> document.querySelector has a broader scope which means that it can choose
                outside of the current selected list element. On the other hand, currTask.querySelector's
                scope is in only its children.
        */

        if(taskName && task.checked == true){
            taskName.innerHTML = `<s>${taskName.textContent}</s>`;
        }else{
            taskName.innerHTML = taskName.textContent;
        }
    }
    
}

function deleteCurrTask(){
    let currTask = document.querySelector(".new-task-wrapper") // we get the elemeent that has the selector 
    /*
        The current problem of this is that It will get the first element it finds.
        In this case it deletes the first task in the list no matter what delete button you press.
    */

    if(currTask){ // if task  is found 
        currTask.remove(); // remove task
    }
}
