
const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const dynamic = new Discord.Client();
const fs = require('fs');
var memory = require("memory");
module.exports = {
	name: 'id',
	aliases: ["id"],
	category: "info",
	description: 'Get mentioned users account id',
	usage: ".js id @user",
	run: async function (client, command, args, message) {
		let blacklist = new Discord.MessageEmbed()
  .setColor("#e31212")
  .setDescription(
    "ERROR: You are blacklisted in the database by the owner from using this command."
  );
var blacklistarray =["819173352760803367", "", "", ""];// ID or ID(s) of user you wish to blacklist here
if (blacklistarray.includes(message.author.id))
  return message.channel.send(blacklist);

        const user = message.mentions.users.first() || message.author;
        const guild = message.guild
        if (user) member = message.guild.member(user);
        message.channel.send(`User id: ${user.id}`)
    }}
