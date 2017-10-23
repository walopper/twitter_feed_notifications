# Twitter feed notifications

This script will let you show tweets from any people who post with specific words.

### Stack in this script
- Javascript (ES6)
- Redis
- Socket.io
- NodeJS
- NPM or Yarn
- Babel
- Express
- node-tweet-stream
- chokidar
- webpack

### Twitter App

In order to use this script, you need to setup a Twitter App and the credentials and token.

### Instalation

Install require packages with NPM or Yarn
```
$ npm install
```

### Config

Edit configuration file **config.js** and set any words/hashtags you want to track.
```javascript
const twitterListenWords = ['javascrip', 'js', '#MyAwesomeFramework']
```
If you want to change the server port, you can edit the **config.js** file
```javascript
const serverPort = 3000
```
To configure your twitter credentials and tokens, edit **twitter.config.js** file
```javascript
module.exports = {
	    consumer_key: 'IH8rthsSagnRvPYR9...',
	    consumer_secret: 'EfnHSWvgfgnfDzMmQEreaEzCHPmYzB...',
	    token: '25546657-dfKgvhmoF...dpL1jqSaWl6keMmVT...',
	    token_secret: 'XWK1po...H4qM5fdGDBfgdsdvDgleEAEVicmX...'
	}
```

### Run the server
```
$ npm run serve
```

and browser your URL.
