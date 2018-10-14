import { timeline, rawTimeline } from './controllers/TimelineController'

const router = function(app) {
  app.route('/timeline/:screen_name')
    .get(timeline)

  app.route('/timeline/:screen_name/raw')
    .get(rawTimeline)
}

module.exports = router
