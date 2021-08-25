const { Client, Intents } = require('discord.js')
const { DiscordTogether } = require('discord-together');

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const discordTogether = new DiscordTogether(client);
const config = require('./config.json')
const prefix = config.prefix

client.on('ready', () => {
    console.log(`ID: ${client.user.id}\nUsername: ${client.user.tag}`)
})

client.on('messageCreate', async message => {
    if(message.channel.type === 'DM') return;
    if(!message.content.startsWith(prefix)) return;

    const commands = require('./commands.js')
	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();

	switch (command) {
        case 'game':
            commands.game(args, discordTogether, message)
            break;
		default:
    }
})



client.login(config.token)

