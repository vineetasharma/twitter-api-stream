var Messages = require('./../helpers/messages'),
    oAuth = require('oauth').OAuth,
    _oauth;

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
_oauth = new oAuth(
    "https://twitter.com/oauth/request_token"
    , "https://twitter.com/oauth/access_token"
    , TwitterApi.consumer_key
    , TwitterApi.consumer_secret
    , "1.0A"
    , "http://localhost:9092/twitter/auth/callback"
    , "HMAC-SHA1");
// HomeLineTweets
TwitterApi.prototype.getHomeLineTweets = function (userAccessToken, userRefreshToken) {
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
//

module.export = TwitterApi;