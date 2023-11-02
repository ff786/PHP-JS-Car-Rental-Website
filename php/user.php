<?php

$con=new mysqli('localhost', 'root', '', 'useraccount');

if(!$con){
    die(mysqli_error($con));
}


?>