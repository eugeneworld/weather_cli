#!/usr/bin/env node

/**
 * Weather_CLI
 * Grabs weather data of a specified location.
 *
 * @author Eugene Kim <https://github.com/eugeneworld>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

let units = "standard";
if (cli.flags.celsius){
	units = "metric"
}
if (cli.flags.fahrenheit){
	units = "imperial";
}

const getWeather = async (res) => {
	lon = res.data.features[0].geometry.coordinates[0];
	lat = res.data.features[0].geometry.coordinates[1];
	placeName = res.data.features[0].place_name;
		
	const res2 = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appId=${process.env.OPEN_WEATHER_API_KEY}&units=${units}`
	)
	.then(res2 => logWeather(res2, placeName))
	.catch(err => console.log)
}

const logWeather = async (res2, placeName) => {
	const data = `Current temperature in ${placeName} is ${res2.data.main.temp}${cli.flags.celsius ? "C" : cli.flags.fahrenheit ? "F" : null}.
Conditions are currently: ${res2.data.weather[0].main}.
What you should expect: ${res2.data.weather[0].description.charAt(0).toUpperCase() + res2.data.weather[0].description.slice(1)} throughout the day.`;
		
	console.log(data);
		fs.appendFile('weather.txt', data + '\n', (err) => {
			if (err) throw err;
			console.log(`Weather was added to your weather tracking file, weather.txt`)
		})
}

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	if (input.length > 0){
		const args = input.join("%20");
		const res = await axios.get(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${args}.json?proximity=ip&access_token=${process.env.MAPBOX_API_KEY}`
		)
		.then(getWeather)
		.catch(err => {console.log});
	}
})();
