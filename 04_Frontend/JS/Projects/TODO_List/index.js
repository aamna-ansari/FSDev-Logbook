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
    if (getInputValue === '') return;
    let newTodo = document.createElement('li');
    newTodo.className = 'flex items-center gap-2 p-3 bg-gray-50 rounded-lg'
    newTodo.innerHTML = `<input 
                  type="checkbox" 
                  class="checkbox w-5 h-5 text-blue-500 rounded focus:ring-blue-500 cursor-pointer"
                >
                <span class="flex-1">
                  ${getInputValue}
                </span>
                <button 
                  class="deleteBtn text-red-500 hover:text-red-700 cursor-pointer"
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

    // addd event listener for check button
    newTodo.querySelector('.checkbox').addEventListener('click', () => {
        newTodo.classList.toggle('line-through');
        newTodo.classList.toggle('text-gray-500');
    // If you want to toggle multiple classes at the same time, using .classList.toggle() won’t work efficiently because it only applies one class at a time. Instead, you should use .classList.add() and .classList.remove() to manage multiple classes.
    });

});