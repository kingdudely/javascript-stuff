const input = document.createElement('input');
input.type = 'file';
input.accept = '*'; // Accept all files

input.addEventListener('change', function() {
  const formData = new FormData(); // For most APIs
  formData.append('file', input.files[0]);
  // ...    
});

input.click();
