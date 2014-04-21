// JavaScript Document

//--- This holds the object that will handle the requests
var xmlhttp;

//--- This holds information about the browser that is being used by the client
var browserType;

//--- This holds information of the object that will be displaying the required option
var display;

//--- Create New instance of the request object to make queries
try {

	//--- This is the preffered way of creating this object in internet explorer
	xmlhttp = new ActiveXObject("Microsoft.XMLHttp");
	
	//--- Show that the browser is an internet explorer browser
	browserType = "Internet Explorer";				
} catch (e) {

	//--- This is the prefered way of creating this object in all brwsers except internet explorer
	xmlhttp = new XMLHttpRequest();
	
	//--- Show that the browser is a non internet explorer
	browserType = 'Not Internet Explorer';
	
} 

//--- Return an istance of the object if successfully created
if (!xmlhttp) {
	
	//--- Alert the user of the object cant be created
	alert ("Error Creating XMLHttp request object");
	
}

function HandleRequest () {

	//--- Get the element that the output will be displayed at
	$display = document.getElementById (display);
	
	//--- Determine whether the page is ready to be displayed
	if (xmlhttp.readyState != 4 ) {
		
		//--- Show that the page is not ready to be displayed
		$display.innerHTML = "<center>loading....</center>"; //You can replace with Ajax loader image 
	
	} else {
	
		//--- Display the page when ready
		if (xmlhttp.status == 200) {
			
			//--- Show the results
			$display.innerHTML = xmlhttp.responseText;
		
		} else {
			
			//--- Show that the required page was not found
			$display.innerHTML = "Page not found!"
		
		}		
	
	}
}

function GetRequest ($page, $parameters, $target) {
//--- This function initiates a request
	
	//--- Clear buttons for that section
	ClearSectionButtons ()
	
	//--- Clear the section title
	SetSectionTitle ('');

    //--- Stop any page refreshes
    try {
    
        clearInterval(Interval);

    } catch(e) {
    
    }

	//--- Set the object that will display the output returned
	display = $target;
	
	//--- Send the request
	xmlhttp.open('GET', $page, true);

	//--- Set the callback function
	xmlhttp.onreadystatechange = HandleRequest;
	
	//--- Send no parameteres
	xmlhttp.send($parameters);
	
}