// const {MessageEmbed} = require('discord.js')
// module.exports={
//     name: 'giveaway',
//     description: 'Create a simpel giveaway',
//     usage: '<time> <prize>',
//     category: 'fun',
//     run: async(bot,message,args)=>{
//         let timev = message.content.slice(bot,prefix.length+9)
//         if(!timev) return message.channel.send('You did not specify your time in MS!')
//         let time = parseInt(timev,10)
//         if(time<= 15000){
//             return message.channel.send('Your time in ms has to be longer then 15 seconds! (15000 MS)')
//         }
//         let prize = message.content.slice(bot.prefix.length+9+time.length)
//         if(!prize) return message.channel.send("No prize was specified!")
//         else{
//             message.channel.send(prize)
//         }
//     }
// }