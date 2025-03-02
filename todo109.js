let tasks = [];
function addTask() {
    let task = document.getElementById('task').value;
    let priority = parseInt(document.getElementById('priority').value);
    if (task && !isNaN(priority)) {
        tasks.push({ task, priority });
        tasks.sort((a, b) => a.priority - b.priority);
        displayTasks();
        document.getElementById('task').value = "";
        document.getElementById('priority').value = "";
    }
}
function displayTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = tasks.map(t => `<li class='list-group-item d-flex justify-content-between'><span>${t.task}</span> <span class='priority'>Priority: ${t.priority}</span></li>`).join('');
}