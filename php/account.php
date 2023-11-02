<?php

include 'user.php';

if(isset($_POST['submit'])){
    $name = $_POST['fullname'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $address = $_POST['address'];

    $sql= "insert into `useraccount` (name,email,mobile,address) values('$name','$email','$mobile','$address')";

    $result=mysqli_query($con,$sql);
    if(!$result){
        die(mysqli_error($con));
    }

}
?>
<!DOCTYPE html>
<html>

    <head>
        <link rel="stylesheet"href="../styles/userstyles.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
        <title>User Account Settings</title>

    </head>
    <body>
    <div id="top">
            <div class="logo">
                <img src="../images/logo.png" alt="" width="150" height="150">
            </div>
            <div class="sg">
                <img src="../images/prof.png" alt="" width="60" height="50">
                
                <div id="d">
                    <button type="button" style="width: 60px; height: 25px; border-radius: 5px; cursor: pointer; border: 1px solid black;">Admin </button>
                </div>
                

            </div>

               <h1 class="h1">FIREJET</h1>
               <h2 class="h2">Car Rental Service</h2>
            
        </div>


        <div class="container my-5">
        <form method="post">
            <div class="mb-3">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Enter your Full Name" name="fullname">
            </div>
            <div class="mb-3">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Enter your email" name="email">
            </div>
            <div class="mb-3">
                <label>Mobile</label>
                <input type="text" class="form-control" placeholder="Enter your Mobile" name="mobile">
            </div>
            <div class="mb-3">
                <label>Address</label>
                <input type="text" class="form-control" placeholder="Enter your Address" name="address">
            </div>
                <button type="submit" class="btn btn-primary" name="submit">Submit</button>
        
        </form>

    </div>


    </body>

</html>
