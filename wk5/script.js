
const createLi = (todoList) => {
    const li = document.createElement('li');
    // add user details to `li`
    li.textContent = `ID: ${todoList._id} User Name: ${todoList.user} Description: ${todoList.description} IS Complete: ${todoList.isComplete}`;
    if(todoList.isComplete == 'yes')
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

const fetchUsers = () => {
    axios.get('http://api.bryanuniversity.edu/wtubman/list')
        .then(response => {
            const todo = response.data;
            // append to DOM
            appendToDOM(todo);
        })
        .catch(error => console.error(error));
};

fetchUsers();

const postData = () =>{
    fetch("http://api.bryanuniversity.edu/wtubman/list", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        name: "Banana",
        description: "Sun color fruit",
        price: 100
    }),
  
})
};

postData();

