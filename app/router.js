import { userProfile, userTweets, userTimeline, userFavorites, userFollowings, userFollowers } from './controllers/UserController'
import { accountTweets } from './controllers/AccountController'
import { searchTweets, postSearchTweets } from './controllers/GeneralController'

const router = function(app) {
  // User
  app.route('/favorites')
    .get(userFavorites)
  app.route('/followers')
    .get(userFollowers)
  app.route('/followings')
    .get(userFollowings)
  app.route('/profile')
    .get(userProfile)
  app.route('/timeline')
    .get(userTimeline)
  app.route('/tweets')
    .get(userTweets)

  // General
  app.route('/search')
    .get(searchTweets)
    .post(postSearchTweets)

  // Account
  app.route('/:screen_name/timeline')
    .get(accountTweets)
}

module.exports = router
