var TwitterApi=require("./lib/twitter_api");

module.exports = function (consumerKey,consumerSecret,callbackUrl) {
    return new TwitterApi(consumerKey,consumerSecret,callbackUrl);
};