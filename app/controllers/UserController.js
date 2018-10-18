import { getProfile, getTweets, getTimeline, getFavorites, getFollowings, getFollowers, statusUpdate } from '../modules/User'

const userProfile = async (req, res) => {
  const profile = await getProfile()
  res.status(200).json({
    message: 'User Profile',
    data: profile
  })
}

const userTimeline = async (req, res) => {
  const timeline = await getTimeline()
  res.status(200).json({
    message: 'User Timeline',
    data: timeline
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

const userUpdateStatus = async (req, res) => {
  const body = {
    status: req.body.text
  }
  const result = await statusUpdate(body)
  if (result.status) {
    res.status(201).json({
      message: 'User Status Updated',
      data: result.data
    })
  } else {
    res.status(500).json({
      message: result.message,
    })
  }
}

module.exports = { userProfile, userTweets, userTimeline, userFavorites, userFollowings, userFollowers, userUpdateStatus }
