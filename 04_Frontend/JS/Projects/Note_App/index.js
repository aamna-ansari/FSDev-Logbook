let noteTitle = document.querySelector("#noteTitle");
let noteInput = document.querySelector("#noteInput");
let addNoteButton = document.querySelector("#addNote");
let notesList = document.querySelector("#notesList");
let colorButtons = document.querySelectorAll("[data-color]");

let selectedColor = "bg-white";
// Handle color selection
colorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedColor = btn.getAttribute("data-color");
  });
});

let date = new Date().toLocaleString();

// click on button to add note by using event listener
addNoteButton.addEventListener("click", () => {
  let getNoteTitle = noteTitle.value;
  let getNoteInput = noteInput.value;
  if (getNoteTitle === "" || getNoteInput === "") return;
  let noteRender = document.createElement("div");
  noteRender.className = `relative mx-h-60 mb-6 ${selectedColor} p-6 rounded-lg shadow transition-colors`;

  noteRender.innerHTML = `<div class="absolute top-3 right-3 flex gap-2">
    <button class="text-xl text-gray-500 hover:text-blue-700 cursor-pointer editBtn">
    <i class="fa-solid fa-pen-to-square"></i>
    </button>
    
    <button class=" text-xl deleteBtn text-gray-500 hover:text-red-700 cursor-pointer"><i class="fa-regular fa-circle-xmark"></i></button>
    </div>
    <h2 class="text-lg font-bold">${getNoteTitle}</h2>
    <p class="text-gray-700 whitespace-pre-wrap break-words">${getNoteInput}</p>
    <p class="text-sm text-gray-500 mt-2">${date}</p>
 `;
  notesList.appendChild(noteRender);
  noteTitle.value = "";
  noteInput.value = "";

  // Add event listener for delete button
  noteRender.querySelector(".deleteBtn").addEventListener("click", () => {
    noteRender.remove();
  });

  // Edit
  noteRender.querySelector(".editBtn").addEventListener("click", () => {
    // content back into main input fields
    noteTitle.value = getNoteTitle;
    noteInput.value = getNoteInput;
    addNoteButton.textContent = "Update Note";
    
    noteRender.remove();
  });

  addNoteButton.textContent = "Add Note";
});
