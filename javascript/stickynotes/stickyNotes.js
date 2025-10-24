export function setupStickyNotes(buttonId, containerId) {
  let IdNumeric = 0;

  // 🔹 Step 1: Load existing notes from localStorage
  function loadExistingNotes() {
    const noteKeys = Object.keys(localStorage)
      .filter((key) => key.startsWith('note-'))
      .sort((a, b) => parseInt(a.replace('note-', '')) - parseInt(b.replace('note-', '')));

    noteKeys.forEach((key) => {
      const noteContent = localStorage.getItem(key);
      const noteId = parseInt(key.replace('note-', ''));
      IdNumeric = Math.max(IdNumeric, noteId);
      createNote(noteId, noteContent);
    });
  }

  // 🔹 Step 2: Create a new note (used by button and loader)
  function createNote(id, content = '') {
    const stickyNotes = document.querySelector(`#${containerId}`);

    const noteTextArea = document.createElement('textarea');
    noteTextArea.id = `note-${id}`;
    noteTextArea.classList.add('note-box');
    noteTextArea.value = content;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Note';
    deleteBtn.classList.add('deleteNote');

    stickyNotes.append(noteTextArea, deleteBtn);

    // Debounce saving
    function debounce(func, delay) {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
      };
    }

    const saveNote = debounce(() => {
      localStorage.setItem(`note-${id}`, noteTextArea.value);
    }, 500);

    noteTextArea.addEventListener('input', saveNote);

    deleteBtn.addEventListener('click', () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to undo this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then((result) => {
        if (result.isConfirmed) {
          noteTextArea.remove();
          deleteBtn.remove();
          localStorage.removeItem(`note-${id}`);
        }
      });
    });
  }

  // 🔹 Step 3: Add event listener for "Add Note" button
  function setupButton() {
    const stickyNoteBtn = document.querySelector(`#${buttonId}`);
    stickyNoteBtn.addEventListener('click', () => {
      IdNumeric++;
      createNote(IdNumeric);
    });
  }

  // 🔹 Step 4: Initialize everything after DOM load
  document.addEventListener('DOMContentLoaded', () => {
    loadExistingNotes();
    setupButton();
  });
}
