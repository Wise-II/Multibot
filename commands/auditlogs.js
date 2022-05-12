
const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = import('chalk');
const Discord = import('discord.js');
const client = new Discord.Client();
const dynamic = new Discord.Client();
const fs = import('fs');
var memory = import("memory");
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
        