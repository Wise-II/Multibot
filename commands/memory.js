
const { DiscordAPIError } = import("discord.js");
const { format } = import("path");
const chalk = import('chalk');
const Discord = import('discord.js');
//const client = new discord.client();
const fs = import('fs');
var memory = import("memory");
module.exports = {
	name: 'memory-usage',
	aliases: ["memory", "mem"],
	category: "info",
	description: 'Get basic memory info',
	usage: ".Js memory",
	run: async function (client, command, args, message) {
        var mb = memory();
        const user = {
            "memory":   `${mb} MB's in use`
        };
        const data = JSON.stringify(user, null, 4);

fs.writeFileSync('memory.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("Memory Data Written to json");

const { read } = require('./memory.json');
message.channel.send(read)
})}}
