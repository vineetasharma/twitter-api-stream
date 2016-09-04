var Messages = require('./../helpers/messages'),
    oAuth = require('oauth').OAuth,
    _oauth;

var TwitterApi = function (consumer_key, consumer_secret,callback_url) {
    if (!consumer_key) {
        throw new Error(Messages.ERROR.UNDEFINED_CONSUMER_KEY);
    }
    if (!consumer_secret) {
        throw new Error(Messages.ERROR.UNDEFINED_CONSUMER_SECRET);
    }
    if (!callback_url) {
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK_URL);
    }
    _oauth = new oAuth(
        "https://twitter.com/oauth/request_token"
        , "https://twitter.com/oauth/access_token"
        , consumer_key
        , consumer_secret
        , "1.0A"
        , callback_url
        , "HMAC-SHA1");
    this.consumer_secret = consumer_secret;
    this.consumer_key = consumer_key;
    this.callback_url = callback_url;
    return this;
};
// HomeLineTweets
TwitterApi.prototype.getHomeLineTweets = function (userAccessToken, userRefreshToken,cb) {
    _oauth.get(
        "https://api.twitter.com/1.1/statuses/home_timeline.json?count=10"
        , userAccessToken
        , userRefreshToken
        , cb
    );
};
// Post a Tweet
TwitterApi.prototype.postTweet = function (userAccessToken, userRefreshToken,postText,cb) {
    _oauth.post(
        "https://api.twitter.com/1.1/statuses/update.json"
        , userAccessToken
        , userRefreshToken
        , {"status": postText}
        ,cb
    );
};
// getFollowersList
TwitterApi.prototype.getFollowersList = function (userAccessToken, userRefreshToken,cb) {
    _oauth.get(
        "https://api.twitter.com/1.1/friends/list.json?count=100"
        , userAccessToken
        , userRefreshToken
        ,cb
    );
};

// Get a specific user's latest tweet(s)
TwitterApi.prototype.getLatestTweets = function (screenName, statusCount, userAccessToken, userRefreshToken,cb ) {
    var count = statusCount || 1;
    var screenName = screenName || "";

    _oauth.get(
        "https://api.twitter.com/1.1/statuses/user_timeline.json?count=" + count + "&screen_name=" + screenName
        , userAccessToken
        , userRefreshToken
        , cb
    );
};

//
module.exports = TwitterApi;