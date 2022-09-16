
const { DiscordAPIError } = import("discord.js");
const { format } = import("path");
const chalk = import('chalk');
const Discord = import('discord.js');
const fs = import('fs');
var memory = import("memory");
module.exports = {
	name: 'Developer',
	aliases: ["d", "devloper","devmenu"],
	category: "info",
	description: 'information on bot',
	usage: ".jsstatus",
	run: async function (client, command, args, message) {
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