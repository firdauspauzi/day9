// define elements
var taskInput = document.getElementById('taskInput');
var taskHolder = document.getElementById("taskholder");

function submitTask(){
    console.log("button clicked")
    
    // get input value
    var val = taskInput.value;
    console.log(val);
    
    // check input value empty or not
    if(val !== ""){
        var taskDiv = document.createElement("div");
        taskDiv.className = "task";
        
        
    // taskDiv.addEventListener("click", delTask); ### this was the original event to delete

    // create p tag <p></p>

        var pEle = document.createElement("p");
        pEle.innerHTML = val;


    // create delBtn

        var delBtn = document.createElement("button");
        delBtn.className = "delbtn"
        delBtn.innerHTML = "Completed?"
    

    // add event listener to delBtn

    delBtn.addEventListener("click", delTask);

    //append p and delBtn to taskDiv

        taskDiv.append(pEle);
        taskDiv.append(delBtn);

        taskHolder.append(taskDiv); 

        // clear input data

        taskInput.value = "";

    } else{
        alert("Please fill in Task");
    }
    
}; 


// parentElement since the delete btn is the child of taskDiv, the element that we want to delete
function delTask(){
    this.parentElement.remove();
    // this.remove(); #This will only remove the delete button   
}