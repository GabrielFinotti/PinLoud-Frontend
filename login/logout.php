<?php
session_start();
unset($_SESSION["E-mail"]);
session_destroy();
header("Location: index.php");
exit;