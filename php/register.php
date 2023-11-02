<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $firstName = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $phoneNumber = $_POST['phoneNumber'];
  $nic = $_POST['nic'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  // Perform any necessary validation or processing here
  // You can insert the data into a database or perform any other actions
  // For simplicity, let's just display the submitted data
  echo "First Name: $firstName<br>";
  echo "Last Name: $lastName<br>";
  echo "Phone Number: $phoneNumber<br>";
  echo "NIC: $nic<br>";
  echo "Email: $email<br>";
  echo "Password $password<br>";

}
?>
