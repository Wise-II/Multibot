const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
	name: 'si',
	aliases: ["serverinfo", "guildata"],
	category: "info",
	description: 'Get Basic Server Info',
	usage: ".jssi",
	run: async function (client, command, args, message) {
        const guild = message.guild
        var pre = new Discord.MessageEmbed()
 .setTitle('Grabbing Data :eyes:')
			var siembed = new Discord.MessageEmbed()
			.setTitle('Server Info',true)
			.addField('Server Name:',`${message.guild.name}`,true)
			.addField('Total Members:',`${message.guild.memberCount}`,true)
			.addField('Server Region:',`${guild.region}`,true)
			.addField('Owner Of Server:',`${guild.owner}`,true)
			.addField('Number Of Boosts:',`${guild.premiumSubscriptionCount}`,true)
			.addField('MFA Level:',`${guild.mfalevel}`)
			.addField('Verification:',`${guild.verificationLevel}`)
			.addField('channels'`${guild.channel}`,true)
			.setThumbnail('https://i.imgur.com/72Q6BDY.gif')
			.setFooter('Server Guard, a Division of Multibot -> Server info')
			.setTimestamp()
			.setColor('#00fc76')
			message.channel.send(pre).then(sentMessage => sentMessage.edit(siembed));
		console.log(chalk.green(`Executed cmd: "serverinfo" On Server: ${message.guild.name}\n in: ${Date.now() - message.createdTimestamp}ms\n Server id: ${guild.id}`));
	},
};

