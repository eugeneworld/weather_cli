const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	fahrenheit: {
		type: `boolean`,
		alias: `f`,
		desc: `Print temperature in fahrenheit`
	},
	celsius: {
		type: `boolean`,
		alias: `c`,
		desc: `Print temperature in celsius`
	},
};

const commands = {
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `location`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
