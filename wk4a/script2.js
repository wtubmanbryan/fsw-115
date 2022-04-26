
const createLi = (todoList) => {
    const li = document.createElement('li');
    // add user details to `li`
    li.innerHTML = `Planet Name: ${todoList.name} Rotation Period: ${todoList.rotation_period} Orbital Period: ${todoList.orbital_period} Diameter ${todoList.diameter}`;
    if(todoList.rotation_period == '24')
    {
        li.style.textDecoration = "line-through"
    }
    return li;
};

const appendToDOM = (todo) => {
    const ul = document.querySelector('ul');
    //iterate over all users
    todo.map(todoList => {
        ul.appendChild(createLi(todoList));
        
    });
};

const fetchPlanets = () => {
    axios.get('https://swapi.dev/api/planets/')
        .then(response => {
            const todo = response.data.results;
            // append to DOM
            appendToDOM(todo);
        })
        .catch(error => console.error(error));
};

