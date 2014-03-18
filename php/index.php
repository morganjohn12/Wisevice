<?php
include_once 'includes/db_connect.php';
include_once 'includes/functions.php';
 
sec_session_start();
 
if (login_check($mysqli) == true) {
    $logged = 'in';
} else {
    $logged = 'out';
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="/favicon.png">
    
    <script type="text/JavaScript" src="assets/js/sha512.js"></script> 
    <script type="text/JavaScript" src="assets/js/forms.js"></script> 
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script type="text/JavaScript" src="assets/js/validate.js"></script>

    <link href="assets/css/bootstrap.css" rel="stylesheet">
    <link href="assets/css/slider.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/main.css" />

    <title>Wisevice</title>


  </head>
  



  <body>   
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand"href="wv.html"><img src="assets/images/wisevice.png"/></a>
        </div>
        <div class="collapse navbar-collapse">
         

      <div class="move_menu">
            <ul class="nav navbar-nav">
              <li>
                <?php
                  if (isset($_GET['error'])) {
                      echo '<p class="error">Error Logging In!</p>';
                  }
                  ?> 
                  

                  <form id="login" action="includes/process_login.php" method="post" name="login_form">                      
                      <h3 class="h3"> Email: </h3>
                      <input class="input" type="text" name="email" />
                      
                      <h3 class="h3">Password:</h3> 
                      <input class="input" type="password" 
                         name="password" 
                         id="password"/> <br />
                      <p class = "submit"> <input  
                             type="submit" 
                             value="Login" 
                             onclick="formhash(this.form, this.form.password);" /> </p>
                  </form>
                  
                </li>
            
            </ul>
          </div>
        </div><!--/.nav-collapse -->
      </div>
    </div>
<img class="home_image" src="assets/images/home_blur.jpg">

    


 <div class="container marketing">
    <div class="register">
          <h2 class="h2">Create a Free Account</h2>
          <h3 class="register_h3">It's quick and easy!</h3> <br />

           <form method="post" 
                 name="registration_form"
                 action="register.php">

          <input type='text' value="First name" name='name' id='name' class="register_firstname_input"
                 onblur="if (this.value == '') {this.value = 'First name';}" 
                 onfocus="if (this.value == 'First name') {this.value = '';}" />

          <input type='text' value="Last name" name='name' id='name' class="register_lastname_input"
                 onblur="if (this.value == '') {this.value = 'Last name';}" 
                 onfocus="if (this.value == 'Last name') {this.value = '';}" />
                 <br /><br />
          
          <input type="text" name="email" id="email" value="Your email address" class="register_input"
            onblur="if (this.value == '') {this.value = 'Your email address';}" onfocus="if (this.value == 'Your email address') {this.value = '';}" />
            <br /><br />

            <input type='text' value="Username" name='username' id='username' class="register_input"
                    onblur="if (this.value == '') {this.value = 'Username';}" onfocus="if (this.value == 'Username') {this.value = '';}" />
            <br> <br />
      
            <h3 class="register_h3">Password:</h3>
            <input type="password"
                             name="password" 
                             id="password"
                             class="register_input" />
                             <br><br />
            <h3 class="register_h3">Confirm Password:</h3>
            <input type="password" 
                                     name="confirmpwd" 
                                     id="confirmpwd" 
                                     class="register_input"/>
                                     <br><br />
            <input type="button" 
                   value="Register" 
                   class="register_submit"
                   onclick="return regformhash(this.form,
                                   this.form.username,
                                   this.form.email,
                                   this.form.password,
                                   this.form.confirmpwd);" /> 
        </form>
        <br />
        <div class="orBox"></div>
        <h3 class="register_h3">or</h3>
        <a href="facebook/examples/with_js_sdk.php"> <img style=" margin-right: 25px;" src="assets/images/facebook-login.png"/></a>
        <a href="#"> <img src="assets/images/linkedin-login.png"/> </a>

          <h2 class="vidh2">DISCOVER, PREPARE FOR, AND LAND YOUR DREAM JOB.</h2>
          <iframe class = "home_video" src="//player.vimeo.com/video/40407169?title=0&amp;byline=0&amp;portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  </div>



      <!-- FOOTER -->
      <footer>
        <hr />
        <p class="pull-right"><a href="#">Back to top</a></p>
        <p>&copy; 2014 Wisevice &middot; 
          <a href="#">Privacy</a> &middot;
          <a href="#">Terms</a> &middot;
          <a href="#">Site map</a> &middot;
        </p>
      </footer>

    </div>


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="bootstrap.min.js"></script>
    <script src="holder.js"></script>
  </body>
</html>