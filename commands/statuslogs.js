
const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const dynamic = new Discord.Client();
const fs = require('fs');
var memory = require("memory");
module.exports = {
	name: 'statuslogs',
	aliases: ["statuslogs", "log-status", "logstatus" , "log-stats" ,"logstats", "status" + " " + "logs"],
	category: "info",
	description: 'Get status for logging commands',
	usage: ".js log-status",
	run: async function (client, command, args, message) {
        const status = new Discord.MessageEmbed()
      .setTitle('Logging module status')
      .addField('Deleted messages logs', 'Works :green_circle:, getting message attachments disabled if enabled results in crash (Discord api error: Embed is not a legal statement)' , false)
      .addField('Edited message logs', 'doesnt even exist lmao(message.edits)' )
      .setFooter('Logic -> Logging Status')
      .setTimestamp()
      message.channel.send(status)
    }}