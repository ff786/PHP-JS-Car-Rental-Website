function calculateDuration() {
    // Get the pickup and return date values
    const pickupDate = new Date(document.getElementById('Pickup').value);
    const returnDate = new Date(document.getElementById('Return').value);
  
    // Check if return date is before pickup date
    if (returnDate < pickupDate) {
      alert('Error: Return date cannot be before pickup date.');
      return;
    }
  
    // Calculate the duration in milliseconds
    const durationMs = returnDate - pickupDate;
  
    // Convert the duration to days
    const durationDays = Math.ceil(durationMs / (1000 * 60 * 60 * 24));
  
    // Update the output element with the calculated duration
    const outputElement = document.querySelector('#durationOutput');
    outputElement.textContent = `${durationDays} day(s)`;

``}
  