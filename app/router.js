import { timeline, rawTimeline } from './controllers/TimelineController'

const router = function(app) {
  app.route('/:screen_name/timeline')
    .get(timeline)
}

module.exports = router
