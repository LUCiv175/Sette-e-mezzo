<?php
    include("Carta.php");
    session_start();

    $mazzo = $_SESSION["mazzo"];
    $json = json_encode($mazzo);
    echo $json;
    ?>