const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'a!'

const fs = require('fs');

client.commands = new Discord.Collection();

const CommandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of CommandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('Bot is Online.')
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command == 'lore'){
        client.commands.get('lore').execute(message, args);
    } else if (command == 'info'){
        client.commands.get('info').execute(message, args);
    } else if (command == 'ranks'){
        client.commands.get('ranks').execute(message, args);
    }
});

client.login(process.env.token)