<?php 
// if "email" variable is filled out, send email
echo "<script> alert('in') </script>";

if (isset($_POST['user_email'])) {

//Email information
$to = "chirag.dudhat@crewscale.com";
$email = $_POST['user_email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

//Send email
mail($to, $subject, $message, "From:" . $email);
//Email response
echo "<script> alert('Thank you for contacting us!') </script>"; }
?>
