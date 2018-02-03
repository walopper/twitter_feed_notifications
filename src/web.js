$(function(){ // Because I need to have jQuery loaded

	'use strict'

	let socket = io.connect('http://walo.in:81');

	socket.on('tweet', tweet => {
	  	console.log(tweet);

	  	postTweet(tweet);
	});

	function postTweet(tweet){
		$('#tweetsContainer .tweets').prepend(`
			<div class="tweet">
				<div class="userpic"><img src="${tweet.profilePicture}" alt=""></div>
				<div class="content">
					<div class="username">${tweet.nickname}</div>
					<div class="text">${tweet.text}</div>
				</div>
			</div>
		`);
	}

});