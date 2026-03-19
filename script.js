const addButtons = document.querySelectorAll(".add-task");

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const taskText = prompt("Enter your task:");

    if (taskText === null || taskText.trim() === "") return;

    const cleanText = taskText.trim();

    // Create task container
    const task = document.createElement("div");
    task.classList.add("task");

    // Create text
    const span = document.createElement("span");
    span.textContent = cleanText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
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
