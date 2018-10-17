import client from '../components/TwitterClient'
import { filterTweets } from '../helper'

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
    // console.log(e)
    result = {
      status: false,
      error: e
    }
  }
  return result
}

module.exports = { getProfileByScreenName, getTweetsByScreenName }
