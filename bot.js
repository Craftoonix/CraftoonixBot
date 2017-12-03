const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

// clear command
if (command === "clear") {
    async function purge() {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
          return message.reply("Je hebt geen permissies om berichten te clearen.").catch(console.error);
   }
if (isNaN(args[0])) {
    message.channel.send('Doe zoals er gevraagd word: \n  ' + prefix + 'clear <aantal>');
    return;
  }
const fetched = await message.channel.fetchMessages({limit: args[0]});
message.channel.send(fetched.size + ` messages zijn gedeleted`);
message.delete();
message.channel.bulkDelete(fetched.size)
.catch(error => message.channel.send(`Error: ${error}`));
  }
  purge();
  }
});
