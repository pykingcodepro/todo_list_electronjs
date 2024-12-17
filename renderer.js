let list = [];

const loadTasks = (list) => {
  const ulEl = document.getElementById("list");
  ulEl.innerHTML = "";
  list.forEach(task => {
    const liEl = document.createElement("li");
    liEl.innerText = task.name;

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", e => {
      e.preventDefault();
      deleteTask(task.id);
    })

    liEl.appendChild(deleteBtn);
    ulEl.appendChild(liEl);
  });
}

const deleteTask = id => {
  let newList = list.filter(task => task.id != id);
  // console.log(newList);
  list = newList;
  loadTasks(newList);
};

const btn = document.getElementById("addBtn");

btn.addEventListener("click", e => {
  e.preventDefault();
  const taskName = document.getElementById("taskInput").value;
  list.push({
    id: list.length != 0 ? list[list.length - 1].id + 1 : 0,
    name: taskName
  });
  console.log(list);
  loadTasks(list);
  document.getElementById("taskInput").value = "";
})
loadTasks(list);