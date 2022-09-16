
const { DiscordAPIError } = import("discord.js");
const { format } = import("path");
const chalk = import('chalk');
const Discord = import('discord.js');
const fs = import('fs');
var memory = import("memory");
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
