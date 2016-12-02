# twitter-api-stream

twitter-api-stream is designed to get data from  Twitter API in a very simplest way.

##  How to install
```bash
npm install twitter-api-stream --save
```

## How to use:
To use the twitter api you have to pass the 3 parameters respectively consumer_key, consumer_secret and callback_url. You can get these values by registering your app over [twitter's developer portal](https://dev.twitter.com/).
*example*
```javascript
var Twitter = require('twitter-api-stream')
    , twitterApi = new Twitter(YOUR_CONSUMER_KEY,YOUR_CONSUMER_SECRET,YOUR_CALLBACK_URL);
```

#### Get homeline tweets of the user using userAccessToken & userRefreshToken.
```javascript
twitterApi.getHomeLineTweets(userAccessToken,userRefreshToken, function (err, result) {
  if (err) {
    console.log("Error:", err);
  }
  if (result) {
    console.log("Result: ", JSON.parse(result));
  }
});
```

#### post a tweet
```javascript
twitterApi.postTweet(userAccessToken,userRefreshToken,postText, function (err, result) {
  if (err) {
    console.log("Error:", err);
  }
  if (result) {
    console.log("Result: ", JSON.parse(result));
  }
});
```

#### Get list of followers of a particular user.
```javascript
twitterApi.getFollowersList(userAccessToken,userRefreshToken,postText, function (err, result) {
  if (err) {
    console.log("Error:", err);
  }
  if (result) {
    console.log("Result: ", JSON.parse(result));
  }
});
```

#### Get the latest 5 tweets from the twitter user 'cschmitz81'

```javascript
twitterApi.getLatestTweets('cschmitz81', 5, userAccessToken, userRefreshToken, function(err, result){
  if(err){
    console.log(err)
  }
  if(result){
    console.log("Result: " , JSON.parse(result));
  }
});
```

