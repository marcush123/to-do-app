const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "✅";
    removeButton.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = "";
  }
});
