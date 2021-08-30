
const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const dynamic = new Discord.Client();
const fs = require('fs');
var memory = require("memory");
module.exports = {
	name: 'whois',
	aliases: ["wi", "whois"],
	category: "info",
	description: 'Get mentioned users account created date and server join date + avatar',
	usage: ".jswhois @user",
	run: async function (client, command, args, message) {
        const user = message.mentions.users.first() || message.author;
      
        if (user) member = message.guild.member(user);
        const guild = message.guild
        const avatarEmbed = new Discord.MessageEmbed()
            .setColor(member.displayHexColor)
            .setAuthor(user.username)
            .setThumbnail(user.displayAvatarURL({ dynamic:true }))
            .addField('Account created date:',user.createdAt, true )
            .addField('Joined server date:', member.joinedAt, true)
            .addField('User id:',user.id, true)
            .addField('Is bot:',user.bot, true)
            .addField('Current Presence:',user.presence.status, true)
            .addField('User Tag', `<@${user.id}>`, true)
            .setFooter('MultiBot.Mod => WhoIs')
            .setTimestamp()
            
        message.channel.send(avatarEmbed);
    }}