const addButtons = document.querySelectorAll(".add-task");
const taskLists = document.querySelectorAll(".task-list");

let draggedTask = null;

function saveTasks() {
  const data = {
    todo: [],
    "in-progress": [],
    done: []
  };

  taskLists.forEach((list) => {
    const columnId = list.parentElement.id;
    const tasks = list.querySelectorAll(".task span");

    tasks.forEach((task) => {
      data[columnId].push(task.textContent);
    });
  });

  localStorage.setItem("kanbanTasks", JSON.stringify(data));
}

function createTask(taskText, taskList) {
  const task = document.createElement("div");
  task.classList.add("task");
  task.setAttribute("draggable", "true");

  task.addEventListener("dragstart", () => {
    draggedTask = task;
    task.style.opacity = "0.5";
  });

  task.addEventListener("dragend", () => {
    task.style.opacity = "1";
  });

  const span = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    task.remove();
    saveTasks();
  });

  task.appendChild(span);
  task.appendChild(deleteBtn);
  taskList.appendChild(task);
}

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const taskText = prompt("Enter your task:");

    if (taskText === null || taskText.trim() === "") return;

    const cleanText = taskText.trim();
    const taskList = button.previousElementSibling;

    createTask(cleanText, taskList);
    saveTasks();
  });
});

taskLists.forEach((list) => {
  list.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  list.addEventListener("drop", () => {
    if (draggedTask) {
      list.appendChild(draggedTask);
      draggedTask = null;
      saveTasks();
    }
  });
});

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("kanbanTasks"));

  if (!savedTasks) return;

  Object.keys(savedTasks).forEach((columnId) => {
    const column = document.querySelector(`#${columnId} .task-list`);

    savedTasks[columnId].forEach((taskText) => {
      createTask(taskText, column);
    });
  });
}

loadTasks();

