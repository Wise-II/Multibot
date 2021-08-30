const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'awww',
	aliases: ["aww", "m"],
	category: "fun",
	description: 'get a awww from reddit',
	usage: "=meme",
	run: async function (client, command, args, message) {   
    let blacklist = new Discord.MessageEmbed()
  .setColor("#e31212")
  .setDescription(
    "ERROR: You are blacklisted in the database by the owner from using this command."
  );
var blacklistarray =["819173352760803367", "", "", ""];// ID or ID(s) of user you wish to blacklist here
if (blacklistarray.includes(message.author.id))
  return message.channel.send(blacklist);


    const res = await fetch(
      `https://www.reddit.com/r/aww/top/.json`
    );
    const { data } = await res.json();

    const safe = message.channel.nsfw
      ? data.children
      : data.children.filter((post) => !post.data.over_18);
    if (!safe.length)
      return message.channel.send(
        new MessageEmbed()
          .setColor("#3377de")
          .setDescription(`Couldn't get the post. ;-;`)
      );

    const post = safe[Math.floor(Math.random() * safe.length)];

    return message.channel.send(
      new MessageEmbed()
        .setColor("#3377de")
        .setAuthor(
          `${post.data.title}`,
          message.author.displayAvatarURL({ dynamic: true }),
          `https://reddit.com${post.data.permalink}`
        )
        .setImage(post.data.url)
        .setFooter(`👍 ${post.data.ups} | 💬 ${post.data.num_comments}`)
    
   
    )}}