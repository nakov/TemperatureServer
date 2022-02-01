let temperatures = [];

function seedSampleData() {
  temperatures.length = 0;
  temperatures.push(20);
  temperatures.push(22);
  temperatures.push(24);
  temperatures.push(21);
}

function getTemperatures() {
	return temperatures;
}

function addTemperature(newTemperature) {
  temperatures.unshift(newTemperature);
  return {msg: "Temperature added.", temperature: newTemperature};
}

function getLastTemperature() {
  return temperatures[0];
}

module.exports = {
  seedSampleData,
  getTemperatures,
  addTemperature,
  getLastTemperature
};
