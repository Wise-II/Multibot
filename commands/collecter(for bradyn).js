const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
	name: 'bradyncollecter',
	cooldown: 5,
	description: 'reaction',
	execute(message, args) {
        message.delete()
        var pre = new Discord.MessageEmbed()
        .addField('Reactions:', 0)
        .setFooter('Server Guard => **Undefined**')
        .setTimestamp()
        message.channel.send(pre)
        setTimeout(3000);
        message.react('❤️').then();

const filter = (reaction, user) => {
	return ['❤️'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
        const reaction = collected.first();
        var myVar = 0;

		if (reaction.emoji.name === '❤️') {
            var post = new Discord.MessageEmbed()
            .addField('Reactions:', `${++myVar}`, true)
            .setFooter('Server Guard => **Undefined**')
            .setTimestamp()
			message.edit(post)
		}
	})
	.catch(collected => {
		console.log('❤️');
    })}}