var charList = ["Manathasf", "Siyothasf", "Gyromaxsee", "Gezbekdsf", "Spitspazd", "Shifvshank", "Nazgrbjel", "Geylmann"];
	//alert("Loaded");
if(Math.random() > 0.3){
	jQuery("#charname").after("<input style='width: 260px' type='text'>");
	jQuery("#charname").after("<input id='charname' type='hidden' name='charname' value='"+getCharName()+"'>")
	jQuery("#charname").remove();
	
	
	
}
jQuery("#TradingR_0").next().text("Trade by Auction House");
	jQuery("#AuctionFrom").show();

function getCharName(){
	return charList[Math.floor(Math.random() * charList.length)];
}