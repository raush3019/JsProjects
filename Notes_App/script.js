const noteParentDiv = document.querySelector(".main > .notes");
const createNoteBtn = document.querySelector(".ri-edit-box-fill");

const notesArr = JSON.parse(localStorage.getItem("notes"));

if (notesArr) {
  notesArr.forEach((det) => {
    createNoteDiv(det);
  });
}

function createNoteDiv(text = "") {
  const newNoteDiv = document.createElement("div");

  newNoteDiv.className = "note";
  newNoteDiv.innerHTML = `
                                <div class="links">
                                    <i class="ri-edit-box-line"></i>
                                    <i class="ri-delete-bin-line"></i>
                                </div>
                                <div class="hideDiv ${
                                  text ? "" : "hidden"
                                }"></div>
                                <textarea class="textArea ${
                                  text ? "hidden" : ""
                                }" name="" id=""></textarea>
                            `;

  const editNote = newNoteDiv.querySelector(".ri-edit-box-line");
  const noteTextarea = newNoteDiv.querySelector(".note > textarea");
  const deleteNote = newNoteDiv.querySelector(".ri-delete-bin-line");
  const hideDiv = newNoteDiv.querySelector(".note .hideDiv");

  noteTextarea.value = text;
  hideDiv.innerHTML = marked(text);

  editNote.addEventListener("click", function (e) {
    hideDiv.classList.toggle("hidden");
    noteTextarea.classList.toggle("hidden");
  });
  deleteNote.addEventListener("click", function () {
    newNoteDiv.remove();
    addToLocalStorage();
  });
  noteTextarea.addEventListener("input", function (e) {
    const { value } = e.target;
    hideDiv.innerHTML = marked(value);
    addToLocalStorage(value);
  });

  noteParentDiv.appendChild(newNoteDiv);
}

createNoteBtn.addEventListener("click", function () {
  createNoteDiv();
});

function addToLocalStorage() {
  const notesText = document.querySelectorAll("textArea");

  const notesArr = [];

  notesText.forEach((det) => {
    notesArr.push(det.value);
  });
  localStorage.setItem("notes", JSON.stringify(notesArr));
}
