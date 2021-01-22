const Discord = require("discord.js");
const client = new Discord.Client();
const data = require('quick.db')

client.conf = {
"token": process.env.TOKEN,
 "prefix": "k!",
  "own": "478184177749983234",
  "oynuyor": "CK Gaming",
  "durum": "dnd"// durumu
}

client.on("message", message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(client.conf.prefix)) return;
  let command = message.content.split(" ")[0].slice(client.conf.prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.yetkiler(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
})

client.on("ready", () => {
  console.log(`Bütün komutlar yüklendi, bot çalıştırılıyor...`);
  console.log(`${client.user.username} ismi ile Discord hesabı aktifleştirildi!`);
  client.user.setStatus(client.conf.durum);
  let mob;
  if(client.conf.durum == "online") mob = "Çevrimiçi";
  if(client.conf.durum == "offline") mob = "Çevrimdışı";
  if(client.conf.durum == "idle") mob = "Boşta";
  if(client.conf.durum == "dnd") mob = "Rahatsız Etmeyin";
  console.log(`Durum ayarlandı: ${mob}!`)
  client.user.setActivity(client.conf.oynuyor);
  console.log(`Oynuyor ayarlandı!`);
})

const db = require("quick.db");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
var prefix = client.conf.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} adet komut yüklenmeye hazır. Başlatılıyor...`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Komut yükleniyor: ${props.help.name}'.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.yetkiler = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if(message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if(message.member.hasPermission("MANAGE_ROLES")) permlvl = 2;
  if(message.member.hasPermission("MANAGE_CHANNELS")) permlvl = 3;
  if(message.member.hasPermission("KICK_MEMBERS")) permlvl = 4;
  if(message.member.hasPermission("BAN_MEMBERS")) permlvl = 5;
  if(message.member.hasPermission("ADMINISTRATOR")) permlvl = 6;
  if(message.author.id === message.guild.ownerID) permlvl = 7;
  if(message.author.id === client.conf.own) permlvl = 8;
  return permlvl;
};

///DOKUNMA





client.login(client.conf.token)
client.on("ready", () => {
  client.channels.cache.get("790639823085895720").join();
})
client.on("message", async message => { 
if (message.content.toLowerCase() === "sa") {
message.react("🇦").then(x => message.react("🇸"))
}})
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'k!qs') {  // İstediğiniz Komut
    msg.member.roles.add('794299506158075974'); //Rolü bir yerde bahsedin sonra sağ tıklayıp İD'sini alın
    msg.reply('Quest Rolünü Başarıyla Aldın.'); //Komutu Yazınca cevap ne yazsın?
  }
});
process.on("unhandledRejection", (reason, promise) => {
});
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Cortex Bot | Aktif!')) // sitenize girdiğinde görebilirsiniz.
app.listen(process.env.PORT, () => console.log('Port ayarlandı: ' + process.env.PORT))