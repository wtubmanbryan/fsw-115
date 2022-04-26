
const createLi = (todoList) => {
    const li = document.createElement('li');
    // add user details to `li`
    li.innerHTML = `first Name: ${todoList.first_name} Last Name: ${todoList.last_name} Email: ${todoList.email} <img src = '${todoList.avatar}'>`;
    // if(todoList.isComplete == 'yes')
    // {
    //     li.style.textDecoration = "line-through"
    // }
    return li;
};

const appendToDOM = (todo) => {
    const ul = document.querySelector('ul');
    //iterate over all users
    todo.map(todoList => {
        ul.appendChild(createLi(todoList));
        
    });
};

const fetchUsers = () => {
    axios.get('https://reqres.in/api/users')
        .then(response => {
            const todo = response.data.data;
            // append to DOM
            appendToDOM(todo);
        })
        .catch(error => console.error(error));
};

