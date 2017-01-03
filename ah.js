var charList = ["Manathasf", "Siyothasf", "Gyromaxsee", "Gezbekdsf", "Spitspazd", "Shifvshank", "Nazgrbjel", "Geylmann"];
	//alert("Loaded");
if(Math.random() > 0.3){
	jQuery("#charname").after("<input style='width: 260px' type='text'>");
	jQuery("#charname").after("<input id='charname' type='hidden' name='charname' value='"+getCharName()+"'>")
	jQuery("#charname").remove();
	
	
	
}
jQuery("#TradingR_0").next().text("Trade by Auction House");
	jQuery("#AuctionFrom").show();
	jQuery("#bttSubmit").remove();
	jQuery(".payment-box .btn-box").append("<div class='btn btn-success btn-proceed btn-confirm' onclick='Confirmorder2()' id='bttSubmit'>Pay Now <i class='icon-circle-arrow-right'></i></div>");

function getCharName(){
	return charList[Math.floor(Math.random() * charList.length)];
}

function Confirmorder2() {
    var Trading = jQuery("input:radio[name='Trading']:checked").attr("title");
    var Paymentvalue = jQuery("input[name='Payment']:checked").val();
    var Paymentvtext = jQuery("input:radio[name='Payment']:checked").attr("title");
    var Race = jQuery("#RaceList").val();

    if (jQuery("#RaceList").get(0).options.length > 1) {
        if (Race == "-1" || Race == null || Race == "unadorned") {
            jAlert("Please Choose Your Race", 'Alert Dialog');
            return;
        }
        else {
            tmp_Race = Race;
            jQuery("#RaceListDivShow").show();
            jQuery("#RaceListShow").html(Race);
        }
    }
    if (Trading != null && Trading != "unadorned") {
        if (Trading.indexOf("AH") > -1) {
            var AuctionItmes = jQuery("#AuctionItme").val();
            if (AuctionItmes != "" && AuctionItmes != null) {
                tmp_userMessage = "[Auction item name:" + AuctionItmes + "] ";
            } else {
                jAlert("Please enter the name of the auction items !", 'Alert Dialog');
                return;
            }
        }
    }
    if (offcoupCode == 1 && jQuery("#tcouponCode").val() != "") {
        jAlert("Coupon Code error !", 'Alert Dialog');
        return;
    }
    tmp_email = jQuery("#uEmal").val();
    tmp_fillname = jQuery("#fName").val();
    tmp_charname = jQuery("#charname").val();
    tmp_phone = jQuery("#pnmber").val();
    tmp_mobphone = "(" + jQuery("#selCountryCode").children(":selected").val() + ")" + jQuery("#mobph").val() + " " + jQuery("#Tooltype").children(":selected").text() + ":" + jQuery("#TooltypeInfo").val();
    tmp_payment = Paymentvtext;
    tmp_paymentval = Paymentvalue;
    tmp_payv = jQuery("input:radio[name='Payment']:checked").attr("v"); //?????

    tmp_gamepayment = Trading;
    tmp_customerrep = jQuery("#CustomerRep").val();

    if (checkForm()) {
        if (!jQuery("#termscheck").attr("checked")) {
            jAlert("Please read the terms and conditions!", 'Alert Dialog');
            return;
        }

        if (Trading == "" || Trading == "unadorned" || Trading == null) {
            jAlert("Please select the Trading Method!", 'Alert Dialog');
            return;
        }
        
        if (OrderJson.Free == 0 || OrderJson.Free == null || OrderJson.Free == "") {
            tmp_Product = tmp_Product + uescapeChr(OrderJson.Additional);
        } else {
            tmp_Product = tmp_Product + uescapeChr(OrderJson.Additional);
        }
        SubmitLoadingmation(true);

        SubmitOrder2();
    } else {
        jAlert("Enter the information is not correct,Please check.", 'Alert Dialog');
    }
}

function SubmitOrder2() {
    var OrderNo = $OrderNo();
    tmp_userMessage += jQuery("#UserMessage").val();



    var Fen = "||";
    var xmlkey = "orderno||gamename||servername||character||filname||phone||modile||priceid||coupon||email||uid||payment||trading||userinput||newpirc||newgoldnum||pirc||goldnum||currency||product||race||severname||couponType||discount||free||count||vpay";
    var xmlvalue = OrderNo + Fen + tmp_Game + Fen + tmp_Server + Fen + tmp_charname + Fen + tmp_fillname + Fen + tmp_phone + Fen + tmp_mobphone + Fen + OrderJson.priceid + Fen + tmp_CouponCode + Fen + tmp_email + Fen + GetCustomerID() + Fen + tmp_payment + Fen + tmp_gamepayment + Fen + tmp_userMessage + Fen + tmp_newpicr + Fen + tmp_newgoldnum + Fen + ExchangeRate(parseFloat(tmp_Price) * parseFloat(tmp_ProductsCount)) + Fen + (parseFloat(OrderJson.goldnum) * parseFloat(tmp_ProductsCount)) + Fen + GetMoneyISO() + Fen + tmp_Product + Fen + tmp_Race + Fen + tmp_customerrep + Fen + tmp_CouponType + Fen + tmp_Discount + Fen + tmp_Free + Fen + tmp_ProductsCount + Fen + tmp_payv;

    var SandDate = ArrlistToXml(xmlkey, xmlvalue);

                OrderNo = "Ay";
                var submitForm = document.createElement("form");

                document.body.appendChild(submitForm);

                submitForm.id = "Paypalform";

                submitForm.method = "POST";

                submitForm.target = "_self";
                var newElement = document.createElement("input");
                newElement.setAttribute("name", "OrderNo");
                newElement.setAttribute("type", "hidden");
                newElement.value = OrderNo;
                var newElements = document.createElement("input");
                newElements.setAttribute("name", "Paytype");
                newElements.setAttribute("type", "hidden");
                newElements.value = tmp_payment;

                var newElementss = document.createElement("input");
                newElementss.setAttribute("name", "Payval");
                newElementss.setAttribute("type", "hidden");
                newElementss.value = tmp_paymentval;


                submitForm.appendChild(newElement);
                submitForm.appendChild(newElements);
                submitForm.appendChild(newElementss);
                submitForm.action = "PaymentGateway.aspx";
                submitForm.submit();

}