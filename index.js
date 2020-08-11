const Discord = require("discord.js");

const bot = new Discord.Client();

const config = require("./package.json");

const token = ;

const atributos = [
  "força",
  " destreza",
  " constituição",
  " intelecto",
  " percepção",
  " carisma",
];

const classes = ["mago", " ladino", " mestre de armas", " sacerdote"];

const raças = ["humano", " anão", " elfo", " orc"];

// pesonagem (nome, idade, altura, genero, peso, naturalidade)
let criação = false;

bot.on("message", (msg) => {
  if (msg.content.toLowerCase() === "!criação" ) {
    criação = true;
    return msg.reply(
      `escolha sua classe !`
    );
  }

  if (criação === true){ {
    if (msg.content.toLowerCase() === "!classe ladino"  ) {
      criação = false;
      return msg.reply("você escolheu Ladino como sua classe !");
    }

    if (msg.content.toLowerCase() === "!classe mago"){
      criação = false;
     return msg.reply("você escolheu Mago como sua classe")}

    if (msg.content.toLowerCase() === "!classe Sacerdote"){
      criação = false;
      return msg.reply("você escolheu Sacerdote como sua classe")}

    if (msg.content.toLowerCase() === "!classe Homem De Armas"){
      criação = false;
      return msg.reply("você escolheu Homem De Armas como sua classe")}
  };
  }
});

bot.on("message", (msg) => {
  if (msg.content === "!classes") {
    return msg.reply(`\n${classes}`);
  }
  if (msg.content === "!atributos") {
    return msg.reply(`\n${atributos}`);
  }
  if (msg.content === "!raças") {
    return msg.reply(`\n${raças}`);
  }
});
bot.on("ready", () => {
  console.log(` Rodando !`);
});

bot.on("message", (msg) => {
  if (msg.content === "!1rolagem3d6") {
    let result1 = Math.random() * (18 - 3) + 3;
    return msg.reply(Math.trunc(result1));
  }
});
// comandos teste
bot.on("message", (msg) => {
  if (msg.content === "lul") return msg.reply(`Ri não`);
  if (msg.content === "a") return msg.reply(`b`);
  if (msg.content === ) return msg.reply(`vonaum`)
  if (msg.content === ) return msg.reply (`benfica`);

  //limpeza e utilitarios
});
bot.login(token);
