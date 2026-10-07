
let taskInput = document.getElementById("input");
let addTask = document.getElementById("addTask");
let addList = document.getElementById("ulList");



addTask.addEventListener("click", function(){

    if(taskInput.value.trim() === "")
    return  ;

    let newTask = document.createElement("li");
    
    let taskText = document.createElement("span");
    taskText.textContent=taskInput.value.trim();
    
    
    
    
    let addCheckbox = document.createElement("input");
    addCheckbox.type= "checkbox";


    newTask.appendChild(addCheckbox);
    newTask.appendChild(taskText); 

    addList.appendChild(newTask);


   let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");
    newTask.appendChild(editButton);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove");
    newTask.appendChild(removeButton);
    
  

    taskInput.value = "";

});



addList.addEventListener("click", function(event){
    


    if (event.target.type === "checkbox"){
        if (event.target.checked) {
            event.target.nextElementSibling.classList.add("completed")
        }
        else{
            event.target.nextElementSibling.classList.remove("completed")
    }
    }
    if (event.target.classList.contains("edit")){
        
        let taskText= event.target.parentElement.querySelector("span");
        let newText = prompt("Edit task:", taskText.textContent);

        if (newText !== null && newText.trim() !==""){
            taskText.textContent = newText.trim();
        }
    }

    if (event.target.classList.contains("remove"))
        event.target.parentElement.remove()

    
        
    });

