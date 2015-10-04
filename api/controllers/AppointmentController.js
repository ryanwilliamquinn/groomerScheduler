var Promise = require('bluebird');

module.exports = {

  scheduleAppointment: function(req, res) {
    var groomers = req.body.groomers;
    if (groomers.length < 1) {
      return res.notFound();
    }
    return Promise.delay(2000)
      .then(function() {
        var random = Math.random();
        if (random > 0.1) {
          var out = {
            groomer: groomers[0],
            date: req.body.date
          };
          return res.json(out);
        } else {
          return res.notFound();
        }
      });
  }

};
