
if(document.images){
	image1 = new Image();
	image1.src = "images/go-cream-over.gif";
	image2 = new Image();
	image2.src = "images/home-cream-over.gif";
	image3 = new Image();
	image3.src = "images/help-cream-over.gif";
	image4 = new Image();
	image4.src = "images/basket-cream-over.gif";
	image5 = new Image();
	image5.src = "images/power-go-over.jpg";
	image6 = new Image();
	image6.src = "images/help-go-over.gif";
	image7 = new Image();
	image7.src = "images/close-window-over.jpg";
	image8 = new Image();
	image8.src = "images/glossary-btt-over.jpg";
}


function isSupported(){
  if(document.all || document.getElementByID){
  	return true;
  }
  return false;
}


function browserCheck(){
	var ns4 = document.layers
	var ie4 = (document.all && !document.getElementByID)
	var ie5 = (document.all && document.getElementByID)
	var ie6 = (document.all && document.getElementByID)
	var ns6 = (!document.all && document.getElementByID)
	var ns7 = (!document.all && document.getElementByID)
	//if (navigator.appName=='Netscape'){supported=false} 
	if (ns4)
	{
	   return false;
	}
	return true
	
}
	
var Open = "";
var Closed = "";


if(document.images){
	Open = new Image()
	Closed = new Image()
	Open.src = "images/minus.jpg"
	Closed.src = "images/plus.jpg"
}


function showhide(what,what2){
   if(browserCheck()){
        var currentdiv, currentimage;
        
        if(document.getElementById){
           currentdiv = document.getElementById(what);
           currentimage = document.getElementById(what2);
        }
        
        if(document.all){
           currentdiv = document.all(what);
           currentimage = document.all(what2);
        }
        
	if (currentdiv.style.display=='none'){
		currentdiv.style.display='';
		currentimage.src=Open.src
	}
	else{
		currentdiv.style.display='none'
		currentimage.src=Closed.src
	}
   }else{
        alert('This link does not work in your browser.\nPlease click on the \'Browse Categories\' link above.');
   }
}



function validateDateFields(fromDate, toDate){
 
   var status = "true"
   
   var frm = fromDate;
   var to = toDate
   
   
   //validate date fields
   // -- start
   
   if(to != ""){
	   toDate = checkDate(to, 1);
	   if(!toDate){
		document.form.to.focus();
		status = "false";
	   }
	   if(frm == ""){
	        alert("If you enter a 'To' date you must also enter a 'From' date.");
	        status = "false";
	   }
   }
   
   if(frm != ""){
	   fromDate = checkDate(frm, 2);
	    if(to == ""){
		alert("If you enter a 'From' date you must also enter a 'To' date.")
		status = "false";
	   }
   }
   
    if ( ( frm == "" ) && ( to == "" ) ) {
        fromDate = "";
        toDate = "";
        status = "true";
    }
    
   if(fromDate>toDate){
   	alert("The 'From' date cannot be greater than the 'To' date.");
   	status = "false";
   }
   
   //alert("fromDate = " + fromDate + " toDate = " + toDate);
   
   if(!fromDate || !toDate){ status="false";}
   if ( ( frm == "" ) && ( to == "" ) ){ status="true";}
   
   if(status == "false")
      return false;
   else
      return true;
   // -- end
}  

function checkDate(s, n){
	//var s=v.a.value;
	var dte

	if (dte = isDate(s, n)) {
		return dte
		//alert("The inputted date value is valid! - " + dte);
	} else {
	    if(err==false){
		alert("Please input date in the format DD/MM/YYYY or YYYY.");
	    	return false;
	    }
    	}
    	
	return false;
}

var err=false;

//---------------------------------------------------------

function PRO_openPopupWindow(theURL, winName, intWidth, intHeight, features, centralise) {
	features = features + ",width=" + intWidth + ",height=" + intHeight;

	if (centralise == "yes") {
		var intAvailWidth = 640, intAvailHeight = 480;
		var intMargin = 10;
		var intTop = intMargin, intLeft = intMargin;
		if (typeof(screen) == "object") {
			intAvailWidth = screen.availWidth;
			intAvailHeight = screen.availHeight;
		}
		intTop = Math.round(intAvailHeight/2 - intHeight/2);
		if (intTop < intMargin) intTop = intMargin;
		intLeft = Math.round(intAvailWidth/2 - intWidth/2);
		if (intLeft < intMargin) intLeft = intMargin;
		features = features + ",left=" + intLeft + ",top=" + intTop;
	}
	
  var newWin = window.open(theURL,winName,features);
  if (newWin.focus) newWin.focus();
  document.MM_returnValue = false;
}

//---------------------------------------------------------

function PRO_displayInMainWindow(theURL, closeThis) {
	var thisWindow = window;

	if (thisWindow.opener) {
		thisWindow.opener.location.href = theURL;
		thisWindow.opener.focus();
		if (closeThis) {
			thisWindow.close();
		}
	} else {
		thisWindow.location.href = theURL;
	}
	document.MM_returnValue = false;
}

//---------------------------------------------------------

