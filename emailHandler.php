<?php
if(isset($_GET["template"]))
{
    echo file_get_contents("Emails/" . $_GET["template"] . ".html");
}
else
{
    $htmlHeader = 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers = "From: prutchis2@elvis.rowan.edu\r\n";
    $subject = "Phish";
    $metaFile = fopen("Emails/" . $_POST["template"] . ".meta", "r");
    if($metaFile)
    {
        $headers = "From: " . trim(fgets($metaFile)) . "\r\n";
        $subject = trim(fgets($metaFile));
        fclose($metaFile);
    }

    $ret = mail($_POST["email"], $subject, file_get_contents("Emails/" . $_POST["template"] . ".html"),  $htmlHeader . $headers);
}
?>