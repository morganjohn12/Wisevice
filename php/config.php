<?php
	$link = mysql_connect('localhost', 'root', 'malibu');
	if (!$link) {
    	die('Could not connect: ' . mysql_error());
	}
	echo 'Connected successfully';

	mysql_select_db("wisevice");
?>
