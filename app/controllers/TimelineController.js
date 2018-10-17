import { getTweets } from '../modules/Timeline'

const timeline = async (req, res) => {

  const screenName = req.params.screen_name
  const filter = (req.query.raw && req.query.raw == 1) ? false : true
  const result = await getTweets(screenName, filter)

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

module.exports = { timeline }
