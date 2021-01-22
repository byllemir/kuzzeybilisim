const Discord = require("discord.js");
const ms = require("ms");


module.exports.run = async (client, message, args) => {

if(message.channel.type == "dm")  return;
if(message.channel.type !== "text") return;
      let duration = args[0];
      let sure = args[1];
      let sebep = args[2];
      let user = message.author
      let bisi;
	  
	  if (!duration || duration >= '60')
	  {
      return message.reply(`Lütfen, geçerli bir süre belirtiniz.\nÖrnek olarak:!!hatırlat 10 dakika sebep`);
      }

	 if (!sure || !sure == 'saniye' || !sure == 'dakika' || !sure == 'saat' || !sure == 'gün' ) 
	 {
	 return message.reply(`Süre belirtimi hatalı!\nÖrnek olarak: !!hatırlat 10 dakika sebep`)
   }

  if (!sebep) return message.reply('Lütfen, bir sebep belirtiniz.')
	 
	 message.reply(`Hatırlatıcı, başarılı bir şekilde ayarlandı!`)
                 
	  if (sure == 'saniye') bisi = 'seconds'
    if (sure == 'dakika') bisi = 'minutes'
    if (sure == 'saat') bisi = 'hours'
    if (sure == 'gün') bisi = 'days' 
	
      setTimeout(function(){
        let Zamanlayıcı = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Hatırlatma sistemi!`, client.user.displayAvatarURL)
        .addField(`Hey, ${message.author.username}`, `Hatırlaman gereken bir şey var!`)
        .addField(`Hatırlatmamı istediğin şey;`, sebep)

       return user.send(Zamanlayıcı);
      }, ms(`${duration} ${bisi}`));

            return };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hatırlatıcı'],
  kategori: 'kullanıcı',
  permLevel: 0
};

exports.help = {
  name: 'hatırlat',
  category: 'Kullanıcı komutları!',
  description: 'Süre dolduğunda, hatırlatma yapar!',
  usage : 'hatırlat'
};