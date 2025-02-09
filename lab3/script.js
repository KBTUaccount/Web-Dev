document.getElementById("add-task").addEventListener("click", function() {
    let taskInput = document.getElementById("new-task");
    let taskValue = taskInput.value.trim();

    if (taskValue !== "") {
      let todoList = document.getElementById("todo-list");
      let listItem = document.createElement("li");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      checkbox.addEventListener("change", function() {
        listItem.classList.toggle("done");
      });

      let taskText = document.createElement("span");
      taskText.textContent = taskValue;

      let deleteBtn = document.createElement("span");
      deleteBtn.textContent = "🗑";
      deleteBtn.classList.add("delete");
      deleteBtn.addEventListener("click", function() {
        todoList.removeChild(listItem);
      });

      listItem.appendChild(checkbox);
      listItem.appendChild(taskText);
      listItem.appendChild(deleteBtn);

      todoList.appendChild(listItem);

      taskInput.value = "";
    } else {
      alert("Please enter a task.");
    }
  });