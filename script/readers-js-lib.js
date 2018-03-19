/*
*	Library of JavaScript functions for use on Readers' screens
*	Originally created November 2009 by Craig Anderson
*	If adding new or editing existing functions, please try to
*		1. add comment block for each function/function set (description, author's name + creation date, explanations)
*			1.1 where applicable/necessary, add explanatory inline comments (very helpful for complicated stuff!)
*		2. maintain consistent comment/code format
*		3. avoid duplicating functionality
*/
//====================================================================================//

/*
*	Facilitate execution of multiple functions when page loads
*	Originally created by Simon Willison (simonwillison.net)
*	Function calls take the following form:
*		addLoadEvent( functionName );
*	Function calls to be inserted at the foot of this file
*/

function addLoadEvent( func ) {
	var oldonload = window.onload;
	if ( typeof window.onload != 'function' ) {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

/*
	Compare the URL of the main frame with that of the header frame.
	Reload the header frame if necessary.
*/

function matchFrames() {
	var mainFrameURL;
	var homeHeaderURL = "home-header.htm";
	var generalHeaderURL = "header.htm";
	var homeScreenURL = "welcome-page.htm";
	var headerURL = parent.topFrame.location.href;

	/*
		Attempt to check the URL of the main frame. This will fail if any external
		(web) page is loaded there, due to JavaScript cross domain scripting
		security restrictions. We use a try/catch block to supress any JavaScript
		error messages and assign a value of null
	*/

	try {
		mainFrameURL = parent.mainFrame.location.href;
	}
	catch(e) {
		mainFrameURL = null;
	}
	
	if(!mainFrameURL && headerURL.indexOf(homeHeaderURL)) {
		/*
			Scenario 1: Main frame shows an external page, home header is displayed
			Requirement: Display general header
		*/
		parent.topFrame.location.href = generalHeaderURL;
		parent.topFrame.location.replace(generalHeaderURL);
	}
	else if(mainFrameURL.indexOf(homeScreenURL) == -1 && headerURL.indexOf(homeHeaderURL)) {
		/*
			Scenario 2: Main frame shows an internal page that is not the home screen, home header is displayed
			Requirement: Display the general header
		*/
		parent.topFrame.location.href = generalHeaderURL;
		parent.topFrame.location.replace(generalHeaderURL);
	}
	else {
		/*
			Scenario: Neither of the above apply - main frame must show the home screen
			Requirement: Ensure the home header is dislayed
		*/
		parent.topFrame.location.href = homeHeaderURL;
		parent.topFrame.location.replace(homeHeaderURL);
	}
}

function frameCount() {
	if(parent.window.frames.length > 2) {
		parent.topFrame.location.href = "default.asp";
	}
}

/* comments to follow - function to be tidied */
function resizeBlocks() {
	if(document.getElementById("readers-home")) {
		if(document.getElementById("left-block") && document.getElementById("centre-block") && document.getElementById("right-block")) {
			var lBlock = document.getElementById("left-block");
			var cBlock = document.getElementById("centre-block");
			var rBlock = document.getElementById("right-block");
			var height = Math.max(lBlock.clientHeight, cBlock.clientHeight, rBlock.clientHeight);
			
			setHeight(height, lBlock);
			setHeight(height, cBlock);
			setHeight(height, rBlock);
		}
		else
			alert("Error: expected div element not found.\n(One of the following is missing: left-block; centre-block; right-block)");
	}
	
	if(document.getElementById("reader-registration")) {
		if(document.getElementById("prime-block") && document.getElementById("supp-block")) {
			var lBlock = document.getElementById("prime-block");
			var rBlock = document.getElementById("supp-block");
			var height = Math.max(lBlock.clientHeight, rBlock.clientHeight);
			
			setHeight(height, lBlock);
			setHeight(height, rBlock);
		}
		else
			alert("Error: expected div element not found.\n(One of the following is missing: prime-block; supp-block;)");
	}
}

/* helper function for resizeBlocks() */
function setHeight(theHeight, theDiv) {
		theHeight -= 1; /* for the delightful ie6 */
		theHeight += "px"; /* needed to set the height, as clientHeight is just an integer value */
		theDiv.style.height = theHeight;
}

function setReadersCookie() {
	var cName, value, expireDays, exDate;
	cName = "readers";
	expireDays = -1;
	exDate=new Date();
	
	exDate.setDate(exDate.getDate()+expireDays);
	document.cookie=cName + "=" + escape(value) + ((expireDays==null) ? "" : ";expires="+exDate.toGMTString());
}

/* the following are triggered when the document loads, using addLoadEvent() */
addLoadEvent( resizeBlocks );
addLoadEvent( setReadersCookie );