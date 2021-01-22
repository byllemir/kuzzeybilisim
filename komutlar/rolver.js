const Discord = require('discord.js');//Syko qwe
const ayarlar = require("../kuzzey.js")


exports.run = async(client, message) => {

if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**Bu İşlem İçin `ROLLERİ_YÖNET` Yetkisine Sahip Olmalısınız.**")

let prefixi = ayarlar.prefix

const user = message.mentions.members.first()
if(!user) return message.channel.send(`**Rolverilecek Kişiyi Etiketleyin Örnek; ${prefixi}rolver @kullanıcı @rol**`)
const rolewqe = message.mentions.roles.first()  
if(!rolewqe) return message.channel.send(`**Kişiye Verilecek Rolü Giriniz Örnek; ${prefixi}rolver @kullanıcı @rol**`)

user.roles.add(rolewqe)

const syko = new Discord.MessageEmbed() 
.setAuthor(message.guild.name, message.guild.iconURL({dynamic: true,}))
.setDescription(`<a:Yldz:792081183562268734>  ${user} **İsimli Kullanıcıya Başarı İle** ${rolewqe} **Rolü Verildi!**`)
.setFooter(`Kullanan: ${message.author.username}`)
.setTimestamp()

message.channel.send(syko) 

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rv", "roleadd", "rolekle", "rol-ver", "rol-ekle", "role-add"] //Syko

  };
  
  exports.help = {
    name: 'rolver',
    description: 'rolverme komutu',
    usage: 'rolver @kullanıcı @rol' //Syko qwe
  };