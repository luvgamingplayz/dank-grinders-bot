const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.on('ready', () => {
    console.log('The bot is active')
})

client.on('messageCreate', message => {
    if (message.content === 'heist') {
        message.reply('<#1080278946165305425>')
    }
})

client.login(process.env.TOKEN)
