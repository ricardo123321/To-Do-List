import { doma, selectobj, toggleMenus } from './dom';

if (localStorage.getItem('projectList') === '' || localStorage.getItem('projectList') === null) {
  localStorage.setItem('projectList', '[]');
}


const newProject = (name) => {
  this.name = name;
  this.todoItems = [];
}

const TodoIs = (name, projectN, description, dueDate, priority) => {
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
  const projectList = JSON.parse((localStorage.getItem('projectList')));
  const name = document.getElementById('name').value;
  const projectN = document.getElementById('projectN').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;
  const projectE = projectList.find(obj => obj.name === projectN);
  const toDo = new TodoIs(name, projectN, description, dueDate, priority);
  projectE.todoItems.push(toDo);
  localStorage.setItem('projectList', JSON.stringify(projectList));
});

const createP = (name) => {
  const projectList = JSON.parse((localStorage.getItem('projectList')));
  if (projectList.length > 0 && name === 'Default') {
    return;
  }
  const nProject = new newProject(name);
  projectList.push(nProject);
  localStorage.setItem('projectList', JSON.stringify(projectList));
};

const deleteP = (pname) => {
  const projectList = JSON.parse((localStorage.getItem('projectList')));
  if (projectList.length > 0 && pname === 'Default') {
    return;
  }
  const index = projectList.indexOf(projectList.find(obj => obj.name === pname));
  projectList.splice(index, 1);
  localStorage.setItem('projectList', JSON.stringify(projectList));
};

submitBtnP.addEventListener('click', () => {
  const projectT = document.getElementById('projectT').value;
  createP(projectT);
});

submitBtnErz.addEventListener('click', () => {
  const projectT = document.getElementById('projectT').value;
  deleteP(projectT);
});

createP('Default');
doma();
selectobj();

const toggleDoma = document.getElementById('allProjects');
const toggleCreateTD = document.getElementById('todoForm');
const toggleCreateP = document.getElementById('projectForm');
const toggleDeleteP = document.getElementById('projectDeleteForm');

const showMyProjects = document.getElementById('myProjects');
const showCreateP = document.getElementById('createP');
const showCreateTD = document.getElementById('createTD');
const showDeleteP = document.getElementById('deleteP');

showCreateP.addEventListener('click', () => {
  toggleMenus(toggleCreateP, toggleDoma, toggleCreateTD, toggleDeleteP);
});

showCreateTD.addEventListener('click', () => {
  toggleMenus(toggleCreateTD, toggleCreateP, toggleDoma, toggleDeleteP);
});

showDeleteP.addEventListener('click', () => {
  toggleMenus(toggleDeleteP, toggleCreateTD, toggleCreateP, toggleDoma);
});

showMyProjects.addEventListener('click', () => {
  toggleMenus(toggleDoma, toggleCreateTD, toggleCreateP, toggleDeleteP);
});