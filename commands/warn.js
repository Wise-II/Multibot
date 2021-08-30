const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
var myVar = 0;


module.exports = {
	name: 'warn',
  aliases: ['warn','notify'],
  category: "moderation",
  description: 'warn a user with an id or a mention',
  usage: ".jswarn @user",
	run: async function (client, command, args, message) {

    let blacklist = new Discord.MessageEmbed()
    .setColor("#e31212")
    .setDescription(
      "ERROR: You are blacklisted in the database by the owner from using this command."
    );
  var blacklistarray =["819173352760803367", "", "", ""];// ID or ID(s) of user you wish to blacklist here
  if (blacklistarray.includes(message.author.id))
    return message.channel.send(blacklist);
  
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
        try {
            ++myVar;
          let reason = args.slice(1).join(' ')
          let user = message.mentions.users.first()
          let userid = message.mentions.users.first().id
          const channel = message.member.guild.channels.cache.find(ch => ch.name === 'warnlog');
          if (!channel) return;
          if (!reason) return message.react("‼️")
          if (message.mentions.users.size < 1) return message.react("❔")
          var warninglog = new Discord.MessageEmbed()
          .setAuthor('User Warning')
          .addField('Case#', myVar )
          .addField('Username:', `<@${user.id}>`, false)
          .addField('Reason:', reason, false)
          .addField('Warned by:', message.author.tag, false)
          .addField('Evidence:', 'No evidence is here please add some')
          .setFooter('MultiBot -> Logging, Warn')
          .setThumbnail(`${user.displayAvatarURL()}`)
          .setTimestamp()
          .setColor('#e7b416')
          channel.send(warninglog)
          } catch (err) {
            const errlog = message.member.guild.channels.cache.find(ch => ch.name === 'errorlog');
              if (!errlog) return;
              message.channel.send(`I encountred an error:  `+ err, {code: "javascript"});
              console.log(err)
              message.react("❌")  
          }
          message.react("✅")
        }
        }