const Discord = require('discord.js');
const ayarlar = require('../kuzzey.js')
exports.run = (client, message, args) => {
 
  let knaladi = args[0]
  if(!knaladi) return message.channel.send(`Katagori Oluşturmam İçin Bir İsim Girmelisin. `)
 
message.guild.channels.create(knaladi, {type: 'category'})
 
  message.channel.send(`Başarıyla \`${knaladi}\` adında bir katagori oluşturuldu.`)
 
};
//codare
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kategorioluştur'],
  permLevel: 0
};
 
exports.help = {
  name: 'kategori-oluştur'
};
 