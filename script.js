const addButtons = document.querySelectorAll('.add-task');

addButtons.forEach(button => {
  button.addEventListener("click", () => {
    const taskText = prompt("Enter your task:");

    if (taskText === null || taskText.trim() === "") return;

    const task = document.createElement("div");
    task.classList.add("task");
    task.textContent = taskText;

    const taskList = button.previousElementSibling;
    taskList.appendChild(task);
  });
});

