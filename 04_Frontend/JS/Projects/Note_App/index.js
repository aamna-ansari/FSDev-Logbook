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
    "relative mb-6 bg-white p-6 rounded-lg shadow transition-colors hover:opacity-100";
  noteRender.innerHTML = `<div class="absolute top-2 right-2 flex gap-2 opacity-0                                                                 transition-opacity">
    <button class="deleteBtn text-red-500 hover:text-red-700 cursor-pointer">❌</button>
    </div>
    <h2 class="text-lg font-bold">${getNoteTitle}</h2>
    <p class="text-gray-700">${getNoteInput}</p> `;
  notesList.appendChild(noteRender);
  noteTitle.value = "";
  noteInput.value = "";
});
