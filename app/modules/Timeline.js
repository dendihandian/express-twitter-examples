import client from '../components/TwitterClient'

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

  try {
    const tweets = await client.get('statuses/user_timeline', params)
    result = {
      status: true,
      data: {
        user: screenName,
        tweets: (filter) ? await filterTweets(tweets) : tweets
      }
    }
  } catch (e) {
    result = {
      status: false,
      error: e
    }
  }

  return result
}


module.exports = { getTweets }
