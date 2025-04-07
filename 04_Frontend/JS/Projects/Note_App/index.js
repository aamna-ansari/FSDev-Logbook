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
    <button class="deleteBtn text-gray-500 hover:text-blue-700 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg></button>

            <button class="deleteBtn text-gray-500 hover:text-red-700 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg></button>
    </div>
    <h2 class="text-lg font-bold">${getNoteTitle}</h2>
    <p class="text-gray-700">${getNoteInput}</p> `;
  notesList.appendChild(noteRender);
  noteTitle.value = "";
  noteInput.value = "";
});
