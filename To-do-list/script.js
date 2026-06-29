let tasks = [];

function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push(task);

    input.value = "";

    displayTasks();

}

function displayTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        taskList.innerHTML += `
            <li>
                ${tasks[i]}
                <button class="delete-btn" onclick="deleteTask(${i})">
                    Delete
                </button>
            </li>
        `;

    }

    document.getElementById("taskCount").textContent =
        "Total Tasks: " + tasks.length;

}

function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();

}