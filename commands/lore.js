module.exports = {
    name: 'lore',
    description: 'The help command.',
    execute(message, args) {
        message.channel.send('The Lore of Arkron: \n https://sites.google.com/view/arkronguide/lore?authuser=0')
    }
}