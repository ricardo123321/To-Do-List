const projectList = [];

const Project = function(name){
    this.name = name;
    todoItems = [];
}

const todoIs = (name, projectN, description, dueDate, priority) => {
    this.name = name;
    this.projectN = projectN;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

const submitBtn = document.getElementById('submitToDo');

submitBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const projectN = document.getElementById('projectN').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;
  const projectE = projectList.find(obj => {
    return obj.name === projectN
  });
  toDo = new todoIs(name, projectN, description, dueDate, priority);
  projectE.todoItems.push(toDo);
  localStorage.setItem('projectList', JSON.stringify(projectList));
});

const createP = (name) => {
  if(projectList.length > 0 && name === 'Default'){
  return
  }
const nProject = new Project(name)
console.log(nProject)
projectList.push(nProject)
}

createP('Default')