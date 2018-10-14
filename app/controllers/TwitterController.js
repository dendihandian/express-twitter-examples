import client from '../components/TwitterClient.js'

const timeline = (req, res) => {
  const screenName = req.params.screen_name
  const params = {
    screen_name: screenName
  }

  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {

      let processedTweets = []
      tweets.forEach((tweet) => {
        processedTweets.push({
          id: tweet.id,
          text: tweet.text,
          date: tweet.created_at
        })
      })

      res.status(200).json({
        message: 'User Tweets',
        data: {
          user: screenName,
          tweets: processedTweets
        }
      })
    } else {
      res.status(500).json({
        message: 'Server Error'
      })
    }
  })
}

const rawTimeline = (req, res) => {
  const params = {
    screen_name: req.params.screen_name
  }

  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      res.status(200).json({
        message: 'Raw User Tweets',
        data: tweets
      })
    } else {
      res.status(500).json({
        message: 'Server Error'
      })
    }
  })
}

module.exports = { timeline, rawTimeline }
