
const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
var myVar = 0;
module.exports = {
	name: 'ping',
	aliases: ["time", "ping"],
	category: "stats",
	description: 'Utilty to get bots ping',
	usage: ".jsping",
	run: async function (client, command, args, message) {
		const guild = message.guild
		++myVar;
		var ping = new Discord.MessageEmbed()
		.setTitle('Pong!', true)
		.setURL('https://battery-productions.digital/')
		.addField(':hourglass_flowing_sand:',`**${client.ws.ping}** ms`,true)
		.addField(':stopwatch:',`**${Date.now() - message.createdTimestamp}** ms`,true)
		.addField(':poop:',`**${myVar}** ms`,true)
		.setTimestamp()
		.setColor('#fffff')
			  message.channel.send(ping);
			  console.log(chalk.magenta(`Executed cmd: "ping" On Server: ${message.guild.name}\n in: ${Date.now() - message.createdTimestamp}ms\n Server id: ${guild.id}`));
	
	  
        

	},
};
