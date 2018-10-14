import { timeline, rawTimeline } from './controllers/TwitterController'

const router = function(app) {
  app.route('/timeline/:screen_name')
    .get(timeline)

  app.route('/timeline/:screen_name/raw')
    .get(rawTimeline)
}

module.exports = router
