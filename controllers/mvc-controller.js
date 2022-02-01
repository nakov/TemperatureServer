function setup(app, data) {
  app.get('/', function(req, res) {
    let temperatures = data.getTemperatures();
    let model = { temperatures };
    res.render('home', model);
  });
}

module.exports = { setup };
