import { userProfile, userTweets, userTimeline, userFavorites, userFollowings, userFollowers } from './controllers/UserController'
import { accountTweets } from './controllers/AccountController'

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

  // Account
  app.route('/:screen_name/timeline')
    .get(accountTweets)
}

module.exports = router
