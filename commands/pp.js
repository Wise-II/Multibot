
const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var memory = require("memory");
module.exports = {
	name: 'dick-size',
	aliases: ["pp", "dick-size"],
	category: "fun",
	description: 'Get pp info',
	usage: ".jspp",
	run: async function (client, command, args, message) {

        message.reply(`Your **peen** size: 8${"=".repeat(Math.floor(Math.random() * 15))}D`);
    }}
