<?php
$database = 'wisevice';
$db_username = 'root';
$db_password = 'root';
$server = 'localhost';
$dsn = "mysql:host=$server;dbname=$database";
try {
	$db = new PDO($dsn, $db_username, $db_password);
}
catch (PDOException $e) {
	$error_message = $e->getMessage();
}


function hashPass($username, $password) {
	$salt = md5($username);
	$password = hash('sha512', $password . $salt);
	return $password;
}


function insertUser($user, $password) {
	global $db;
	global $database;
	$sql = "INSERT INTO signin (user, password) VALUES (:user, :password)";
	try {
		$stmt = $db->prepare($sql);
		$stmt->bindValue(':user', $user);
		$stmt->bindValue(':password', $password);
		$stmt->execute();
		$lastID = $db->lastInsertId();
		$stmt->closeCursor();
		return $lastID;
	}
	catch (PDOException $exc) {
		return '0';
	}
}
function createSession($lastID) {
	session_start();
	$_SESSION['loggedin'] = true;
	$_SESSION['userID'] = $lastID;
}
function checkUser($user, $password) {
	global $db;
	global $database;
	$sql = "SELECT id FROM signin WHERE user = :user AND password = :password";
	try {
		$stmt = $db->prepare($sql);
		$stmt->bindValue(':user', $user);
		$stmt->bindValue(':password', $password);
		$stmt->execute();
		$result = $stmt->fetchAll();
		$stmt->closeCursor();
		return $result;
	}
	catch (PDOException $exc) {
		return '0';
	}
}
function getUsername($userID) {
	global $db;
	global $database;
	$sql = "SELECT user FROM signin WHERE id = :userID";
	try {
		$stmt = $db->prepare($sql);
		$stmt->bindValue(':userID', $userID);
		$stmt->execute();
		$result = $stmt->fetchAll();
		$stmt->closeCursor();
		return $result;
	}
	catch (PDOException $exc) {
		return '0';
	}
}
?>