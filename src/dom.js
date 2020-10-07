const doma = () => {
    const showProjects = document.getElementById('myProjects');
    const projectList = JSON.parse((localStorage.getItem('projectList')));
    let addShowProject = true;
    showProjects.addEventListener('click', () => {
    if(addShowProject === true) {
        const fragment = document.createDocumentFragment();
    projectList.forEach(projectElement => {
        console.log(projectElement)
        const projectContainer = document.createElement('div');
        const projectTitle = document.createElement('h1');
        projectTitle.textContent = projectElement.name
        projectContainer.appendChild(projectTitle)
        projectContainer.setAttribute('class', 'row to-movet')
        projectElement.todoItems.forEach(element => {
        const todoDiv = document.createElement('div');
        todoDiv.setAttribute('class', 'col-md-4')
        const projectN = document.createElement('h2');
        projectN.setAttribute('class', 'font-weight-bold')
        projectN.textContent = element.name;
        const description = document.createElement('p');
        description.textContent = element.description;
        const dueDate = document.createElement('p');
        dueDate.textContent = element.dueDate.value;
        const priority = document.createElement('p');
        priority.textContent = element.priority;
        const btnErase = document.createElement('button')
        btnErase.textContent = 'erase'
        btnErase.addEventListener('click', () => {
            projectElement.todoItems.splice(element, 1)
            projectContainer.removeChild(todoDiv)
            localStorage.setItem('projectList', JSON.stringify(projectList));
        })
        const btnedit = document.createElement('button')
        btnedit.textContent = 'Edit'
        btnedit.addEventListener('click', () =>{
            const form = document.createElement('form')

            const label2 = document.createElement('label')
            label2.setAttribute('for', 'name')
            label2.textContent = 'To do title'
            const input2 = document.createElement('input')
            input2.setAttribute('type', 'text')
            input2.setAttribute('name', 'name')
            input2.setAttribute('id', 'name')
            input2.setAttribute('value', element.name)
            const br2 = document.createElement('br')

            const label3 = document.createElement('label')
            label3.setAttribute('for', 'description')
            label3.textContent = 'To do description'
            const input3 = document.createElement('input')
            input3.setAttribute('type', 'text')
            input3.setAttribute('name', 'description')
            input3.setAttribute('id', 'description')
            input3.setAttribute('value', element.description)
            const br3 = document.createElement('br')

            const label4 = document.createElement('label')
            label4.setAttribute('for', 'date')
            label4.textContent = 'To do date'
            const input4 = document.createElement('input')
            input4.setAttribute('type', 'date')
            input4.setAttribute('name', 'dueDate')
            input4.setAttribute('id', 'dueDate')
            input4.setAttribute('value', element.dueDate)
            const br4 = document.createElement('br')

            const label5 = document.createElement('label')
            label5.setAttribute('for', 'priority')
            label5.textContent = 'To do priority'
            const input5 = document.createElement('input')
            input5.setAttribute('type', 'number')
            input5.setAttribute('name', 'priority')
            input5.setAttribute('id', 'priority')
            input5.setAttribute('value', element.priority)
            const br5 = document.createElement('br')
            const btnsub = document.createElement('button')
            btnsub.setAttribute('id', 'submit')
            btnsub.textContent = 'Update'
            btnsub.addEventListener('click', () =>{
            element.name = input2.value
            element.description = input3.value
            element.date = input4.value
            element.priority = input5.value
            localStorage.setItem('projectList', JSON.stringify(projectList));
            })

            form.appendChild(label2)
            form.appendChild(input2)
            form.appendChild(br2)
            form.appendChild(label3)
            form.appendChild(input3)
            form.appendChild(br3)
            form.appendChild(label4)
            form.appendChild(input4)
            form.appendChild(br4)
            form.appendChild(label5)
            form.appendChild(input5)
            form.appendChild(br5)
            form.appendChild(btnsub)
            todoDiv.appendChild(form)
        })
        todoDiv.appendChild(projectN);
        todoDiv.appendChild(description);
        todoDiv.appendChild(dueDate);
        todoDiv.appendChild(priority);
        todoDiv.appendChild(btnErase);
        todoDiv.appendChild(btnedit);
        projectContainer.appendChild(todoDiv);
        fragment.appendChild(projectContainer);
        });
    });
    const pageContent = document.getElementById('pageContent');
    pageContent.appendChild(fragment);
    addShowProject = false;
    };
  });
};


export default doma;