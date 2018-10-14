import client from '../components/TwitterClient.js'

const filterTweets = async (tweets) => {
  let filteredTweets = []
  tweets.forEach((tweet) => {
    filteredTweets.push({
      id: tweet.id,
      text: tweet.text,
      date: tweet.created_at
    })
  })

  return filteredTweets
}

const getTweets = async (screenName, filter=true) => {
  const params = {
    screen_name: screenName
  }

  let result

  const tweets = await client.get('statuses/user_timeline', params)

  if (tweets) {
    result = {
      status: true,
      data: {
        user: screenName,
        tweets: (filter) ? await filterTweets(tweets) : tweets
      }
    }

  } else {
    result = {
      status: false,
      error: error
    }
  }

  return result
}


module.exports = { getTweets }
