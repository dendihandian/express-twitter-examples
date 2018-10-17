import { getTweetsByScreenName } from '../modules/Account'

const accountTweets = async (req, res) => {
  const screenName = req.params.screen_name
  const rawResult = (req.query.rawTweets && req.query.rawTweets == 1) ? true : false
  // todo: validation
  const result = await getTweetsByScreenName(screenName, rawResult)
  if (result.status) {
    res.status(200).json({
      message: 'User Tweets',
      data: result.data
    })
  } else {
    res.status(500).json({
      message: result.error.message,
      error: result.error
    })
  }
}

module.exports = { accountTweets }
