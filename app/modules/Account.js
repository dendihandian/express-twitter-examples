import client from '../components/TwitterClient'
import moment from 'moment'

// helper functions
const filterTweets = async (tweets) => {
  let filteredTweets = []
  tweets.forEach((tweet) => {
    filteredTweets.push({
      id: tweet.id,
      text: tweet.text,
      date: moment(tweet.created_at).format('Y-M-D HH:mm:ss')
    })
  })
  return filteredTweets
}

// exported functions
const getProfileByScreenName = async (screenName) => {
  let profile = { name: 'dummy' }
  return profile
}

const getTweetsByScreenName = async (screenName, rawResult=false) => {
  const params = { screen_name: screenName }
  let result
  try {
    const tweets = await client.get('statuses/user_timeline', params)
    result = {
      status: true,
      data: (rawResult) ? tweets : await filterTweets (tweets)
    }
  } catch (e) {
    console.log(e)
    result = {
      status: false,
      error: e
    }
  }
  return result
}

module.exports = { getProfileByScreenName, getTweetsByScreenName }
