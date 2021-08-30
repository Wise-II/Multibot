
const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var memory = require("memory");
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
