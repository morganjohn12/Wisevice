<?php
session_start();
include('functions.php');
$username = getUsername($_SESSION['userID']);
if (!isset($_SESSION['loggedin'])) {
	header("Location: index.php");
}
?>
<html>

  <head>
    <h1> YOU ARE AT A GAY PAGE</h1>
  </head>

  <body>
  <h1>Welcome: <?php echo $username[0][0];?></h1>
    You have signed into our uber doober secure server!<br/>
    We are excited to have someone with a I.Q. higher then a bannana!<br/>
    Follow these uber handy links to other pages.<br/>
    <a href="http://www.byui.edu">BYU-I..Do</a><br/>
    <a href="http://www.youtube.com">YOUUUUU-TUUUUBE</a><br/>
    <a href="http://www.facebook.com">Facebook</a><br/>
    <a href="index.php?action=signout">Sign Out</a>
  </body>

</html>
