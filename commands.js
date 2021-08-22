module.exports = {
    game: async function(args, discordTogether, message) {
        if(!args[0]) return message.reply('Please, write a game! (youtube, chess, fishing, betrayl, poker)')
        switch (args[0]) {
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

        let channel_id = message.member.voice.channelId
        //if(args[1]) channel_id = args[1] // Enabling starting acitivity in specific channel by ID (crashes bot, if have error)

        if(channel_id) {
        discordTogether.createTogetherCode(channel_id, game).then(async invite => {
            return message.channel.send(`Create game in: <#${channel_id}> \n ${invite.code}`);
        });
    } else return;
    },

}