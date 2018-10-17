// import client from '../components/TwitterClient'
// import moment from 'moment'

const getProfile = async () => {
  let profile = { name: 'Your Name' }
  return profile
}

const getTweets = async () => {
  let tweets = [{ text: 'This is my tweet #1' }, { text: 'This is my tweet #2' }]
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

module.exports = { getProfile, getTweets, getFavorites, getFollowings, getFollowers }
