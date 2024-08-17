//Selecting elements
const addTaskBtn = document.getElementById('add-task');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Funtion to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
        ${taskText}
        <button class="delete-btn">Delete</button>`;
        taskList.appendChild(li);
        taskInput,value = "";

        // Mark task as complete on click
        li.addEventListener('click', function () {
            li.classList.toggle('completed');
        });
        
        // Delete task on click
        li.querySelector('.delete-btn').addEventListener('click', function () {
            taskList.removeChild(li);
        });
    }
}

// Event listener for adding a new task
addTaskBtn.addEventListener('click', addTask);

// Allow pressing 'Enter' to add a task
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});