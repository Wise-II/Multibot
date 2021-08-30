const chalk = require('chalk');
args: true,
module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
		console.log(chalk.green(`Executed cmd: "args" On Server: ${message.guild.name}\n in: ${Date.now() - message.createdTimestamp}ms\n Server id: ${guild.id}`));
		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};