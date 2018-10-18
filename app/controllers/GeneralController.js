import { searchTweetsByKeyword, querySearchTweets } from '../modules/General'

const searchTweets = async (req, res) => {
  const keyword = req.query.keyword
  const rawResult = (req.query.rawTweets && req.query.rawTweets == 1) ? true : false
  const result = await searchTweetsByKeyword(keyword, rawResult)
  if (result.status) {
    res.status(200).json({
      message: 'Tweets Search Result',
      data: result.data
    })
  } else {
    res.status(500).json({
      message: result.message,
    })
  }
}

const postSearchTweets = async (req, res) => {
  const body = {
    q: req.body.q,
    result_type: req.body.resultType,
    count: req.body.count
  }
  const result = await querySearchTweets(body)
  if (result.status) {
    res.status(200).json({
      message: 'Tweets Search Result',
      data: result.data
    })
  } else {
    res.status(500).json({
      message: result.message,
    })
  }
}

module.exports = { searchTweets, postSearchTweets }
