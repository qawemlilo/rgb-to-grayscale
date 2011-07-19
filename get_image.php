<?php
if (isset($_GET['url']) && !empty($_GET['url'])) {
    $url = $_GET['url'];
    $file_format = pathinfo($url, PATHINFO_EXTENSION);
	try
	{
        ob_start();	
	    header("Content-Type: image/$file_format");
		header("Content-disposition: filename=image.$file_format");
		
        $img = @file_get_contents($url);
		
		if($img) 
		    echo $img;
			
        ob_end_flush();
        exit();
    }
	
	catch(Exception $e)
	{
		echo $e->getMessage();
	}
}

else die('Unknown request');
?>