const Discord  = require("discord.js")

module.exports = {
    game: async function(args, discordTogether, message) {
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.reply('Please, mention channel or write valid channel id!')
        if(channel.type !== 'GUILD_VOICE') return message.reply('Please, choose a voice channel!')

        if(!args[1]) return message.reply('Please, write a game! (youtube, chess, fishing, betrayl, poker)')
        switch (args[1]) {
            case 'poker':
                game = 'poker'
                break;
            case 'youtube':
                game = 'youtube'
                break;
            case 'fishing':
                game = 'fishing'
                break;
            case 'betrayl':
                game = 'betrayl'
                break;
            case 'chess':
                game = 'chess'
                break;
            default:
            return message.reply('Please, write a valid game! (youtube, chess, fishing, betrayl, poker)')
        }

        let channel_id = channel.id

        if(channel_id) {
        discordTogether.createTogetherCode(channel_id, game).then(async invite => {
            const emb = new Discord.MessageEmbed()
            .setAuthor('Click on me to start activity!', '', `${invite.code}`)
            .setDescription(`Created activity in <#${channel_id}>`)
            .setColor('DARK_GREEN')
            return message.channel.send({ embeds: [emb]});
        });
    } else return;
    },

}