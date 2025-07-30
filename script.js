document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");
  const themeToggle = document.getElementById("themeToggle");

  // Load theme
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark") ? "enabled" : "disabled");
  });

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    taskCard.innerHTML = `
      <span>${taskText}</span>
      <button class="deleteBtn">❌</button>
    `;

    taskList.appendChild(taskCard);
    taskInput.value = "";

    taskCard.querySelector(".deleteBtn").addEventListener("click", () => {
      taskCard.remove();
    });
  });
});
