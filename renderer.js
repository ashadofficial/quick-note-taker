const deleteBtn = document.getElementById('deleteBtn');

deleteBtn.addEventListener('click', async () => {
  await window.electronAPI.deleteNote();
  textarea.value = '';
  alert('All notes deleted!');
});