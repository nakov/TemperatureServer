function setup(app, data) {
  app.get('/', function(req, res) {
    let temperatures = data.getTemperatures();
    let model = { temperatures };
    res.render('home', model);
  });

  app.get('/add-temperature', function(req, res) {
    res.render('add-temperature');
  });
}

module.exports = { setup };
