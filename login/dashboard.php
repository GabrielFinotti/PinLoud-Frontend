<?php
session_start();
if(empty($_SESSION)){
    print"<script>location.href='index.php';</script>";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sitema de Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.
    3.1/dist/css/bootstrap.min.css" rel="stylesheet"
     integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+
     VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" 
     crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-light bg-light">
        <div class="containerfluid">
            <a class="navbar-brand">Sistema X</a>
            <?php
                print "Óla, ". $_SESSION["email"];
                print "<a href='logout.php' class='btn btn-danger'>Sair</a>";
            ?>
           </div>
    </nav>
</body>
</html>     