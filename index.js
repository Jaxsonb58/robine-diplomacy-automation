const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Robine Diplomacy Automation online!');
    bot.user.setActivity('Robine Mainframe')
})

bot.on('message', async message => {
    let prefix = 'r!'
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1);

    if(cmd.toLowerCase() === `${prefix}delegate`){
        if(message.member.roles.cache.has('782527050886938665')){
            var delegate = message.mentions.members.first();
            delegate.roles.add('763032080082272296')
            let delegationEmbed = new Discord.MessageEmbed()
            .setTitle('New ~ TRA Delegation')
            .setDescription(`<@${delegate.id}> has been verified to TRA by <@${message.member.id}>.`)
            .setTimestamp()
            .setFooter('Robine Automation', 'https://cdn.discordapp.com/attachments/763040625275830292/782526713245597696/diplo.png')
            message.channel.send({embed: delegationEmbed})
        }
        if(message.member.roles.cache.has('782527053803159553')){
            var delegate = message.mentions.members.first();
            delegate.roles.add('763037210948665356')
            let delegationEmbed = new Discord.MessageEmbed()
            .setTitle('New ~ ROS Delegation')
            .setDescription(`<@${delegate.id}> has been verified to ROS by <@${message.member.id}>.`)
            .setTimestamp()
            .setFooter('Robine Automation', 'https://cdn.discordapp.com/attachments/763040625275830292/782526713245597696/diplo.png')
            message.channel.send({embed: delegationEmbed})
        }
        if(message.member.roles.cache.has('782527047855505408')){
            var delegate = message.mentions.members.first();
            delegate.roles.add('767091800674271272')
            let delegationEmbed = new Discord.MessageEmbed()
            .setTitle('New ~ ANEXO Delegation')
            .setDescription(`<@${delegate.id}> has been verified to ANEXO by <@${message.member.id}>.`)
            .setTimestamp()
            .setFooter('Robine Automation', 'https://cdn.discordapp.com/attachments/763040625275830292/782526713245597696/diplo.png')
            message.channel.send({embed: delegationEmbed})
        }
        if(message.member.roles.cache.has('782503093899624448')){
            var delegate = message.mentions.members.first();
            delegate.roles.add('763919994429505599')
            let delegationEmbed = new Discord.MessageEmbed()
            .setTitle('New ~ Deathwatch Delegation')
            .setDescription(`<@${delegate.id}> has been verified to Deathwatch by <@${message.member.id}>.`)
            .setTimestamp()
            .setFooter('Robine Automation', 'https://cdn.discordapp.com/attachments/763040625275830292/782526713245597696/diplo.png')
            message.channel.send({embed: delegationEmbed})
        }
        if(message.member.roles.cache.has('782503096500355092')){
            var delegate = message.mentions.members.first();
            delegate.roles.add('775170411208900629')
            let delegationEmbed = new Discord.MessageEmbed()
            .setTitle('New ~ Sentinels Delegation')
            .setDescription(`<@${delegate.id}> has been verified to Sentinels by <@${message.member.id}>.`)
            .setTimestamp()
            .setFooter('Robine Automation', 'https://cdn.discordapp.com/attachments/763040625275830292/782526713245597696/diplo.png')
            message.channel.send({embed: delegationEmbed})
        }
    }
})

bot.login(process.env.token)