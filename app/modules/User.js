import client from '../components/TwitterClient'
// import moment from 'moment'

const getProfile = async () => {
  let profile = { name: 'Your Name' }
  return profile
}

const getTimeline = async () => {
  let timeline = [{ text: 'You Idol #1 Tweet' }, { text: 'You Idol #2 Tweet' }]
  return timeline
}

const getTweets = async () => {
  let tweets = [{ text: 'This is my tweet #1' }, { text: 'This is my tweet #2' }]
  return tweets
}

const getFavorites = async () => {
  let favorites = [{ text: 'This is my favorite #1' }, { text: 'This is my favorite #2' }]
  return favorites
}

const getFollowings = async () => {
  let followings = [{ name: 'Your Idol #1' }, { name: 'Your Idol #2' }]
  return followings
}

const getFollowers = async () => {
  let followers = [{ name: 'Your Fan #1' }, { name: 'Your Fan #2'  }]
  return followers
}

const statusUpdate = async (body) => {
  let result
  try {
    const tweet = await client.post('statuses/update', body)
    result = {
      status: true,
      data: tweet
    }
  } catch (e) {
    result = {
      status: false,
      message: e.message
    }
  }
  return result
}

module.exports = { getProfile, getTimeline, getTweets, getFavorites, getFollowings, getFollowers, statusUpdate }
