function validateReservation(event) {
    event.preventDefault();
  
    const pickup = document.getElementById('pickup');
    const dropoff = document.getElementById('dropoff');
    const serviceType = document.getElementById('serviceType');
    const passengers = document.getElementById('passengers');
    const vehicleType = document.getElementById('vehicleType');
    const pickupDate = document.getElementById('pickupDate');
    const pickupTime = document.getElementById('pickupTime');
    const returnDate = document.getElementById('returnDate');
    const dropoffTime = document.getElementById('dropoffTime');
    const address = document.getElementById('address');
  
    if (
      pickup.value === '0' ||
      dropoff.value === '0' ||
      serviceType.value === '0' ||
      passengers.value === '0' ||
      vehicleType.value === '0' ||
      pickupDate.value === '' ||
      pickupTime.value === '' ||
      returnDate.value === '' ||
      dropoffTime.value === '' ||
      address.value.trim() === ''
    ) {
      alert('Please fill in all the required fields.');
      return;
    }

    document.getElementById('reservationForm').submit();
}
  
function resetForm()
{
    document.getElementById('reservationForm').reset();
}
  