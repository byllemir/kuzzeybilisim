const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../kuzzey.js")

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "478184177749983234") return message.channel.send("🚫 Yapımcım Değilsin!")
    
    message.channel.send(`Bot yeniden başlatılıyor...`).then(msg => {
    console.log(`BOT: Yeniden Başlatılıyor.....`);
    process.exit(0);
  })
    
          
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r","reboot","yenile","yeniden başlat"],
permLevel: 0
};

module.exports.help = {
  name: 'reboot',
  description: 'Botunuzu yeniden başlatır....',
  usage: 'reboot'
};