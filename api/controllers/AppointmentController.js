var Promise = require('bluebird');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {

  scheduleAppointment: function(req, res) {
    var groomers = req.body.groomers || [];
    if (groomers.length < 1) {
      return res.notFound();
    }
    return Promise.delay(2000)
      .then(function() {
        var out = {
          groomer: groomers[getRandomInt(0, groomers.length)],
          date: req.body.date
        };
        return res.json(out);
      });
  }

};
