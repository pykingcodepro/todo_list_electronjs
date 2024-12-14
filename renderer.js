let list = [];

const loadTasks = (list) => {
  const ulEl = document.getElementById("list");
  ulEl.innerHTML = "";
  list.forEach(task => {
    const liEl = document.createElement("li");
    liEl.innerText = task;
    ulEl.appendChild(liEl);
  });
}

const btn = document.getElementById("addBtn");

btn.addEventListener("click", e => {
  e.preventDefault();
  const taskName = document.getElementById("taskInput").value;
  // console.log(taskName);
  list.push(taskName);
  loadTasks(list);
})
loadTasks(list);