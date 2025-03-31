let noteTitle = document.querySelector("#noteTitle");
let noteInput = document.querySelector("#noteInput");
let addNoteButton = document.querySelector("#addNote");
let notesList =  document.querySelector("#notesList");

addNoteButton.addEventListener('click',()=>{
let getNoteTitle = noteTitle.value;
let getNoteInput = noteInput.value;
if (getNoteTitle === '' || getNoteInput === '') return;

})