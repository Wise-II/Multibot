
const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const dynamic = new Discord.Client();
const fs = require('fs');
var memory = require("memory");
module.exports = {
	name: 'Developer',
	aliases: ["d", "devloper","devmenu"],
	category: "info",
	description: 'information on bot',
	usage: ".jsstatus",
	run: async function (client, command, args, message) {
        let blacklist = new Discord.MessageEmbed()
  .setColor("#e31212")
  .setDescription(
    "ERROR: You are blacklisted in the database by the owner from using this command."
  );
var blacklistarray =["819173352760803367", "", "", ""];// ID or ID(s) of user you wish to blacklist here
if (blacklistarray.includes(message.author.id))
  return message.channel.send(blacklist);

        const embed = new Discord.MessageEmbed()
        .setTitle('DEVELOPER')
        .setDescription('Devloper tools if you dont know what your doing, refrain from this command')
        .addField('whois', 'usage: .js whois @user', true)
        .addField('id', 'usage: .js id @user', true)
        .addField('`Developer`', true)
        .addField('Eval', 'scans code for any errors ')
        .addField('LOGGING', true)
        .addField('Message Delete', 'Status: Fucked, Check index.js for errors :red_circle: (for a more in-depth look run ` .jsstatuslogs`) ')
        .addField('Message Edit', 'Status: Disabled (not added in yet) :red_circle: ')
        .setTimestamp()
        message.channel.send(embed)
    }}