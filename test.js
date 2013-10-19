// var ev = $.Event('keypress');
// ev.which = 106; // Carriage-return (Enter)
// document.getElementById("stream_story_52621e66b4d664a70214824").trigger(ev);
// // $('head').trigger(ev);
// 	console.log("j pressed");
//      console.log(ev);

// }

// .mainWrapper   ==  postul
// .UFILikeLink == likebutton
// .share_action_link == share
// var post = $(".mainWrapper").get(7);
// $(window).scrollTop(post);

// $(".sideNavItem.stat_elem").get(x) // 0-news feed, 1-msg, 2-events, 3-photos, 4-browse, 6... groups
	// var elem = $(".sideNavItem.stat_elem").get(5).id
	// ending = elem.split("_")[2];
	//location.href='https://facebook.com/groups/' + ending;
	
// $(".mainWrapper").eq(0).find('div a:first').attr('href')
window.onload = function(e) {
	// var port = chrome.runtime.connect( {name: "sphinxChannel"});
	// port.postMessage({state: "ready"});
	// console.log("msg sent");
	// port.onMessage.addListener(function(msg) {
	// 	setColor(msg.color);
	// 	//setTimeout(setColor(msg.color),1000);
	// 	console.log("color set");
	// });


	// console.log( $(".actorDescription.actorName").get(3));
	// console.log($(".actorDescription.actorName").eq(0).children().first().attr('href'));
	console.log($(".mainWrapper").eq(0).find('div a:first').attr('href'));
	console.log($(".mainWrapper").eq(1).find('div a:first').attr('href'));
	console.log($(".mainWrapper").eq(2).find('div a:first').attr('href'));
	console.log($(".mainWrapper").eq(1));
	console.log($(".mainWrapper").eq(2));
	// console.log($("#ll").find['href']);


	// // var frame = $(".mainWrapper").get(1);
	// console.log($(".UFILikeLink").get(0));
	// console.log($(".UFILikeLink").get(0).click());
	// console.log($(".UFILikeLink").get(2));
	// console.log($(".UFILikeLink").get(3));
	console.log("done");

}






function setColor(color) {
	console.log("in color:" + color);
	document.getElementsByClassName("navHeader")[0].style.color = color;
}
