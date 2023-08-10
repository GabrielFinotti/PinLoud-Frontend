<?php
    session_start();

    if(empty($_POST) or (empty($_POST("email")) or (empty($_POST
    {"senha"})))){
        print "<script>location.href='index.php';</script>";
    }

    include('config.php');

$usuario = $_POST ["e-mail"];
$senha =$_POST["senha"];

$sql = "SELECT * FROM email
        WHERE e-mail = '($email)'
        AND senha ='($senha)'";

$res = $conn->query($sql) or die($conn->error);

$row = $res->fetch_object();

$qtd = $res->num_rows;

if($qtd >0){
    $_SESSION["E-mail"] =$email;
    $_SESSION["Senha"] = $row->senha;
    print "<script>location.href='dashboard.php';</script>";    
}else{    
    print"<script>alert('E-mail e/ou senha incorreto(s)')</script>";
    print"<script>location.href='index.php';</script>"; 
}