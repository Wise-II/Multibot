const { timeout } = require("async");
const Discord = require('discord.js');

module.exports = {
	name: 'eval',
	aliases: ["e", "snip"],
	category: "developer",
	description: 'run code live through discord',
	usage: ".js eval",
        run: async function (client, command, args, message) {
            if (["652219536132669460",].indexOf(message.author.id) === -1) return message.channel.send(`Access has been deined \`<@${message.author.id}>\`. \nReason: \nAccess level insufficent`);
            if (args.length < 1) return message.channel.send("`I can't evaluate nothing!`");
      
            client
                options = {
                    split: {
                        char: "\n",
                        prepend: "`" + "``js\n",
                        append: "`" + "``"
                    }
                };
      
            const match = args[0].match(/--(depth)=(\d+)/);
            const depth = match && match[1] === "depth" ? parseInt(match[2]) : 0;
      
            const content = message.content.split(" ").slice(match ? 2 : 1).join(" ");
            const result = new Promise((resolve) => resolve(eval(content)));
      
            return result.then(output => {
                if (typeof output !== "string") output = require("util").inspect(output, { depth });
                if (output.includes(message.client.token)) output = output.replace(message.client.token, "T0K3N");
                message.channel.send("`" + "``js\n" + output + "`" + "``", options);
            }).catch(err => {
                if (err.stack.includes(message.client.token)) err.stack = err.stack.replace(message.client.token, "T0K3N");
                message.channel.send("`" + "``js\n" + err.stack + "`" + "``", options);
            });
        },
      };
      