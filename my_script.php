<?PHP
var_dump($argv);
//echo $argv[1];
$scriptUri = "http://".$_SERVER["HTTP_HOST"].$_SERVER['PHP_SELF'];
echo $scriptUri;
?>
