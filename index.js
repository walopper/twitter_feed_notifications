'use strict'

const app = require('express')()
const http = require('http').Server(app)
const sio = require('socket.io')(http),
	redis = require('redis'),
	Twitter = require('node-tweet-stream'),
	twitterConf = require('./twitter.config.js'),
	webConnector = require('./web-connector.js')

const twitterListenWords = ['#Cambiemos', '#cambiemos', 'CristinaAlCongreso', 'maldonado', 'Maldonado', 'lanata', 'Lanata', 'clarinmiente'];


const wc = new webConnector()

// twutter listener
const t = new Twitter(twitterConf)

t.on('tweet', tweet => {
	if(tweet.lang === 'es' || tweet.lang === 'en') {
		wc.sendMessageToWeb(sio, tweet);
	}
})
 
twitterListenWords.map( word => {
	t.track(word)
})

sio.on('connection', () => console.log('User connected'))

// redis message listener/emitter
const r = redis.createClient()

r.subscribe('twitterChannel')

r.on('message', (channel, messageString) => {
	let message = JSON.parse(messageString)
	sio.emit('alert', message)

	console.log('Alert: ', message)
})

// web server
http.listen(81, () => console.log('Server running at http://walo.in:81/'))
