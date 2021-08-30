const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { Command } = require('@adonisjs/ace')
const chalk = require('chalk');
const moment = require('moment');
const sql = require('sqlite');
const ytdl = require("ytdl-core");
const queue = new Map();
const bot = new Discord.Client();
const handler = require('@tomdev/discord.js-command-handler')
const { ErelaClient, Utils } = require("erela.js");
const { Color, green, magenta, blue } = require('chalk');
const { orange } = require('color-name');
var prefix = "m?"
let sleep = require('js-sleepms');

const wait = require('waait');
client.on('ready', (ready) => { 
  console.log(chalk.blueBright(`
  
  ███╗   ███╗██████╗
  ████╗ ████║██╔══██╗
  ██╔████╔██║██████╦╝
  ██║╚██╔╝██║██╔══██╗
  ██║ ╚═╝ ██║██████╦╝
  ╚═╝     ╚═╝╚═════╝
                                               
                                                                                                       
                                                                                          `));
                                                                                    
                                                                                        console.time('sleep')
                                                                                        setTimeout(() => { console.timeEnd('sleep') }, 100) 
                                                                                        
console.log(chalk.yellow("Executing Core files.."));
sleep.SleepMS(5000);
console.log(chalk.blue("Connecting to Websocket/APIs"));
sleep.SleepMS(5000);
console.log(chalk.magenta("Client Has Booted."));
sleep.SleepMS(5000);
})
var cmdhandler = new handler(client, "/commands", prefix)
client.on("message", (message) => {
    cmdhandler.handleCommand(message)
})
const activities_list = [
  "online...", 
  ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
  
      client.user.setActivity('Help command still doesnt work :( | M?'); 
});
client.on('message', message => {
if (message.mentions.has(client.user)) {
message.channel.send('Prefix is: `m?`')
}
});


client.on('messageDelete', message => {
  const channel1 = message.member.guild.channels.cache.find(ch => ch.name === 'modlog');
  if (!channel1) return;
  const user = message.author;
  console.log(`${message.id} was deleted!`);
  const messageDelete = new Discord.MessageEmbed()
  .setTitle('Message Delete')
  .addField('in channel', message.channel)
  .addField('User', `${message.author}`)
  .addField('Content in message', "`" + "``asciidoc\n" + `[${message.content}]` + "\n`" + "``")
  .setFooter('MultiBot -> Loggging, Deleted')
  .setTimestamp()
  .setColor('#8B0000')
  .setThumbnail(user.displayAvatarURL({ dynamic:true }))
channel1.send(messageDelete)
  // Partial messages do not contain any content so skip them
  if (!message.partial) {
    console.log(`It had content: "${message.content}"`);

    
  }


});


client.config = require('./auth.json')
client.login(client.config.token)
