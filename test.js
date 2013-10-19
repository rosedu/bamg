// var ev = $.Event('keypress');
// ev.which = 106; // Carriage-return (Enter)
// document.getElementById("stream_story_52621e66b4d664a70214824").trigger(ev);
// // $('head').trigger(ev);
// 	console.log("j pressed");
//      console.log(ev);

// }

window.onload = function(e) {
	var port = chrome.runtime.connect( {name: "sphinxChannel"});
	port.postMessage({state: "ready"});
	console.log("msg sent");
	port.onMessage.addListener(function(msg) {
		setColor(msg.color);
		//setTimeout(setColor(msg.color),1000);
		console.log("color set");
	});
}






function setColor(color) {
	console.log("in color:" + color);
	document.getElementsByClassName("navHeader")[0].style.color = color;
}
