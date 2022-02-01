function setup(app, data) {
  app.get('/api', function(req, res) {
    let routes = app._router.stack
      .filter(r => r.route && r.route.path.startsWith('/api'))
    .map(rt => ({
      route: rt.route.path,
      method: rt.route.stack[0].method
    }));
    res.send(routes);
  });

  app.get('/api/temperatures/add/:t', async function(req, res) {
    let result = data.addTemperature(req.params.t);
    if (result.errMsg)
      res.status(404).send(result);
    else
      res.send(result);
  });

  
  app.get('/api/temperatures/last', async function(req, res) {
    let result = data.getLastTemperature();
    res.send("" + result);
  });
}

module.exports = { setup };
