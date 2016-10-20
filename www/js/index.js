    function onLoad() {
        //EVENT LISTENER HERE
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("hi matt");

var key="pen";
var value="blue";
window.localStorage.setItem(key,value);

var key="pen";
var value=window.localStorage.getItem(key);

		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
	    }
