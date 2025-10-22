export function setupStickyNotes(buttonId, containerId) {
  let noteCounter = 0;
  let stickyNoteBtn = document.querySelector(`#${buttonId}`); // this is for addNoteBtn in html

  stickyNoteBtn.addEventListener('click', function() {
    noteCounter++;
    let noteTextArea = document.createElement('textarea');  // creating textarea
    let currentNoteID = noteCounter;
    noteTextArea.id = `note-${currentNoteID}`;
    noteTextArea.classList.add('note-box');

    let deleteBtn = document.createElement('button'); // creating delete button
    deleteBtn.textContent = "Delete Note";
    deleteBtn.classList.add('deleteNote');

    const stickyNotes = document.querySelector(`#${containerId}`);  // this is for stickyNotes id in html
    stickyNotes.append(noteTextArea, deleteBtn);    // appending on html

    deleteBtn.addEventListener('click', () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to undo this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.isConfirmed) {
          noteTextArea.remove(); // deletes the textarea from the html
          deleteBtn.remove();   // delete the bin button
          localStorage.removeItem(`note-${currentNoteID}`);
        }
      });
    });

    // This is for debouncing     
    function debounce(func, delay) {
      let timeoutId;
      return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    }


    const savedNotes = debounce(function() {
      const noteContent = noteTextArea.value;
      localStorage.setItem(`note-${currentNoteID}`, noteContent);
    }, 500)

    noteTextArea.addEventListener('input', savedNotes)

  });
}
