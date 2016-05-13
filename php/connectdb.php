<?php
    $username = "d3_demo_user"; 
    $password = "iweb";   
    $host = "localhost";
    $database="d3_demo";
    
    $server = mysql_connect($host, $username, $password);
    $connection = mysql_select_db($database, $server);
?>