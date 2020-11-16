module.exports = {
    name: 'help',
    description: 'The help command.',
    execute(message, args) {
        message.channel.send('List of commands: \n Help - This command \n Info - Gives info about the Arkron Bloodline \n Lore - Brings you to the Lore page.')
    }
}