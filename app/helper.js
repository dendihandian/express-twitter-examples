import moment from 'moment'

const filterTweets = async (tweets) => {
  let filteredTweets = []
  tweets.forEach((tweet) => {
    filteredTweets.push({
      id: tweet.id,
      text: tweet.text,
      date: moment(tweet.created_at).format('Y-M-D HH:mm:ss')
    })
  })
  return filteredTweets
}

module.exports = { filterTweets }
