var Messages = require('./messages');

var TwitterApi = function (consumer_key, consumer_secret) {
    if (!consumer_key) {
        throw new Error(Messages.ERROR.UNDEFINED_CONSUMER_KEY);
    }
    if (!consumer_secret) {
        throw new Error(Messages.ERROR.UNDEFINED_CONSUMER_SECRET);
    }
    this.consumer_secret = consumer_secret;
    this.consumer_key = consumer_key;
    return this;
};
// HomeLineTweets
TwitterApi.prototype.getHomeLineTweets = function () {
};
// Post a Tweet
TwitterApi.prototype.postTweet = function (postText) {
};
//

module.export = TwitterApi;