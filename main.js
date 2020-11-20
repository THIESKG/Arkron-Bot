const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'a!'

const fs = require('fs');
const { execute } = require('./commands/ranks');

client.commands = new Discord.Collection();

const CommandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of CommandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('Bot is Online.')
});

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.get('779331589557190716')
    if (!channel) return;

    channel.send(`Welcome to Arkron ${member}\n\nWe have one daily mandatory event hosted in #announcements based primarily on Ilum at the moment, and we are doing some jedi sanctum on the side. \n\nWe have non mandatory events hosted in #events, you can find the schedule for them in #events-schedule.\n\nTo find out pretty much everything about Arkron you can view #guides and rules are located in #rules. \n\nIf your wondering why the chats only go back a couple weeks it’s because our old discord was AAed. Someone gained acces to a HRs alt and deleted all the channels. Instead of carrying on there we deduced to create and entirely new discord.`)
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help') {
        client.commands.get('help').execute(message, args);
    } else if (command == 'lore') {
        client.commands.get('lore').execute(message, args);
    } else if (command == 'info') {
        client.commands.get('info').execute(message, args);
    } else if (command == 'ranks') {
        client.commands.get('ranks').execute(message, args);
    }
});

client.login(process.env.token)