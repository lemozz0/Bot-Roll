const Discord = require("discord.js");

const bot = new Discord.Client();

const config = require("./package.json");

const token = "YOUR ROKEN";

const atributos = [ "força", " destreza", " constituição", " intelecto", " percepção", " carisma"]

const classes = [ "mago", " ladino", " mestre de armas", " sacerdote"]

const raças = [ "humano", " anão", " elfo", " orc"]


bot.on("message", (msg) => {
  if (msg.content === "!classes") {
    return msg.reply(`\n${classes}`)
  }
  if (msg.content === "!atributos") {
    return msg.reply(`\n${atributos}`)
  }
  if(msg.content === "!raças") {
    return msg.reply(`\n${raças}`)
  }
})
bot.on("ready", () => {
  console.log(` Rodando !`)
  });

bot.on("guildcreate", guild => {
    console.log(`entrou ${guild.Name} (id: ${guild.id}). População: ${guild.memberCount} membros! `);
    bot.user.setActivity(`estou em $(bot.guild.size} servidores`)
})

bot.on("message", (msg) => {
  if (msg.content === "!rolagem3d6") {
    let result = Math.random() * (18 - 3) + 3;
    return msg.reply(Math.trunc(result));
  }
  
});

bot.login(token);

