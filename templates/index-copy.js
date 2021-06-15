const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");

bot.commandes = new Discord.Collection();

/*
  ____                                          _   _   _                 _ _           
 / ___|___  _ __ ___  _ __ ___   __ _ _ __   __| | | | | | __ _ _ __   __| | | ___ _ __ 
| |   / _ \| '_ ` _ \| '_ ` _ \ / _` | '_ \ / _` | | |_| |/ _` | '_ \ / _` | |/ _ \ '__|
| |__| (_) | | | | | | | | | | | (_| | | | | (_| | |  _  | (_| | | | | (_| | |  __/ |   
 \____\___/|_| |_| |_|_| |_| |_|\__,_|_| |_|\__,_| |_| |_|\__,_|_| |_|\__,_|_|\___|_|   

*/
fs.readdir("./commands/", (err, files) => {

    if (err) return console.log(err);

    let jsfile = files.filter(file => file.split(".").pop() === "js");
    if (jsfile.length <= 0){
        console.log("No commands to load.");
        return;
    } else {
        console.log( "\n\n" +jsfile.length + " commands loaded\n")
    }

    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`)
        console.log(`${file} loaded`)

        bot.commandes.set(props.config.name, props);
    });
});

/*  
_____                 _     _   _                 _ _           
| ____|_   _____ _ __ | |_  | | | | __ _ _ __   __| | | ___ _ __ 
|  _| \ \ / / _ \ '_ \| __| | |_| |/ _` | '_ \ / _` | |/ _ \ '__|
| |___ \ V /  __/ | | | |_  |  _  | (_| | | | | (_| | |  __/ |   
|_____| \_/ \___|_| |_|\__| |_| |_|\__,_|_| |_|\__,_|_|\___|_|   

*/
fs.readdir("./events/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(file => file.split(".").pop() === "js");
    if (jsfile.length <= 0){
       console.log("No event to load.");
       return;
    } else {
       console.log( "\n" + jsfile.length + " events loaded.\n")
    }

    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`)
        console.log(`${file} loaded`);

        let eventName = file.split(".")[0]
        bot.on(eventName, event.bind(null,bot));
        delete require.cache[require.resolve(`./events/${file}`)]
    });    
});

bot.login(""); //Replace token