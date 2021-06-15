const fs = require('fs');

module.exports = {
	gen: function() {
		fs.mkdirSync("./commands", { recursive: true })
		fs.mkdirSync("./events", { recursive: true })
		try {
			if (fs.existsSync('./index.js')) {
				console.log("Error: You've already index.js file in your project.")
			}
			else {
				fs.copyFile('./node_modules/discord-handler-generator/templates/index-copy.js', 'index.js', (err) => {
					if (err) throw err;
				});
			}
		} catch (err) {
			console.error(err)
		}
		
		fs.copyFile('./node_modules/discord-handler-generator/templates/command-copy.js', 'commands/command_example.js', (err) => {
			if (err) throw err;
		});
		fs.copyFile('./node_modules/discord-handler-generator/templates/event-copy.js', 'events/event_example.js', (err) => {
			if (err) throw err;
		});
	}
} 
