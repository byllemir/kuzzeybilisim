const Discord = require("discord.js");
exports.run = (client, message, args) => {

  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send("Bu komutu kullanmak için **mesajları yönet** yetkisine sahip olmalısın.");
  let mesajid = args[0];
  let tepki = args[1];
  const emojiadi = args.slice(1).join(" ");
  const emoji = message.guild.emojis.cache.find(a => a.name == emojiadi);
  if (!args[0]) return message.channel.send("Bir mesaj IDsi gir.");
  if (!args[1]) return message.channel.send("Bir emoji isimi gir.");
  message.channel.messages.fetch({ around: mesajid, limit: 1 }).then(msg => {
    const mesaj = msg.first();
    mesaj.react(`${emoji.id}`).then(message.channel.send(`Tepki başarıyla eklendi.`))
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["tepkiekle", "react"],
  permLevel: 0
};
exports.help = {
  name: "tepki",
  description: "Mesaja tepki ekler",
  usage: "tepki <mesaj id> <emoji ismi>"
};