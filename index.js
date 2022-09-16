 // - imports all of the modules required to start the bot
const fs = import('fs');
const { token } = "./config.json";
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const discord = require('discord.js');
client.commands = new Collection();
const { Command } = require('@adonisjs/ace')
const chalk = import('chalk');
const newLocal = import('moment');
const moment = newLocal;
const sql = import('sqlite');
const queue = new Map();
const { ErelaClient, Utils } = import("erela.js");
let sleep = import('js-sleepms');
// this is the prefix
var prefix = 'm!'
//end prefix line
var handler = require("@tomdev/discord.js-command-handler")
var cmdhandler = new handler(client, "/commands", prefix)
const wait = import('waait');
client.on('ready', (ready) => { 
  console.log(chalk.blue(`
  
  ███╗   ███╗██████╗
  ████╗ ████║██╔══██╗
  ██╔████╔██║██████╦╝
  ██║╚██╔╝██║██╔══██╗
  ██║ ╚═╝ ██║██████╦╝
  ╚═╝     ╚═╝╚═════╝
                                               
                                                                                                       
                                                                                          `));
                                                                                    
                                                                                        console.time('sleep')
                                                                                        setTimeout(() => { console.timeEnd('sleep') }, 100) 
                                                                                        
    console.log("Executing Core files..");
    sleep.SleepMS(5000);
    console.log("Connecting to Websocket/APIs");
    sleep.SleepMS(5000);
    console.log("Client Has Booted.");
    sleep.SleepMS(5000);

})
// console logging, command handler syntaxes
client.on('ready', () => {
  
      client.user.setActivity("With your feelings|| M!") 
});
client.on('message', message => {
if (message.mentions.has(client.user)) {
message.channel.send("Prefix is: `m?`")
}
});
 // bot user activity, prefix message
 // message delete logging module below
client.on('messageDelete', message => {
  const channel1 = message.member.guild.channels.cache.find(ch => ch.name === 'modlog', 'mod-log','〔📁〕logs');
  if (!channel1) return;
  const user = message.author;
  console.log(`${message.id} was deleted!`);
  const messageDelete = new Discord.MessageEmbed()
  .setTitle('Message Delete')
  .addField('in channel', message.channel)
  .addField('User', `${message.author}`)
  .addField('Content in message', "`" + "``asciidoc\n" + `[${message.content}]` + "\n`" + "``")
  .setFooter('AlteredBot -> Loggging, Deleted Messages')
  .setTimestamp()
  .setColor('#8B0000')
  .setThumbnail(user.displayAvatarURL({ dynamic:false  }))
channel1.send(messageDelete)
  // Partial messages do not contain any content so skip them
  if (!message.partial) {
    console.log(`It had content: "${message.content}"`);

    
  }


});


client.config = require('./auth.json')
client.login(client.config.token)
