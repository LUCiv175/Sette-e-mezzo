<?php
session_start();
if($_POST["stato"]==0){
    $_SESSION["sconfitte"]++;
}
else{
    $_SESSION["vittorie"]++;
}