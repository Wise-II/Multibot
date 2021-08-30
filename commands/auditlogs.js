
const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const dynamic = new Discord.Client();
const fs = require('fs');
var memory = require("memory");
module.exports = {
	name: 'auditlogs',
	aliases: ["auditlogs", "display-logs"],
	category: "info",
	description: 'Get logs',
	usage: ".js auditlogs",
	run: async function (client, command, args, message) {
        message.guild.fetchAuditLogs()
        var grab = audit => audit.entries.first()
        const user = {
            "Logs":   `${grab}`
        };
        console.log("logs written to .json");
        const data = JSON.stringify(user, null, 4);

        fs.writeFileSync('logs.json', data, (err) => {
            if (err) {
                throw err;
            }
            console.log("logs written to .json");
            message.channel.send('Logged ')
        })}}
        