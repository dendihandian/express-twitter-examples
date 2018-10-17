import client from '../components/TwitterClient'
import { filterTweets } from '../helper'

const searchTweetsByKeyword = async (keyword, rawResult = false) => {
  let result
  try {
    const tweets = await client.get('search/tweets', {q: keyword})
    result = {
      status: true,
      data: (rawResult) ? tweets : await filterTweets (tweets.statuses)
    }
  } catch (e) {
    result = {
      status: false,
      message: e.message
    }
  }
  return result
}

module.exports = { searchTweetsByKeyword }
