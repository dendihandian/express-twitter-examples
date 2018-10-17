import { getProfile, getTweets, getFavorites, getFollowings, getFollowers } from '../modules/User'

const userProfile = async (req, res) => {
  const profile = await getProfile()
  res.status(200).json({
    message: 'User Profile',
    data: profile
  })
}

const userTweets = async (req, res) => {
  const tweets = await getTweets()
  res.status(200).json({
    message: 'User Tweets',
    data: tweets
  })
}

const userFavorites = async (req, res) => {
  const favorites = await getFavorites()
  res.status(200).json({
    message: 'User Favorites',
    data: favorites
  })
}

const userFollowings = async (req, res) => {
  const followings = await getFollowings()
  res.status(200).json({
    message: 'User Followings',
    data: followings
  })
}

const userFollowers = async (req, res) => {
  const followers = await getFollowers()
  res.status(200).json({
    message: 'User Followers',
    data: followers
  })
}

module.exports = { userProfile, userTweets, userFavorites, userFollowings, userFollowers }
