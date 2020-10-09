const Discord = require ("discord.js");
const client = new Discord.Client;
const config = require ("./config.json");


var prefix = config.prefix;


client.on("ready", () => {
    console.log(`${client.user.username} esta preparado!`);
    client.user.setActivity("Este es el estado!")
});


client.on("message", async message => {
    const args = message.content.slice(prefix.lenght).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();


    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;


    let usuario = message.author


    switch (comando){
        case("!hola"):
               message.reply("Hola, como estas?");
               break;
        case("!adios"):
               message.channel.send("Hasta luego!");
               break;
        case("!riri"):
        message.reply('https://www.youtube.com/watch?v=0RyInjfgNc4');
        break;
        case("!lupis"):
        message.reply('porq lupita se cayo del columpio?');
        break;
       
    }
});


client.login(config.token);

