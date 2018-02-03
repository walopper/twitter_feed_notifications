module.exports = class webConnector {

	makeTweetObject(tweet){
		return {
			text: tweet.text,
			profilePicture: tweet.user.profile_image_url,
			nickname: tweet.user.screen_name,
			date: tweet.created_at,
			timestamp: tweet.timestamp_ms
		}
	}

	sendMessageToWeb(sio, tweet){
		sio.emit('tweet', this.makeTweetObject(tweet))
		this.logTweet(tweet)
	}

	logTweet(tweet){
		console.log('-------------------------------------------------------------------');
		console.log('Nuevo tweet -> '+ tweet.text)
	}

}