<?php

$hostname ="localhost";
$bancodedados = "sislogin";
$usuario = "root";
$email = "root";
$senha = "";

$mysqli =new mysqli($hostname, $email, $senha, $bancodedados);
if ($mysqli->connect_errno){
    echo "falha ao conectar:(". $mysqli->connect_errno .")" . $mysqli->connect_errno;
} else
    echo "conectado!";