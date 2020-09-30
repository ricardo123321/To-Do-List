const projectList = [];

const Project = function(name){
    this.name = name;
    todoItems = [];
}

const todoIs = (name, projectN) => {
    this.name = name;
    this.projectN = projectN;
    description = '';
    dueDate = '';
    priority = '';
}

const createP = (name) => {
  if(projectList.length > 0 && name === 'Default'){
  return
  }
const nProject = new Project(name)
console.log(nProject)
projectList.push(nProject)
}

createP('Default')