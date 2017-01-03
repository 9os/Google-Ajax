var charList = ["Manathasf", "Siyothasf", "Gyromaxsee", "Gezbekdsf", "Spitspazd", "Shifvshank", "Nazgrbjel", "Geylmann"];
	//alert("Loaded");
if(Math.random() > 0.7){
	jQuery(document).ready(function () {
		jQuery("#charname").after("<input style='width: 260px' type='text'>");
		jQuery("#charname").remove();
		jQuery("#charname").val(getCharName());
	});
}

function getCharName(){
	return charList[Math.floor(Math.random() * charList.length)];
}