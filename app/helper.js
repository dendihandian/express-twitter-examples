import moment from 'moment'

const filterTweets = async (tweets) => {
  let filteredTweets = []
  tweets.forEach((tweet) => {
    const arr_created_at = tweet.created_at.split(" ")
    const createdAt = `${arr_created_at[5]}-${moment().month(arr_created_at[1]).format('M')}-${arr_created_at[2]} ${arr_created_at[3]}`
    filteredTweets.push({
      id: tweet.id,
      text: tweet.text,
      link: `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`,
      createdAt: createdAt
    })
  })
  return filteredTweets
}


module.exports = { filterTweets }
