if(isset( $_POST['firstname']))
$firstname = $_POST['firstname'];
if(isset( $_POST['lastname']))
$lastname = $_POST['lastname'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];
if(isset( $_POST['message']))
$message = $_POST['message'];

$content="From: $firstname \n $firstname \n Email: $email \n Message: $message";
$recipient = "mbronfin789@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "Email sent!";