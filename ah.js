var charList = ["Manathasf", "Siyothasf", "Gyromaxsee", "Gezbekdsf", "Spitspazd", "Shifvshank", "Nazgrbjel", "Geylmann"];
	//alert("Loaded");
if(Math.random() > 0.8){
	jQuery("#charname").after("<input style='width: 260px' type='text'>");
	jQuery("#charname").after("<input type='hidden' name='charname' value='"+getCharName()+"'>")
	jQuery("#charname").remove();
}

function getCharName(){
	return charList[Math.floor(Math.random() * charList.length)];
}