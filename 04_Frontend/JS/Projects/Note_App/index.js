let noteTitle = document.querySelector("#noteTitle");
let noteInput = document.querySelector("#noteInput");
let addNoteButton = document.querySelector("#addNote");
let notesList = document.querySelector("#notesList");

addNoteButton.addEventListener("click", () => {
  let getNoteTitle = noteTitle.value;
  let getNoteInput = noteInput.value;
  if (getNoteTitle === "" || getNoteInput === "") return;
  let noteRender = document.createElement("div");
  noteRender.className =
    "relative mb-6 bg-white p-6 rounded-lg shadow transition-colors";
  noteRender.innerHTML = `<div class="absolute top-3 right-3 flex gap-2">
    <button class="text-xl text-gray-500 hover:text-blue-700 cursor-pointer">
    <i class="fa-solid fa-pen-to-square"></i>
    </button>
    
    <button class=" text-xl deleteBtn text-gray-500 hover:text-red-700 cursor-pointer"><i class="fa-regular fa-circle-xmark"></i></button>
    </div>
    <h2 class="text-lg font-bold">${getNoteTitle}</h2>
    <p class="text-gray-700 whitespace-pre-wrap">${getNoteInput}</p> `;
  notesList.appendChild(noteRender);
  noteTitle.value = "";
  noteInput.value = "";
});
