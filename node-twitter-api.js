var TwitterApi=require("./lib/twitter_api");

module.exports = function (consumerKey,consumerSecret) {
    return new TwitterApi(consumerKey,consumerSecret);
};