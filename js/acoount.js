// Assuming you have a reference to the "Update Details" button
const updateButton = document.querySelector('#updateButton');

// Add a click event listener to the "Update Details" button
updateButton.addEventListener('click', function() {
  // Assuming you have obtained the updated values from the user
  const newFullName = document.querySelector('#fullName').value;
  const newEmail = document.querySelector('#email').value;
  const newMobile = document.querySelector('#mobile').value;
  const newAddress = document.querySelector('#address').value;

  // Create a FormData object to send the updated details to the PHP script
  const formData = new FormData();
  formData.append('fullName', newFullName);
  formData.append('email', newEmail);
  formData.append('mobile', newMobile);
  formData.append('address', newAddress);

  // Send an AJAX request to the PHP script to update the details
  fetch('update.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    // Handle the response from the PHP script if needed
    // For example, you could display a success message to the user
    console.log('Details updated successfully');
  })
  .catch(error => {
    // Handle any errors that occur during the AJAX request
    console.error('Error updating details:', error);
  });
});
