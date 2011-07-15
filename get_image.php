<?php
if ((isset($_GET['url']))) {
    $url = $_GET['url'];
    $file_format = pathinfo($url, PATHINFO_EXTENSION);
	try
	{	
        $img = file_get_contents($url);

        header("Content-Type: image/$file_format");
        header("Content-disposition: filename=image.$file_format");

        echo $img;
    }
	
	catch(Exception $e)
	{
		echo $e->getMessage();
	}
}

else die('Illegal request');
?>