module.exports = {
    name: 'help',
    description: 'The help command.',
    execute(message, args){
        message.channel.send('List of commands: ',
        'help - This command')
    }
}