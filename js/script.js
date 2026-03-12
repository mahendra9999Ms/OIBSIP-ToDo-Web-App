function addTask(){

let input = document.getElementById("taskInput");
let taskText = input.value.trim();

if(taskText === ""){
alert("Please enter a task");
return;
}

let time = new Date().toLocaleString();

let li = document.createElement("li");

li.innerHTML = `
<div class="task-row">
<span class="task">${taskText}</span>

<div class="buttons">
<button class="complete">✔</button>
<button class="edit">✎</button>
<button class="delete">🗑</button>
</div>
</div>

<span class="time">Added: ${time}</span>
`;

document.getElementById("pendingList").appendChild(li);

input.value = "";

li.querySelector(".complete").onclick = function(){
moveToCompleted(li);
};

li.querySelector(".delete").onclick = function(){
li.remove();
};

li.querySelector(".edit").onclick = function(){
editTask(li);
};

}

function moveToCompleted(task){

task.querySelector(".complete").remove();

let completedTime = document.createElement("span");
completedTime.className="time";
completedTime.innerText = "Completed: " + new Date().toLocaleString();

task.appendChild(completedTime);

document.getElementById("completedList").appendChild(task);

}

function editTask(task){

let text = task.querySelector(".task");

let newText = prompt("Edit task:", text.innerText);

if(newText){
text.innerText = newText;
}

}
