import { getTweets } from '../modules/Timeline'

const timeline = async (req, res) => {

  const screenName = req.params.screen_name
  const result = await getTweets(screenName)

  if (result.status) {
    res.status(200).json({
      message: 'User Tweets',
      data: result.data
    })
  } else {
    res.status(500).json({
      error: result.error
    })
  }
}

const rawTimeline = async (req, res) => {
  const screenName = req.params.screen_name
  const result = await getTweets(screenName, false)

  if (result.status) {
    res.status(200).json({
      message: 'User Tweets',
      data: result.data
    })
  } else {
    res.status(500).json({
      error: result.error
    })
  }
}

module.exports = { timeline, rawTimeline }
