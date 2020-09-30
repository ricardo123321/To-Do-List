if (localStorage.getItem('projectList') === '' || localStorage.getItem('projectList') === null) {
  const projectList = [];
  localStorage.setItem('projectList', projectList);
}

const Project = function(name){
    this.name = name;
    this.todoItems = [];
}

const todoIs = function(name, projectN, description, dueDate, priority){
    this.name = name;
    this.projectN = projectN;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

const submitBtn = document.getElementById('submitToDo');
const submitBtnP = document.getElementById('submitToP');
const submitBtnErz = document.getElementById('submitToErz');

submitBtn.addEventListener('click', () => {
  const projectList = JSON.parse((localStorage.getItem('projectList')))
  const name = document.getElementById('name').value;
  const projectN = document.getElementById('projectN').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;
  const projectE = projectList.find(obj => {
    return obj.name === projectN
  });
  console.log(projectE)
  toDo = new todoIs(name, projectN, description, dueDate, priority);
  projectE.todoItems.push(toDo);
  localStorage.setItem('projectList', JSON.stringify(projectList));
});

const createP = (name) => {
  const projectList = JSON.parse((localStorage.getItem('projectList')))
  if(projectList.length > 0 && name === 'Default'){
  return
  }
  const nProject = new Project(name)
  projectList.push(nProject)
  localStorage.setItem('projectList', JSON.stringify(projectList));
}

const deleteP = (pname) => {
  const projectList = JSON.parse((localStorage.getItem('projectList')))
  if(projectList.length > 0 && pname === 'Default'){
    return
  }
  const index = projectList.indexOf(projectList.find(obj => {
    return obj.name === pname
  }))
  projectList.splice(index, 1)
  localStorage.setItem('projectList', JSON.stringify(projectList));
}

submitBtnP.addEventListener('click', () => {
  const projectT = document.getElementById('projectT').value;
  createP(projectT)
});

submitBtnErz.addEventListener('click', () => {
  const projectT = document.getElementById('projectT').value;
  deleteP(projectT)
});

const projectList = JSON.parse((localStorage.getItem('projectList')))
if(projectList.find(obj => {
  return obj.name === 'Default'
}) === undefined){
  createP('Default')
}