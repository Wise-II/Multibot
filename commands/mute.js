const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require("ms");
const PREFIX = '.js';
module.exports = {
	name: 'mute',
	aliases: ["mute", "muteuser"],
	category: "moderation",
	description: 'mutes a mentioned user',
	usage: ".jsmute @user",
	run: async function (client, command, args, message) {
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send(
              "Sorry but you do not have permission to unmute anyone"
            );
          }
      
          if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I do not have permission to manage roles.");
          }
     
     
    }}