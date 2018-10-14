const router = function(app) {
  app.route('/')
    .get(function (req, res) {
      res.send('Hello From Express')
    })

  app.route('/api')
    .get(function (req, res) {
      res.status(200).json({
        message: 'Welcome to Express API'
      })
    })
}

module.exports = router
