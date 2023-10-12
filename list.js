//DOM Elements and Global Variables
const addTaskBtn = document.getElementById('add-task');
const input = document.querySelector('input');
const taskList = document.getElementById('task-list');

let taskId = 0;
let randomImgid = 1; 

//Add new task
const addTask = (task) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('form-check', 'd-flex', 'align-items-center', 'gap-3');
    taskItem.innerHTML = `
    <input class="task-check" type="checkbox" id="task-${taskId}">
    <label class="task-check-label" for="task-${taskId}">${task}</label>
    <button type="button" class="btn-close" aria-label="Close" data-task-id="${taskId}"></button>
    `;
    taskList.appendChild(taskItem);
    taskId++;
}

//Remove task
const removeTask = (taskId) => {
    const taskItem = document.querySelector(`#task-${taskId}`).parentNode;
    taskList.removeChild(taskItem);
}

//Handle Add Task Button click
addTaskBtn.addEventListener('click', () => {
    const task = input.value.trim();
    const taskWithImg = `<img class="me-3" src="https://picsum.photos/50/50?random=${randomImgId}"> <span>${task}</span>`;

    if (task !== '') {
        addTask(taskWithImg);
        input.value = '';
        randomImgid++;
    }
});

//Handle completing a task and removing it
taskList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.matches('.task-check')) {
        const label = target.parentNode.querySelector('label');
        if (target.checked) {
            label.classList.add('text-decoration-line-through');
        } else {
            label.classList.remove('text-decoration-line-through');
        }
    } else if (target.matches('btn-close')) {
        const taskId = target.getAttribute('data-task-id');
        removeTask(taskId);
    }
});