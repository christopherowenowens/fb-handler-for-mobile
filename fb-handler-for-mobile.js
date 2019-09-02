// FB Protocol Handler for Mobile
// Open FB Links in app instead of mobile browser
// Christopher "Owen" Owens

// This took me 2 hours to build, due to lack of documentation
// on FB protocol (page not profile) and building the custom logic to handle
// deduplication (clicking "back" after fb handler redirects)
// I tried to iterate a variable at first but that doesn't work.
// Took only a few mins to come up with checking Timestamp as unique.
// Because the start and end take place in different seconds, compare
// didn't work so I just used a 3 second window compare on the timestamps.

// HTML Usage:
//  <a onclick="fbHandler()">

// Be sure to set both the canonical URI and your fb page ID below.


// CookeGetter: https://.github.com/wpsmith
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

// Logic flow
function fbHandler() {

	// First, we get the current Epoch to the second (not MS):
	var firstTimeStamp = Math.round((new Date()).getTime() /1000);
	console.log(firstTimeStamp);

	// Set a cookie
	document.cookie = "ts="+firstTimeStamp;


	// Next, we use a timeout to check if FB is installed or not.
	setTimeout(function () {

		// TODO: if not caught - will fire AFTER the 'try' logic below.
		// ts must match for this to work. Get cookie:
		var firstTimeStamp = getCookie("ts");
		var secondTimeStamp = Math.round((new Date()).getTime() /1000 );

	console.log(firstTimeStamp);
	console.log(secondTimeStamp);
		
		if (secondTimeStamp - firstTimeStamp > 3) {
			// Do nothing - they clicked "back" after fb handler, more than 3s
		} else {
			// Direct to https page
			window.location = "https://www.facebook.com/givemusiclivemusic";
		} 
	}, 50);

// Try fb page - if it works, immediate (< 50ms) redirect
window.location = "fb://page/628401090702282";

}
