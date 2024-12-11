
let todolist = [
    {
        item: 'Buy Milk',
        dueDate: '15/11/2024'
    },

    {
        item: 'Go To Collage',
        dueDate: '15/11/2024'
    },
];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');


    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    if(todoItem!=='' && todoDate!== ''){
    todolist.push({item: todoItem , dueDate : todoDate});
    inputElement.value = "";
    dateElement.value = "";
    }
    
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector(".todo-container");
    let newHtml = '';

    for (let i = 0; i < todolist.length; i++) {
        // let item = todolist[i].iteam;
        // let dueDate= todolist[i].dueDate;
        let {item , dueDate} = todolist[i]; //destructuring of array.
        newHtml += `
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="todolist.splice(${i},1);
        displayItems();
        ">Delete</button>
        
        
        `

    }
    containerElement.innerHTML = newHtml;

}