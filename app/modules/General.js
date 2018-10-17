const searchTweetsByKeyword = async (keyword) => {
  let result
  try {
    result = {
      status: true,
      data: [{ text: `tweet ${keyword} #1` }, { text: `tweet ${keyword} #2` }]
    }
  } catch (e) {
    result = {
      status: false,
      message: e.message
    }
  }
  return result
}

module.exports = { searchTweetsByKeyword }
