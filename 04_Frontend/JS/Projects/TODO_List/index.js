let todoInput = document.querySelector('#todoInput');
let todoList = document.querySelector('#todoList');
let todoButton = document.querySelector('#todoButton');
// Step 1: click on button to add todo by using event listener
// Step 2: Get the value of the input field
// step 3: add the value of the input field to the li
// step 4: clear the input field
// step 5: create a delete button
// step 6: create a check button
// step 7: create a function to delete and check the todo

todoButton.addEventListener ('click', ()=>{
    let getInputValue = todoInput.value;
    let newTodo = document.createElement('li');
    newTodo.className = 'flex items-center gap-2 p-3 bg-gray-50 rounded-lg'
    newTodo.innerHTML = `<input 
                  type="checkbox" 
                  class="w-5 h-5 text-blue-500 rounded focus:ring-blue-500 cursor-pointer"
                >
                <span class="flex-1">
                  ${getInputValue}
                </span>
                <button 
                  class="text-red-500 hover:text-red-700 cursor-pointer"
                >
                  ❌
                </button>`
    todoList.appendChild(newTodo);
    // Clear input field after adding todo
    todoInput.value = '';

    // Add event listener for delete button
    newTodo.querySelector('.deleteBtn').addEventListener('click', () => {
        newTodo.remove();
    });
})



let getInputValue = todoInput.value;