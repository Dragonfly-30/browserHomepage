export function setupStickyNotes(buttonId, containerId) {
  let IdNumeric = 0;

  let noteKeys = Object.keys(localStorage).filter((key) => {
    return key.startsWith('note-');
  })


  if (noteKeys.length > 0) {
    noteKeys.sort((a, b) => {
      const numA = parseInt(a.replace('note-', ''))
      const numB = parseInt(b.replace('note-', ''))

      return numA - numB;
    });


    const lastKey = noteKeys[noteKeys.length - 1];
    IdNumeric = parseInt(lastKey.replace('note-', '')) || 0;

  }


  let stickyNoteBtn = document.querySelector(`#${buttonId}`); // this is for addNoteBtn in html

  stickyNoteBtn.addEventListener('click', function() {
    IdNumeric++;
    // console.log("2nd ", IdNumeric)
    let noteTextArea = document.createElement('textarea');  // creating textarea
    let currentNoteID = IdNumeric;
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

    window.addEventListener("load", (event) => {
      console.log("page is fully loaded");
    });
  });
}
