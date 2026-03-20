const addButtons = document.querySelectorAll(".add-task");
const taskLists = document.querySelectorAll(".task-list");

let draggedTask = null;

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const taskText = prompt("Enter your task:");

    if (taskText === null || taskText.trim() === "") return;

    const cleanText = taskText.trim();

    // Create task container
    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("draggable", "true");

    // Drag start
    task.addEventListener("dragstart", () => {
      draggedTask = task;
      task.style.opacity = "0.5";
    });

    // Drag end
    task.addEventListener("dragend", () => {
      task.style.opacity = "1";
    });

    // Create text
    const span = document.createElement("span");
    span.textContent = cleanText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.classList.add("delete-btn");

    // Delete functionality
    deleteBtn.addEventListener("click", () => {
      task.remove();
    });

    // Put everything together
    task.appendChild(span);
    task.appendChild(deleteBtn);

    const taskList = button.previousElementSibling;
    taskList.appendChild(task);
  });
});

// Allow drop into each task list
taskLists.forEach((list) => {
  list.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  list.addEventListener("drop", () => {
    if (draggedTask) {
      list.appendChild(draggedTask);
      draggedTask = null;
    }
  });
});