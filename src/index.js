if (localStorage.getItem('projectList') === "" || localStorage.getItem('projectList') === null) {
  localStorage.setItem('projectList', '[]');
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

createP('Default');

const projectList = JSON.parse((localStorage.getItem('projectList')))

const showProjects = document.getElementById('myProjects');
showProjects.addEventListener('click', () => {
  const fragment = document.createDocumentFragment();
  Object.values(projectList).forEach(projectElement => {
    const projectContainer = document.createElement('div');
    projectContainer.className = 'projectContainer';
    Object.values(projectElement).forEach(element => {
      const todoDiv = document.createElement('div');
      const projectN = document.createElement('p');
      projectN.textContent = element.projectN.value;
      const description = document.createElement('p');
      description.textContent = element.description.value;
      const dueDate = document.createElement('p');
      dueDate.textContent = element.dueDate.value;
      const priority = document.createElement('p');
      priority.textContent = element.priority.value;
      todoDiv.appendChild(projectN);
      todoDiv.appendChild(description);
      todoDiv.appendChild(dueDate);
      todoDiv.appendChild(priority);
      projectContainer.appendChild(todoDiv);
      fragment.appendChild(projectContainer);
    });
  });
  const pageContent = document.getElementById('pageContent');
  pageContent.appendChild(fragment);
});