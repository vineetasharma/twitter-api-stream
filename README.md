# twitter-api

twitter-api is designed to get data from  Twitter API in a very simplest way.

##  How to install
`npm install twitter-api --save`

## How to use

*example*
```
var Twitter = require('twitter-api')
    , twitterApi = new Twitter(YOUR_CONSUMER_KEY,YOUR_CONSUMER_SECRET,YOUR_CALLBACK_URL);

twitterApi.getHomeLineTweets(userAccessToken,userRefreshToken, function (err, result) {
  if (err) {
    console.log("Error:", err);
  }
  if (result) {
    console.log("Result: ", JSON.parse(result));
  }
});

twitterApi.postTweet(userAccessToken,userRefreshToken,postText, function (err, result) {
  if (err) {
    console.log("Error:", err);
  }
  if (result) {
    console.log("Result: ", JSON.parse(result));
  }
});

twitterApi.getFollowersList(userAccessToken,userRefreshToken,postText, function (err, result) {
  if (err) {
    console.log("Error:", err);
  }
  if (result) {
    console.log("Result: ", JSON.parse(result));
  }
});