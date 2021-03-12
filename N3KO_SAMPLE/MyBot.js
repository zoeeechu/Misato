//Code made by Somji18 💗
//sorry bout that was using a template from my old bot as refrence you may add your name if you wish
const Discord = require("discord.js");
const client = new Discord.Client();
const request = require("request");
const cheerio = require("cheerio");
const fetch = require('node-fetch');
const gm = require('gm');
const db = require('quick.db');
const bot = new Discord.Client();
const userID = "427835914052567040"
const Tenor = require("tenorjs").client({
    "Key": "UQUDKNCWAFWP",
    "Filter": "off",
    "Locale": "en_US",
    "MediaFilter": "minimal",
});
//const randomPuppy = require("random-puppy")

// For the .env File 
let dotenv = require('dotenv').config({ path: './.env' })
    //constant Bot VER
const ver = "Ver 3.0";

function catchERR(err, message) {
    client.users.cache.get("427835914052567040").send("There Was a Error at Channel " + message.channel + " In the Guild " + message.guild);
    client.users.cache.get("427835914052567040").send("ERROR ```" + err + "```");
}






client.on("ready", () => {
    try {
        //On Ready Connected as Bot Name and Tag
        console.log("Connected as " + client.user.tag);
        //Get Number of servers connected to
        const numofser = client.guilds.size;
        //Define time to the bot!
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        let uptime = ` ${minutes} min and ${seconds} sec`;
        let countsize = client.guilds.cache.size;


        // Status Message!

        client.user.setPresence({
            activity: { name: `Nya means I love you in in cat speak... I think? Ping: ${uptime} 🍰`, type: 'PLAYING' },
            status: 'idle'
        })





        //Normal way to Console log guild
        client.guilds.cache.forEach((guild) => {
            console.log("Connected to..." + guild.name)


        });

        //Tell me how many servers my bot is connected to!

        console.log("Count " + client.guilds.cache.size)

    } catch (err) {
        catchERR(err, receivedMessage);
    }

});


//If Somemone @Mentions the bot
client.on('message', message => {
    try {
        if (message.mentions.has(client.user)) {

            message.channel.send(".・゜-: ✧ **Oh my! Looks like your having some problems my Prefix is:** `nya` ✧ :-゜・．");

        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }
});



//Process the Prefix
function processCommand(receivedMessage) {

    try {

        let fullCommand = receivedMessage.content.substr(3); // Remove the '/'
        let splitCommand = fullCommand.split(" "); // Split the message up in to pieces for each space
        let primaryCommand = splitCommand[0] || splitCommand[1] // The first word directly after the exclamation is the command
        let arguments = splitCommand.slice(1); // All other words are arguments/parameters/options for the command



        //All the Commands!
        if (primaryCommand == "help") {
            helpCommand(arguments, receivedMessage);
        } else if (primaryCommand == "needlove") {
            loveCommand(arguments, receivedMessage);
        } else if (primaryCommand == "needhelp") {
            HelpCommand(arguments, receivedMessage);
        } else if (primaryCommand == "cat") {
            catCommand(arguments, receivedMessage);
        } else if (primaryCommand == "dog") {
            dogCommand(arguments, receivedMessage);
        } else if (primaryCommand == "neko") {
            nekoCommand(arguments, receivedMessage);
        } else if (primaryCommand == "search") {
            searchCommand(arguments, receivedMessage);
        } else if (primaryCommand == "clear") {
            clearCommand(arguments, receivedMessage);
        } else if (primaryCommand == "icon") {
            iconCommand(arguments, receivedMessage);
        } else if (primaryCommand == "run") {
            runCommand(arguments, receivedMessage);
        } else if (primaryCommand == "sleep") {
            sleepCommand(arguments, receivedMessage);
        } else if (primaryCommand == "drink") {
            drinkCommand(arguments, receivedMessage);
        } else if (primaryCommand == "eat") {
            eatCommand(arguments, receivedMessage);
        } else if (primaryCommand == "cry") {
            cryCommand(arguments, receivedMessage);
        } else if (primaryCommand == "hide") {
            hideCommand(arguments, receivedMessage);
        } else if (primaryCommand == "smile") {
            smileCommand(arguments, receivedMessage);
        } else if (primaryCommand == "hug") {
            hugCommand(arguments, receivedMessage);
        } else if (primaryCommand == "pat") {
            patCommand(arguments, receivedMessage);
        } else if (primaryCommand == "info") {
            infoCommand(arguments, receivedMessage);
        } else if (primaryCommand == "support") {
            supportCommand(arguments, receivedMessage);
        } else if (primaryCommand == "boop") {
            boopCommand(arguments, receivedMessage);
        } else if (primaryCommand == "stab") {
            stabCommand(arguments, receivedMessage);
        } else if (primaryCommand == "cuddle") {
            cuddleCommand(arguments, receivedMessage);
        } else if (primaryCommand == "punch") {
            punchCommand(arguments, receivedMessage);
        } else if (primaryCommand == "bite") {
            biteCommand(arguments, receivedMessage);
        } else if (primaryCommand == "revive") {
            reviveCommand(arguments, receivedMessage);
        } else if (primaryCommand == "slap") {
            slapCommand(arguments, receivedMessage);
        } else if (primaryCommand == "throw") {
            throwCommand(arguments, receivedMessage);
        } else if (primaryCommand == "carry") {
            carryCommand(arguments, receivedMessage);
        } else if (primaryCommand == "happybirthday") {
            HBCommand(arguments, receivedMessage);
        } else if (primaryCommand == "lick") {
            lickCommand(arguments, receivedMessage);
        } else if (primaryCommand == "kiss") {
            kissCommand(arguments, receivedMessage);
        } else if (primaryCommand == "meme") {
            memeCommand(arguments, receivedMessage);
        } else if (primaryCommand == "meme") {
            memeCommand(arguments, receivedMessage);
        } else if (primaryCommand == "rps") {
            rpsCommand(arguments, receivedMessage);
        } else if (primaryCommand == "spy") {
            spyCommand(arguments, receivedMessage);
        } else if (primaryCommand == "dance") {
            danceCommand(arguments, receivedMessage);
        } else if (primaryCommand == "hf") {
            hfCommand(arguments, receivedMessage);
        } else if (primaryCommand == "propose") {
            proCommand(arguments, receivedMessage);
        } else if (primaryCommand == "baka") {
            bakaCommand(arguments, receivedMessage);
        } else if (primaryCommand == "duel") {
            duelCommand(arguments, receivedMessage);
        } else if (primaryCommand == "smh") {
            smhCommand(arguments, receivedMessage);
        } else if (primaryCommand == "trigger") {
            triggerCommand(arguments, receivedMessage);
        } else if (primaryCommand == "gay") {
            gayCommand(arguments, receivedMessage);
        } else if (primaryCommand == "beautiful") {
            beaCommand(arguments, receivedMessage);
        } else if (primaryCommand == "pokemon") {
            pokemonCommand(arguments, receivedMessage);
        } else if (primaryCommand == "blood") {
            bloodCommand(arguments, receivedMessage);
        } else if (primaryCommand == "bobross") {
            bobCommand(arguments, receivedMessage);
        } else if (primaryCommand == "gm") {
            gmCommand(arguments, receivedMessage);
        } else if (primaryCommand == "posterize") {
            posterizeCommand(arguments, receivedMessage);
        } else if (primaryCommand == "robohash") {
            robohashCommand(arguments, receivedMessage);
        } else if (primaryCommand == "glomp") {
            glompCommand(arguments, receivedMessage);
        } else if (primaryCommand == "cookie") {
            cookieCommand(arguments, receivedMessage);
        } else if (primaryCommand == "invite") {
            invCommand(arguments, receivedMessage);
        } else if (primaryCommand == "invite") {
            invCommand(arguments, receivedMessage);
        } else if (primaryCommand == "count") {
            countCommand(arguments, receivedMessage);
        } else {
            receivedMessage.channel.send(
                "I don't understand the command. Try `nya help` ❤️"
            );
        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}
client.on("message", receivedMessage => {
    try {
        if (receivedMessage.author == client.user) {
            // Prevent bot from responding to its own messages
            return;
        }
        //The Prefix!
        if (receivedMessage.content.startsWith("nya")) {
            processCommand(receivedMessage);
        }
        if (receivedMessage.content.startsWith("Nya")) {
            processCommand(receivedMessage);
        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }

});

function countCommand(arguments, receivedMessage) {
    try {
        let countsize = client.guilds.cache.size;
        receivedMessage.channel.send(countsize);
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}




function nekoCommand(arguments, receivedMessage) {

    try {
        receivedMessage.channel.send("Generating ✧").then((sentMessage) => sentMessage.edit("Generating ✧ ✧")).then((sentMessage) => sentMessage.edit("Generating ✧ ✧ ✧"))
        fetch("https://nekos.life/api/v2/img/neko")
            .then(res => res.json())
            .then(json => {
                let nekoembed = new Discord.MessageEmbed()
                    .setColor([255, 153, 255])
                    .setTitle("Nya~!")
                    .setImage(json.url)
                    .setFooter("API: nekos.life ❤️")




                receivedMessage.channel.send(nekoembed);

            });
    } catch (err) {
        catchERR(err, receivedMessage);
    }


}



function invCommand(arguments, receivedMessage) {




    let inviteembed = new Discord.MessageEmbed()
        .setColor([255, 153, 255])
        .setTitle("Heya!")
        .setDescription("My name is N3KO master `~Nya!` Thanks for inviting me!")
        .addField("*:･ﾟ✧", "For commands do `nya help` if you ever forget the prefix just mention me master ~❤", true)
        .setImage("https://i.redd.it/ylc0fhf35wp31.jpg")
        .setFooter("Curls up in your lap and sleeps || Let me know when you need me k ❤️ ");

    receivedMessage.channel.send(inviteembed)


   


}


function cookieCommand(arguments, receivedMessage) {
    try {
        receivedMessage.channel.send("🍪");
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}



function helpCommand(arguments, receivedMessage) {
    try {
        let exembed = new Discord.MessageEmbed()
            .setColor([255, 153, 255])
            .setAuthor("List of Commands!")
            .setDescription("Here's a list of all the commands my prefix is `nya` Master ❤️")
            .addField(" 🍰 Fun", " `cat` `dog` `neko` `meme` `search` `needlove` `needhelp` `cookie` `duel`", false)
            .addField(" 🌸 Actions", " `hug` `pat` `carry` `kiss` `lick` `boop` `cuddle` `punch` `bite` `revive` `slap` `throw` `happybirthday` `stab` `hf` `propose` `glomp` ", false)
            .addField(" 🍓 Emotes", " `run` `sleep` `drink` `eat` `cry` `hide` `smile` `dance` `baka` `gm` `smh` ", false)
            .addField(" 🍪 Moderation", " `clear`  ", false)
            .addField(" 🍡 Other", " `support` ", false)

        .setFooter(
            "Have any Questions? feel free to DM me! ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244", "https://a.thumbs.redditmedia.com/UlK91vWguosDZwdVMaMRBRM6dWk7a3Eqn0jcYMnfxp4.png"
        );


        receivedMessage.channel.send(exembed)
    } catch (err) {
        catchERR(err, receivedMessage);
    }
}

function smhCommand(arguments, receivedMessage) {

    try {

        const rando_imgs = [
            "https://media.tenor.com/images/7590ee04f1c6540b3780d03668f5913b/tenor.gif",
            "https://media.tenor.com/images/5f0d5a0ede1d2bf170b972b937c7f1ba/tenor.gif",
            "https://media.tenor.com/images/2e5879663e6dd33992afc2f18bf45fcb/tenor.gif",
            "https://media1.tenor.com/images/2290e840877d07ab1cbfbdc72853f386/tenor.gif?itemid=6061449",
            "https://media.tenor.com/images/4e20d1185d67d9400f9b33540b246d62/tenor.gif",
            "https://media1.tenor.com/images/76d2ec47ec76fa36b2fce913331ba7e3/tenor.gif?itemid=5533025",
            "https://media1.tenor.com/images/5437fa2925c9eca3697c5807cec168ea/tenor.gif?itemid=12080539",
            "https://i.gifer.com/32Th.gif",
            "https://imgur.com/rOzMzca.gif",




        ];


        let hugembed = new Discord.MessageEmbed()
            .setColor([255, 153, 255])
            .setTitle("Yikes")
            .setDescription(receivedMessage.author.toString() + " Shakes their head. Looks like someone did something stupid")
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
            .setFooter(
                "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
            );
            


        receivedMessage.channel.send(hugembed);
    } catch (err) {
        catchERR(err, receivedMessage);
    }


}





function HelpCommand(arguments, receivedMessage) {
    try {

        var Prob = arguments.join(" ");
        fetch("https://nekos.life/api/v2/img/hug")
            .then(res => res.json())
            .then(json => {
                let nekoembed = new Discord.MessageEmbed()
                    .setColor([255, 153, 255])
                    .setTitle("Don't Worry!")
                    .setThumbnail(`${receivedMessage.author.displayAvatarURL()}`)
                    .setDescription(
                        "Don't Worry! " +
                        receivedMessage.author.toString() +
                        " **" +
                        Prob +
                        "** " +
                        "  Is not a big problem!"
                    )
                    .setImage(json.url)
                    .setFooter("API: nekos.life ❤️")




                receivedMessage.channel.send(nekoembed);

            });
    } catch (err) {
        catchERR(err, receivedMessage);
    }
}

function memeCommand(arguments, receivedMessage) {

    try {



        receivedMessage.channel.send("Generating ✧").then((sentMessage) => sentMessage.edit("Generating ✧ ✧")).then((sentMessage) => sentMessage.edit("Generating ✧ ✧ ✧"))

        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(json => {
                let embed = new Discord.MessageEmbed()
                    .setColor([255, 153, 255])
                    .setTitle("MEME")
                    .addField("Not responible For NSFW memes", json.title, true)
                    //.setDescription(json.title)
                    .setImage(json.url)
                    .setFooter(`🔗: ${json.postLink} | Subreddit: ${json.subreddit}`)
                receivedMessage.channel.send(embed);

            });

    } catch (err) {
        catchERR(err, receivedMessage);
    }


}



function rpsCommand(arguments, receivedMessage) {
    try {

        let replies = ['rock', 'paper', 'scissors'];
        let result = Math.floor((Math.random() * replies.length));

        let uReply = arguments[1];
        if (!uReply) return receivedMessage.channel.send(`Please play with one of these responses: \`${replies.join(', ')}\``);
        if (!replies.includes(uReply)) return receivedMessage.channel.send(`Only these responses are accepted: \`${replies.join(', ')}\``);

        if (replies[result] === uReply) {
            console.log(replies[result]);
            return receivedMessage.channel.send('It\'s a tie! We had the same choice.');
        } else if (uReply === 'rock') {
            console.log(replies[result]);
            if (replies[result] === 'paper') return receivedMessage.channel.send('I won!');
            else return receivedMessage.channel.send('You won!');
        } else if (uReply === 'scissors') {
            console.log(replies[result]);
            if (replies[result] === 'rock') return receivedMessage.channel.send('I won!');
            else return receivedMessage.channel.send('You won!');
        } else if (uReply === 'paper') {
            console.log(replies[result]);
            if (replies[result] === 'scissors') return receivedMessage.channel.send('I won!');
            else return receivedMessage.channel.send('You won!');

        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}

function duelCommand(arguments, receivedMessage) {

    try {

        const attacks = [
            "Spirit Gun",
            "Chidori",
            "Rasengan",
            "Fire fist",
            "Requip",
            "Final flash",
            "Fire Dragon slayer magic",
            "Fourth gear",
            "Detroit SMASH!!!!",
            "Serious Punch",
            "Ice make",
            "Wabisuke",
            "Gear Second",
            "Darkness Flame",
            "Eight Gates",
            "Spirit Bomb",
            "Eye Beam",
            "Arale Kick",
            "Thunder Flash",


        ]

        const img = [

            "https://media2.giphy.com/media/gFYt7JTzRp22k/giphy.gif",
            "https://media1.giphy.com/media/2Pk9newN8fkbu/giphy.gif",
            "https://i.pinimg.com/originals/12/4b/bd/124bbdf8e9981a372c3a9e6f3ada5e05.gif",
            "https://media2.giphy.com/media/uHt1JRMjFXtQs/source.gif",
            "https://media0.giphy.com/media/5LDC9V4DWQtos/source.gif",
            "https://seppukuwatch.files.wordpress.com/2016/01/sao2.gif?w=348",
            "https://qph.fs.quoracdn.net/main-qimg-633311306ece5f2aae067bb7c27ecdd8",
            "https://static.wixstatic.com/media/cf32a0_1a992935f91648e1be154c93c815aea9.gif",
        ]

        var power = Math.floor(Math.random() * 100) + 1;
        var power2 = Math.floor(Math.random() * 100) + 1;
        var power3 = Math.floor(Math.random() * 100) + 1;
        var power4 = Math.floor(Math.random() * 100) + 1;


        const attack1 = attacks[Math.floor(Math.random() * attacks.length)]
        const attack2 = attacks[Math.floor(Math.random() * attacks.length)]
        const attack3 = attacks[Math.floor(Math.random() * attacks.length)]
        const attack4 = attacks[Math.floor(Math.random() * attacks.length)]


        let author1 = receivedMessage.author.username;
        let user = receivedMessage.mentions.users.first();
        if (!user) {
            return receivedMessage.reply('whoops no one to fight!');
        }
        let username = user.username;



        const result = [
            `${author1}`,
            `${username}`,
        ]

        const random2 = result[Math.floor(Math.random() * result.length)]





        if (!user) return receivedMessage.reply("you did not specify who you would like to fight!");


        if (user.id == receivedMessage.author.id) return receivedMessage.reply('you cannot fight yourself!');


        if (user.bot == true)
            return receivedMessage.reply('you cannot fight a bot!');


        var fighter1 = receivedMessage.author.id;
        var fighter2 = user.id;


        var challenged = user.toString();
        receivedMessage.channel.send(`${challenged}, ${author1} has challenged you to a duel. Do you accept the challenge, **yes** or **no?** `)
            .then(() => {
                receivedMessage.channel.awaitMessages(response => response.content == 'yes' && response.author.id == fighter2 || response.content == 'no' && response.author.id == fighter2, {
                        max: 1,
                        time: 60000,
                        errors: ['time'],
                    })
                    .then((collected) => {
                        if (collected.first().content == 'yes' || 'Yes') {
                            receivedMessage.channel.send(`${challenged} has accepted the challenge!`);

                            let embed = new Discord.MessageEmbed()
                                .setColor([255, 153, 255])
                                .setTitle("Battle Results")
                                .setImage(img[Math.floor(Math.random() * img.length)])
                                .addField(`${author1} uses `, attack1 + " It does " + power + " damage!")
                                .addField(`${username} uses `, attack2 + " It does " + power2 + " damage!")
                                .addField(`${author1} uses `, attack3 + " It does " + power3 + " damage!")
                                .addField(`${username} uses `, attack4 + " It does " + power4 + " damage!")
                                .setFooter(`And the winner is ${random2}`, 'https://www.willmacanimation.uk/images/trophy-dark.gif')

                            receivedMessage.channel.send(embed);
                        } else if (collected.first().content == 'no') {
                            receivedMessage.channel.send(`${challenged} Dosent want to duel`);
                        }
                    })
                    .catch(() => {
                        receivedMessage.channel.send(`No response. Fight has been cancelled.`);
                    });
            });

    } catch (err) {
        catchERR(err, receivedMessage);
    }
}




function boopCommand(arguments, receivedMessage) {
    try {


        const rando_imgs = [
            "https://media1.giphy.com/media/LhIfr7B8EvToc/source.gif ",
            'https://66.media.tumblr.com/9a457a43bcae3ebaafda53d7fe6f572d/tumblr_pqjm6cCRt41th206io1_1280.gif ',
            'https://i.imgur.com/N7g7caI.gif ',
            'https://i.pinimg.com/originals/b4/95/fb/b495fb19f4b9a1b04f48297b676c497b.gif ',
            "https://i.imgur.com/CYxJyxQ.gif ",
            "https://steamuserimages-a.akamaihd.net/ugc/266090679684498090/33C087C09F9C1B90C0B4A0AC213F9DB7D8884A47 ",
            "https://i.makeagif.com/media/8-25-2018/1nhMoT.gif ",
            "https://pa1.narvii.com/6034/6230af3e27f0e4e01a1480025d4aeb7d4f36de51_hq.gif ",
            "https://data.whicdn.com/images/262785026/original.gif ",
            "https://1.bp.blogspot.com/-0cu-3g3bio4/Vx_hCIRUcYI/AAAAAAAAcE8/mcV22O8uolst5z3Rd-reMOPhxoLLMeXaACKgB/s1600/Omake%2BGif%2BAnime%2B-%2BKuma%2BMiko%2B-%2BEpisode%2B4%2B-%2BMachi%2BCheek%2BPoke.gif ",

        ];
        const user = receivedMessage.mentions.users.first();






        if (!user) {
            receivedMessage.channel.send("You did not say who you wanted to boop!");
        }

        if (user) {
            let hugembed = new Discord.MessageEmbed()
                .setColor([255, 153, 255])
                .setTitle("Boop!")
                .setDescription(receivedMessage.author.toString() + " Boops " + user.toString())
                .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
                .setFooter(
                    "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
                );

            receivedMessage.channel.send(hugembed);
        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}

function proCommand(arguments, receivedMessage) {
    try {
        const rando_imgs = [
            "https://2.bp.blogspot.com/-wV8ws7SXK18/WUC4MvL7OYI/AAAAAAAA2RM/zOURK4_2EV0B-kep0TL3dsWH2Tchy5qKACKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BRoku%2BDenashi%2BMajutsu%2BKoushi%2Bto%2BAkashic%2BRecords%2B-%2BEpisode%2B11%2B-%2BSistine%2BReceives%2BProposal.gif",
            'https://thumbs.gfycat.com/BouncyGiantBlackcrappie-small.gif',
            'https://media1.tenor.com/images/fadbb1e93dcff1bcccf14b5b1a1db5f3/tenor.gif?itemid=5605361',
            'https://pa1.narvii.com/6403/693119c5a0088971f56cea0fa41f1d8372ba284d_hq.gif',
            'https://i.pinimg.com/originals/7c/4c/0a/7c4c0a25dae1b5264552da3a8d226feb.gif',
            'https://lh3.googleusercontent.com/proxy/A9PspYrOUqi4fSVWmNXQtesQe2iNJNlbfYUnepU2jVWEl_DTipUj0YepJWhzIHVFjXxXY1QSHBxGHaXwePeLOQZN1fYjoXzMKYoIh-HeEt3ltwRLL_8motz569ntkD26ll1fznNq0sJ71JxzlQ8rG1kzwZFezw',


        ];
        const user = receivedMessage.mentions.users.first();




        if (!user) {
            receivedMessage.channel.send("You did not say who you wanted to propose to!");
        }

        if (user) {
            let hugembed = new Discord.MessageEmbed()
                .setColor([255, 153, 255])
                .setTitle("❤️Congrats❤️")
                .setDescription(receivedMessage.author.toString() + " proposes to " + user.toString())
                .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
                .setFooter(
                    "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
                );

            receivedMessage.channel.send(hugembed);
        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}

function hfCommand(arguments, receivedMessage) {
    try {

        const rando_imgs = [
            "https://media.giphy.com/media/cAiBXaCjbHTry/giphy.gif",
            'https://i.imgur.com/gYRdIJy.gif?noredirect',
            'https://i.imgur.com/rvBVoey.gif',
            "https://media1.giphy.com/media/10LKovKon8DENq/source.gif",
            "https://media1.tenor.com/images/0cca874255b4b2d0bd3eb228f7edb356/tenor.gif?itemid=9227866",
            "https://media1.tenor.com/images/7b1f06eac73c36721912edcaacddf666/tenor.gif?itemid=10559431",
            "https://media1.tenor.com/images/ce85a2843f52309b85515f56a0a49d06/tenor.gif?itemid=14137077",
            "https://lh6.googleusercontent.com/hIRp_xCGjt6x5H5GSu9odKA9WPagzrMYPtT-Ow-Nte0AeHoMY4MUTlnxrZkJK248JAqNiBVi_9iaU3eYS2bWXtcdJFjsnrAV8i2H_iN5pjWWHDN6djKm2E-h3MQMUvM2DkoO3M7e",
            "https://static.zerochan.net/Cardcaptor.Sakura%3A.Clear.Card-hen.full.2386682.gif",
            "https://thumbs.gfycat.com/BreakableMessyHarrierhawk-size_restricted.gif",
            "https://i.pinimg.com/originals/d1/e3/64/d1e3645a131c4bf196d313552befaef1.gif",
            "https://data.whicdn.com/images/330723767/original.gif",
            'https://i.imgur.com/yABlsid.gif',
            'https://i.pinimg.com/originals/fc/b1/44/fcb1446b74166b0860ace50ed8b33686.gif',
            'https://1.bp.blogspot.com/-zCYOY8ef-Ro/WfUW-iO8Y5I/AAAAAAAA-MM/uQYRw57PmYM_pjl8kJQDAs1EKLB_-2CKgCKgBGAs/s1600/Omake+Gif+Anime+-+Love+Live%2521+Sunshine%2521%2521+S2+-+Episode+4+-+Yoshiko+Mari+High+Five.gif',
            "https://i.pinimg.com/originals/a2/27/e0/a227e02b4a4f69a97ed71122d5d0e325.gif",
            "https://i.pinimg.com/originals/35/8a/e6/358ae6fd51ceba384b41ef97b8892488.gif",
            "https://media1.tenor.com/images/9730876547cb3939388cf79b8a641da9/tenor.gif?itemid=8073516",
            "https://media1.tenor.com/images/158d9c6ce5698ebac6e2743acaef4c6a/tenor.gif?itemid=5151624",
            "https://media2.giphy.com/media/gQ8qWas3GxlPq/giphy.gif",
            "https://i.kym-cdn.com/photos/images/newsfeed/000/424/720/dc1.gif",
        ];
        const user = receivedMessage.mentions.users.first();





        if (!user) {
            receivedMessage.channel.send("You did not say who you wanted to High Five!");
        }

        if (user) {
            let hfembed = new Discord.MessageEmbed()
                .setColor([255, 153, 255])
                .setTitle("High Five!")
                .setDescription(receivedMessage.author.toString() + " High five's " + user.toString())
                .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
                .setFooter(
                    "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
                );

            receivedMessage.channel.send(hfembed);
        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}


function danceCommand(arguments, receivedMessage) {
    try {
        const rando_imgs = [
            "https://media.giphy.com/media/mJIa7rg9VPEhzU1dyQ/giphy.gif",
            'https://media2.giphy.com/media/W6dHvprT7oks6BpX5R/giphy.gif',
            'https://media1.tenor.com/images/8fdcda26512797826631511017a11f93/tenor.gif?itemid=9765182',
            "https://media.giphy.com/media/oTiMS5tKgDSKY/giphy.gif",
            "https://i.kym-cdn.com/photos/images/newsfeed/001/115/816/936.gif",
            "https://pa1.narvii.com/6180/973298f87c98d5ff4bdbee60e028495d6e885d35_hq.gif",
            "https://thumbs.gfycat.com/NauticalReflectingArcticseal-size_restricted.gif",
            "https://i.gifer.com/Afdv.gif",
            "https://i.kym-cdn.com/photos/images/newsfeed/001/397/910/b1c.gif",
            "https://media.giphy.com/media/HZboJ5Pkti9k4/giphy.gif",
            "https://i.imgur.com/zmUyr5b.gif",
            "https://cdn64.picsart.com/189798505001201.gif?to=min&r=640",
            "https://i.imgur.com/YbdJb5Z.gif",
            "https://thumbs.gfycat.com/FragrantWelllitAustraliankestrel-size_restricted.gif",
            "https://data.whicdn.com/images/231461724/original.gif",
            "https://i.kym-cdn.com/photos/images/newsfeed/000/984/780/778.gif",
            "https://media.discordapp.net/attachments/324558556005400576/344690594968502282/clapdance.gif?width=400&height=225",
            "https://i.gifer.com/8XQR.gif",
            "https://i.kym-cdn.com/photos/images/newsfeed/001/119/596/cc5.gif",
            "https://media.giphy.com/media/3iBcQg9BTCSHBYiHsw/giphy.gif",
            "https://i.pinimg.com/originals/9b/89/dd/9b89ddf1522e582dad4fd7950f0a62be.gif",
            "https://bestanimations.com/Music/Dancers/anime-dancing-girls/anime-kawaii-cute-dance-animated-gif-image-13.gif",
            "https://thumbs.gfycat.com/FittingDizzyHornedviper-small.gif",

        ];


        let hugembed = new Discord.MessageEmbed()
            .setColor([255, 153, 255])
            .setTitle("Woahhhhhh")
            .setDescription(receivedMessage.author.toString() + " Starts Dancing (someone's happy!) ")
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
            .setFooter(
                "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
            );



        receivedMessage.channel.send(hugembed);

    } catch (err) {
        catchERR(err, receivedMessage);
    }


}

function bakaCommand(arguments, receivedMessage) {
    try {

        fetch("https://nekos.life/api/v2/img/baka")
            .then(res => res.json())
            .then(json => {
                let nekoembed = new Discord.MessageEmbed()
                    .setColor([255, 153, 255])
                    .setTitle("BAKA!")
                    .setDescription(receivedMessage.author.toString() + " Is mad")
                    .setImage(json.url)
                    .setFooter("API: nekos.life ❤️")




                receivedMessage.channel.send(nekoembed);

            });

    } catch (err) {
        catchERR(err, receivedMessage);
    }


}

function lickCommand(arguments, receivedMessage) {
    try {
        const rando_imgs = [
            "https://media.giphy.com/media/kVDaetFZqnDXi/giphy.gif",
            'https://media1.tenor.com/images/c4f68fbbec3c96193386e5fcc5429b89/tenor.gif?itemid=13451325',
            'https://media2.giphy.com/media/12MEJ2ArZc23cY/source.gif',
            "https://media1.tenor.com/images/efd46743771a78e493e66b5d26cd2af1/tenor.gif?itemid=14002773",
            "https://thumbs.gfycat.com/PopularSociableAmericanredsquirrel-size_restricted.gif",
            "https://i.pinimg.com/originals/e6/1d/a7/e61da774938e4f209818edcbc0d4a671.gif",
            "https://pa1.narvii.com/7150/ec41cd480f0424b8f89eb907f608e51a5374b263r1-960-540_hq.gif",
            "https://i.kym-cdn.com/photos/images/newsfeed/001/334/768/fbc.gif",
            " ",
            "https://media1.tenor.com/images/fc0ef2ba03d82af0cbd6c5815c3c83d5/tenor.gif?itemid=12141725",
            "https://i.gifer.com/JQm4.gif",
            "https://i.kym-cdn.com/photos/images/newsfeed/000/984/223/3cf",
            "https://cdn.awwni.me/ml0q.gif",
            "https://media1.tenor.com/images/0ce34500facf2ada86307bb740a03dfd/tenor.gif?itemid=5567738",
            "https://i.gifer.com/REfi.gif",
            "https://pa1.narvii.com/5841/4dc04a90e3f2192d807acb33863515f07b9d4e05_hq.gif",
            "https://steamuserimages-a.akamaihd.net/ugc/253717471674432953/55D106FDAC04F006257E89D5C7A983AD2A8D4B9B/",
            "https://thumbs.gfycat.com/LeafyRectangularDromaeosaur-small.gif",
            "https://pa1.narvii.com/6516/d3405e99f2b6fad17419632c10601157beed1150_hq.gif",

        ];
        const user = receivedMessage.mentions.users.first();




        if (!user) {
            receivedMessage.channel.send("You did not say who you wanted to lick!");
        }

        if (user) {
            let lickembed = new Discord.MessageEmbed()
                .setColor([255, 153, 255])
                .setTitle("ummm...")
                .setDescription(receivedMessage.author.toString() + " Licks " + user.toString() + " I guess " + receivedMessage.author.toString() + " is a cat!")
                .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
                .setFooter(
                    "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
                );

            receivedMessage.channel.send(lickembed);
        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}



function HBCommand(arguments, receivedMessage) {
    try {

        const user = receivedMessage.mentions.users.first();


        if (!user) {
            receivedMessage.channel.send("You did not say who you wanted to say Happy Birthday to!");
        }

        if (user) {
            let HBembed = new Discord.MessageEmbed()
                .setColor([255, 153, 255])
                .setTitle(" 🎉 HAPPY BIRTHDAY! 🎉")
                .setDescription(receivedMessage.author.toString() + " Says HappyBirthday to " + user.toString() + " ,have a amazing BDAY! ")
                .setImage("https://data.whicdn.com/images/239672358/original.gif")
                .setFooter(
                    "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
                );

            receivedMessage.channel.send(HBembed);
        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }
}



function carryCommand(arguments, receivedMessage) {
    try {
        const rando_imgs = [
            "https://thumbs.gfycat.com/MaleAppropriateArmyant-size_restricted.gif",
            'https://66.media.tumblr.com/5195d5ef29f0bdd8ac0efcfe55ab3fd8/tumblr_pk543vbGDe1v33vm0_540.gif',
            'https://media1.tenor.com/images/35190058c9fc801b1c6b12e287cf67e0/tenor.gif?itemid=12719633',
            'https://media1.tenor.com/images/67d48ba7f5cee0211559c0778f32e83f/tenor.gif?itemid=6041290',
            'https://media1.tenor.com/images/ec816142b9f9b05992c5a715d0c4ff47/tenor.gif?itemid=9631718',
            'https://media1.tenor.com/images/35165193c9d4abaf3ce2efab00de851e/tenor.gif?itemid=10461278',
            'https://media1.tenor.com/images/b007141028c7ad90e19bce4dfc7a0a62/tenor.gif?itemid=10468730',
            'https://media1.tenor.com/images/c6bfeb45be746cbbbc3b0b642d820951/tenor.gif?itemid=5482825',
            'https://media1.tenor.com/images/67d48ba7f5cee0211559c0778f32e83f/tenor.gif?itemid=6041290',
            'https://i.imgur.com/JZEfM3z.gif',
            'https://i.pinimg.com/originals/4d/ef/9a/4def9a885bea5db2c56432454b03c707.gif',
            'https://i.pinimg.com/originals/03/b7/cd/03b7cd8f0e3a7878116261852a37ecd6.gif',
            'https://i.imgur.com/gazP75R.gif',
            'https://i.pinimg.com/originals/8b/f4/79/8bf479fc3bea04b7aeb59e2718a4d254.gif',
            'https://pa1.narvii.com/6449/3451cac0fb280d415669d36e741038e670522e1d_hq.gif',
            'https://media1.tenor.com/images/c9fdb8fb394850671c8b0d18ad6dad9f/tenor.gif?itemid=12461359',
            'https://media1.tenor.com/images/3ec15d5d0b5066cfbdf8b58b6bbfa070/tenor.gif?itemid=15752828',

        ];
        const user = receivedMessage.mentions.users.first();





        if (!user) {
            receivedMessage.channel.send("You did not say who you wanted to carry!");
        }

        if (user) {
            let carryembed = new Discord.MessageEmbed()
                .setColor([255, 153, 255])
                .setTitle("Awwwe ❤️")
                .setDescription(receivedMessage.author.toString() + " Carries " + user.toString() + "❤️")
                .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
                .setFooter(
                    "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
                );
            receivedMessage.channel.send(carryembed);
        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}

function glompCommand(arguments, receivedMessage) {

    try {
        const rando_imgs = [
            "https://i.imgur.com/QJbBsDJ.gif",
            'https://gifimage.net/wp-content/uploads/2017/09/anime-glomp-gif.gif',
            'https://gifimage.net/wp-content/uploads/2017/09/anime-glomp-gif-13.gif',
            'https://gifimage.net/wp-content/uploads/2017/09/anime-glomp-gif-6.gif',
            'https://media1.tenor.com/images/11889c4c994c0634cfcedc8adba9dd6c/tenor.gif?itemid=5634578',
            'https://media1.tenor.com/images/a10ac0476dbdaa673f292991da470373/tenor.gif?itemid=5465574',
            'https://media1.tenor.com/images/c67e9d0cf6b9126540c4e490bacbceee/tenor.gif?itemid=4127486',
            'https://media1.tenor.com/images/027bcce27f4dad72af005ecc04ecb3db/tenor.gif?itemid=17156325',
            'https://media1.tenor.com/images/2bb481bceb79b50e843a6f342f62600d/tenor.gif?itemid=9043782',

        ];
        const user = receivedMessage.mentions.users.first();




        if (!user) {
            receivedMessage.channel.send("You did not say who you wanted to glomp!");
        }

        if (user) {
            let carryembed = new Discord.MessageEmbed()
                .setColor([255, 153, 255])
                .setTitle("Weeeeeeee")
                .setDescription(receivedMessage.author.toString() + " Glomps " + user.toString() + " Cute! ❤️")
                .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
                .setFooter(
                    "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
                );

            receivedMessage.channel.send(carryembed);
        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}



function throwCommand(arguments, receivedMessage) {
    try {

        const user = receivedMessage.mentions.users.first();
        const rando_imgs = [
            "https://media1.tenor.com/images/acf6d9b7678964a6644642eaccb641ae/tenor.gif?itemid=5204236",
            'https://i.chzbgr.com/full/8545887232/h0FEBB8F7/loli-throwing-should-be-an-olympic-sport',
            'https://animereview829003141.files.wordpress.com/2019/04/kazuma-throwing-darkness.gif?w=364',
            'https://media1.tenor.com/images/aa111f4dfda4a2534d1fdc2fe37df513/tenor.gif?itemid=5140211',
            'https://media1.tenor.com/images/812b85c276f850ca7bb6a152045815bd/tenor.gif?itemid=9942951',
            'https://i.gifer.com/88gP.gif',


        ];



        if (!user) {
            receivedMessage.channel.send("You did not say who you wanted to throw!");
        }

        if (user) {
            let throwembed = new Discord.MessageEmbed()
                .setColor([255, 153, 255])
                .setTitle("Wai-")
                .setDescription(receivedMessage.author.toString() + " Throws " + user.toString() + "out the window!")
                .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
                .setFooter(
                    "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
                );
            receivedMessage.channel.send(throwembed);
        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}

function kissCommand(arguments, receivedMessage) {

    const user = receivedMessage.mentions.users.first();
    try {

        if (!user) {
            receivedMessage.channel.send("You did not say who you wanted to kiss!");
        }

        if (user) {
            fetch("https://nekos.life/api/v2/img/kiss")
                .then(res => res.json())
                .then(json => {
                    let nekoembed = new Discord.MessageEmbed()
                        .setColor([255, 153, 255])
                        .setTitle("Mwau! 😍")
                        .setDescription(receivedMessage.author.toString() + " Kisses " + user.toString() + "adorable")
                        .setImage(json.url)
                        .setFooter("API: nekos.life ❤️")

                    receivedMessage.channel.send(nekoembed);

                });

        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}


function slapCommand(arguments, receivedMessage) {


    const user = receivedMessage.mentions.users.first();

    try {

        if (!user) {
            receivedMessage.channel.send("You did not say who you wanted to Slap!");
        }

        if (user) {
            fetch("https://nekos.life/api/v2/img/slap")
                .then(res => res.json())
                .then(json => {
                    let nekoembed = new Discord.MessageEmbed()
                        .setColor([255, 153, 255])
                        .setTitle("Oof!")
                        .setDescription(receivedMessage.author.toString() + " Slaps " + user.toString())
                        .setImage(json.url)
                        .setFooter("API: nekos.life ❤️")






                    receivedMessage.channel.send(nekoembed);
                });

        }

    } catch (err) {
        catchERR(err, receivedMessage);
    }



}

function gmCommand(arguments, receivedMessage) {
    const rando_imgs = [
        "https://pa1.narvii.com/6014/55fca849be08e4c1d7e7b7184e9298a19994edd7_hq.gif",
        'https://media2.giphy.com/media/LgHAAbUQc0WGI/source.gif',
        "https://cdn55.picsart.com/164790536001202.gif",
        'https://media1.tenor.com/images/30622aec7e7e49846cc4aa62d0a91838/tenor.gif?itemid=14108895',
        'https://i.pinimg.com/originals/6d/b1/74/6db1743554884957955f61858d540300.gif',
        'https://media0.giphy.com/media/5PaawIcdpP2Ug/source.gif',
        'https://cdn45.picsart.com/173605672000201.gif?to=min&r=640',
        'https://i.chzbgr.com/original/8760424704/h8712F8E5/owning-a-cat',
        'https://i.imgur.com/VMBctEi.gif',
        'https://media1.tenor.com/images/ca77ddb7bf800e0d1ee2812e33087cfd/tenor.gif?itemid=17011017',
        'https://i.gifer.com/SYb4.gif',
        'https://media3.giphy.com/media/mNOAVxXFrcoOk/giphy.gif',
        'https://media1.tenor.com/images/725ff565ef92c131e232c08918a8d754/tenor.gif?itemid=9332461',
        'https://media.moddb.com/cache/images/groups/1/1/84/thumb_620x2000/Yukihira.gif',

    ];

    try {

        let gmembed = new Discord.MessageEmbed()
            .setColor([255, 153, 255])
            .setTitle("Hello!")
            .setDescription(receivedMessage.author.toString() + " Says Good Morning! ")
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
            .setFooter(
                "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
            );



        receivedMessage.channel.send(gmembed);

    } catch (err) {
        catchERR(err, receivedMessage);
    }


}

function reviveCommand(arguments, receivedMessage) {

    const user = receivedMessage.mentions.users.first();

    const rando_imgs = [
        'https://media1.tenor.com/images/2b52a0d8b82a38d02c2b669890201536/tenor.gif?itemid=15856124',
        'https://vignette.wikia.nocookie.net/swordartonline/images/9/9c/Healing_magic.gif/revision/latest?cb=20140201121713',
        'https://media1.tenor.com/images/f20919b6acdacf2522b7e434dabc1ec3/tenor.gif?itemid=14731744',
        'https://i.imgur.com/nqTk68S.gif',
        'https://1.bp.blogspot.com/-Et-T5NuJc_c/WXpTHXlITFI/AAAAAAAA46c/1Cebhljkd7A_5RoXuwhZwR-tPYBGeVkawCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BIsekai%2BShokudou%2B-%2BEpisode%2B4%2B-%2BFardania%2BElf%2BHeals.gif',
        'https://data.whicdn.com/images/33776258/original.gif',
        'https://thumbs.gfycat.com/AnnualShrillCondor-small.gif',

    ];





    try {
        if (!user) {
            receivedMessage.channel.send("You did not say who you wanted to revive");
        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }
    try {
        if (user) {
            let resembed = new Discord.MessageEmbed()
                .setColor([255, 153, 255])
                .setTitle("Woosh!")
                .setDescription(receivedMessage.author.toString() + " Revives " + user.toString() + "what a good teammate!")
                .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
                .setFooter(
                    "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
                );

            receivedMessage.channel.send(resembed);
        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}

function stabCommand(arguments, receivedMessage) {
    const user = receivedMessage.mentions.users.first();


    const rando_imgs = [
        "https://thumbs.gfycat.com/EmotionalCompleteGourami-size_restricted.gif",
        'https://i.imgur.com/yemXXT7.gif',
        'https://media3.giphy.com/media/VL87txURjAknK/source.gif',
        'https://media1.tenor.com/images/187261716f85db91ad1bf6a91d7e2975/tenor.gif?itemid=10992148',
        'https://pa1.narvii.com/6486/e0ebcbf7bfa31ea7569cba18d23ddc54a8636413_hq.gif',
        'https://i.imgur.com/3LDA7rS.gif',

    ];


    try {
        if (!user) {
            receivedMessage.channel.send("You did not say who you wanted to Stab!");
        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }
    try {
        if (user) {
            let stabembed = new Discord.MessageEmbed()
                .setColor([255, 153, 255])
                .setTitle("Yikes!")
                .setDescription(receivedMessage.author.toString() + " Stabs! " + user.toString() + " they're bleeding")
                .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
                .setFooter(
                    "If any Image is broken please DM me:" 
                );
            receivedMessage.channel.send(stabembed);
        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}


function biteCommand(arguments, receivedMessage) {

    const user = receivedMessage.mentions.users.first();
    const rando_imgs = [
        "https://media1.tenor.com/images/d97e4bc853ed48bf83386664956d75ec/tenor.gif?itemid=10364764",
        'https://media0.giphy.com/media/OqQOwXiCyJAmA/source.gif',
        'https://media1.tenor.com/images/2440ac6ca623910a258b8616704850f0/tenor.gif?itemid=7922565',
        'https://media1.tenor.com/images/6b42070f19e228d7a4ed76d4b35672cd/tenor.gif?itemid=9051585',
        "https://media.tenor.com/images/ab0bbcf15e9b58f6817d4473875376c4/tenor.gif",
        "https://media.tenor.com/images/777029607cf365f58e8b8ac57d548f19/tenor.gif",
        "https://media.tenor.com/images/8dcb92c129d419af60ae0a819c2b2624/tenor.gif",
        "https://media.tenor.com/images/084502420b7268569a3f52410d99598c/tenor.gif",
        "https://media.tenor.com/images/435a23e4b93744acb8bc28feb8b66cc0/tenor.gif",
        "https://media.tenor.com/images/5aec5f5ffa7de54f804e67474964fc90/tenor.gif",
        "https://media.tenor.com/images/b9fed9939f045cc5e17a66b6a99ab532/tenor.gif",
        "https://media.tenor.com/images/616dcf3690e7edfac70c0e02c6d73559/tenor.gif",
        "https://media.tenor.com/images/c7a2cae8cc126c2100aa6967cc379e99/tenor.gif",
        "https://media.tenor.com/images/b0289411b64d835dc4c2dfcd9c94c37d/tenor.gif",
        "https://media.tenor.com/images/638ecf3fc489a221897832479edd70eb/tenor.gif",
        "https://media.tenor.com/images/f9bba4a32a2f9bde7faa8c334aeaa4e5/tenor.gif",
        "https://media.tenor.com/images/99f4a65efa96d2f2dbeaf13ce792c97e/tenor.gif",
        "https://media.tenor.com/images/1c2d5efacdf6981d46370bc83cda86c8/tenor.gif",
        "https://media.tenor.com/images/e09331b3760ca7a14ffbe00c939c9f5d/tenor.gif",


    ];



    try {
        if (!user) {
            receivedMessage.channel.send("You did not say who you wanted to Bite!");
        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }
    try {
        if (user) {


            let biteembed = new Discord.MessageEmbed()
                .setColor([255, 153, 255])
                .setTitle("Nom!")
                .setDescription(receivedMessage.author.toString() + " Bites " + user.toString() + " Awwwe Kawaii!")
                .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
                .setFooter(
                    "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
                );
            receivedMessage.channel.send(biteembed);

        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}


function cuddleCommand(arguments, receivedMessage) {

    try {

        const user = receivedMessage.mentions.users.first();


        if (!user) {
            receivedMessage.channel.send("You did not say who you wanted to Slap!");
        }

        if (user) {
            fetch("https://nekos.life/api/v2/img/cuddle")
                .then(res => res.json())
                .then(json => {
                    let nekoembed = new Discord.MessageEmbed()
                        .setColor([255, 153, 255])
                        .setTitle("Awwwe ❤️")
                        .setDescription(receivedMessage.author.toString() + " Cuddles with " + user.toString())
                        .setImage(json.url)
                        .setFooter("API: nekos.life ❤️")

                    receivedMessage.channel.send(nekoembed);
                });
        }




    } catch (err) {
        catchERR(err, receivedMessage);
    }


}

function punchCommand(arguments, receivedMessage) {
    try {
        const rando_imgs = [
            "https://media3.giphy.com/media/11zD6xIdX4UOfS/source.gif",
            'https://media1.tenor.com/images/31686440e805309d34e94219e4bedac1/tenor.gif?itemid=4790446',
            'https://media3.giphy.com/media/XHY2UPgzbaQ6NEtcyw/giphy.gif',
            'https://i.kym-cdn.com/photos/images/original/000/641/427/824.gif',
            'https://thumbs.gfycat.com/ImperfectFrightenedFoal-size_restricted.gif',
            "https://media1.tenor.com/images/4f3603010f0071227affbf2f732d79be/tenor.gif",
            "https://media.tenor.com/images/df65530317816545e3d3754e647597ed/tenor.gif",
            "https://media1.tenor.com/images/2487a7679b3d7d23cadcd51381635467/tenor.gif?itemid=11451829",
            "https://media1.tenor.com/images/965fabbfcdc09ee0eb4d697e25509f34/tenor.gif?itemid=7380310",
            "https://media1.tenor.com/images/55507aea306782b916659085fc062909/tenor.gif?itemid=8932977",
            "https://media1.tenor.com/images/5cb17d1f8a959f43779503cde5246cf4/tenor.gif?itemid=16681456",
            "https://media1.tenor.com/images/7d30b4368d3e7657c9a3de17ac9eb0fb/tenor.gif?itemid=17075114",
            'https://media1.tenor.com/images/4347a6eabfcbc09c3fbd80e47a99d6fc/tenor.gif?itemid=16338443',
            "https://media1.tenor.com/images/d7d52d0592bbc77bd5c629c2132c1b33/tenor.gif?itemid=9409159",
            "https://media1.tenor.com/images/43e2e1f4c1451171a0d3fb49c6653d51/tenor.gif?itemid=16277744",
            'https://media1.tenor.com/images/2efcac044a4f9f2377b118b1cc6282cb/tenor.gif?itemid=13142576',
            'https://media1.tenor.com/images/9a451389cdd08e8e1912aa505cf6a218/tenor.gif?itemid=10134908',
            'https://media1.tenor.com/images/4e1c688f7666adb0f68bb4995e47e0ef/tenor.gif?itemid=16634439',
            'hhttps://media1.tenor.com/images/ec26c8744176e4f0ef7e737e4cb493bd/tenor.gif?itemid=17346570',
            'https://media1.tenor.com/images/b2308e16fa5b71c541efdd13dea4f9ba/tenor.gif?itemid=10462739',



        ];
        const user = receivedMessage.mentions.users.first();




        if (!user) {
            receivedMessage.channel.send("You did not say who you wanted to Punch!");
        }

        if (user) {
            let hugembed = new Discord.MessageEmbed()
                .setColor([255, 153, 255])
                .setTitle("OUCH!")
                .setDescription(receivedMessage.author.toString() + " Punches " + user.toString())
                .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
                .setFooter(
                    "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
                );

            receivedMessage.channel.send(hugembed);
        }

    } catch (err) {
        catchERR(err, receivedMessage);
    }
}


function infoCommand(arguments, receivedMessage) {
    try {
        let infoembed = new Discord.MessageEmbed()
            .setColor([255, 153, 255])
            .setTitle("Bot Version 🛠️")
            .setDescription("Bot Version = " + ver)
            .setImage(
                "https://gifimage.net/wp-content/uploads/2018/05/show-by-rock-cyan-gif-4.gif"
            )
            //.setFooter("Bot Version = " + ver);

        receivedMessage.channel.send(infoembed);
    } catch (err) {
        catchERR(err, receivedMessage);
    }
}



function supportCommand(arguments, receivedMessage) {
    try {
        let supportembed = new Discord.MessageEmbed()
            .setColor([255, 153, 255])
            .setTitle("Support 🛠️")
            .setDescription("Need support?") //receivedMessage.author.toString() gets the user who sent the message Tag!S
            .addField("Support Server", "https://discord.gg/kGkw8YT", true)
            .addField("DM the Admin", "₊˚🌙 ꒱ Zoe ༉‧₊˚#2244", true)
            .setImage(
                "https://media1.tenor.com/images/f71bb83e7e50e687db357d25aa96cbc0/tenor.gif?itemid=10015504"
            )
            .setFooter("Bot Version = " + ver);

        receivedMessage.channel.send(supportembed);
    } catch (err) {
        catchERR(err, receivedMessage);
    }
}

function loveCommand(arguments, receivedMessage) { // Put hug command GIFS here

    try {

        fetch("https://nekos.life/api/v2/img/hug")
            .then(res => res.json())
            .then(json => {
                let nekoembed = new Discord.MessageEmbed()
                    .setColor([255, 153, 255])
                    .setTitle("Hugs ❤️")
                    .setDescription("You are beautiful!" + receivedMessage.author.toString())
                    .setImage(json.url)
                    .setFooter("API: nekos.life ❤️")




                receivedMessage.channel.send(nekoembed);

            });
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}



function runCommand(arguments, receivedMessage) {
    try {
        const rando_imgs = [
            "https://media1.giphy.com/media/2Pyhl0fQ1sLbG/giphy.gif",
            "https://steamuserimages-a.akamaihd.net/ugc/958606004763816068/554CE8F246FAE66CDD7B66DB446F4111E6398989/",
            "https://thumbs.gfycat.com/ImpureDismalEgret-size_restricted.gif",
            "https://thumbs.gfycat.com/WealthyAgedAlligatorsnappingturtle-size_restricted.gif",
            "https://media1.tenor.com/images/879fbfa179c7b510f21743e1a19f0de6/tenor.gif?itemid=11115606",
            "https://cdn.myanimelist.net/s/common/uploaded_files/1460140429-d60a2b5a534becb71153db8eaaaf4e14.gif",
            "https://media1.giphy.com/media/CRWdhM1XgJ7Pi/giphy.gif",
            "https://i.gifer.com/AEOb.gif",
            "https://media.giphy.com/media/rZciqpWIzAYes/giphy.gif",
            "https://i.kym-cdn.com/photos/images/original/001/081/817/909.gif",
            "https://i.kym-cdn.com/photos/images/original/000/987/562/b2d.gif",
            "https://i.gifer.com/79o6.gif",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQj4nOiv6xJH0HjfVqwcvtXTv8IjClGQTfGS4LS3aPRkbiG12ng&usqp=CAU",
            "https://cdn.myanimelist.net/s/common/uploaded_files/1460140490-8b365d32a26712058adf10436dce0389.gif",
            "https://3.bp.blogspot.com/-iiqZhveJul8/V8OoszDbbLI/AAAAAAAAkrc/Vt9QlelHF_kU1YldFHNe_PNUIf_5IKepACPcB/s1600/Omake%2BGif%2BAnime%2B-%2BLove%2BLive%2521%2BSunshine%2521%2521%2B-%2BEpisode%2B9%2B-%2BKanan%2BRuns%2BHappy.gif",
            "https://cdn.lowgif.com/full/faeae73ac2739656-anime-running-gif-7-gif-images-download.gif",
            "https://cdn.myanimelist.net/s/common/uploaded_files/1460140096-e75b38844a685a142f6a85da93ad9f2d.gif",
            "https://media1.tenor.com/images/44a8d29788a7e898b67ade8a0086f294/tenor.gif?itemid=8540976",
            "https://media0.giphy.com/media/RaeH5z5AlrkwU/source.gif",
            "https://cdn.myanimelist.net/s/common/uploaded_files/1460139914-f1109b66f45c29d770e26da53e875508.gif",
            "https://data.whicdn.com/images/312391846/original.gif",
            "https://media3.giphy.com/media/5HeClWGUQRa7e/giphy.gif",
            "https://data.whicdn.com/images/223989016/original.gif",
            "https://media0.giphy.com/media/ZUEVCzp1WVCNi/giphy.gif",
            "https://cdn.myanimelist.net/s/common/uploaded_files/1460140013-9af557e16033fc5c19443f576cccb0d4.gif",
            "https://media2.giphy.com/media/q7ghjrKpGeMda/giphy.gif",
            "https://i.gifer.com/DEGl.gif",
            "https://img1.ak.crunchyroll.com/i/spire1/5fa5fb4a7a497dad806a6c334f8a64781484073855_full.gif",

        ];

        let runembed = new Discord.MessageEmbed()
            .setColor([255, 153, 255])
            .setTitle("NANI?")
            .setDescription(receivedMessage.author.toString() + " runs away!") //receivedMessage.author.toString() gets the user who sent the message Tag!S
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
            .setFooter(
                "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
            );

        receivedMessage.channel.send(runembed);
    } catch (err) {
        catchERR(err, receivedMessage);
    }
}

function sleepCommand(arguments, receivedMessage) {
    try {
        const rando_imgs = [
            "https://media1.tenor.com/images/a47e33d3aeca8945d4cd4c39025e9088/tenor.gif?itemid=12003899",
            "https://i.pinimg.com/originals/24/3e/2f/243e2f0cf4ad9ef9fb9def7594ec2c85.gif",
            "https://i.pinimg.com/originals/3c/fb/18/3cfb18349c437a489f0834c81a22a9d4.gif",
            "https://thumbs.gfycat.com/BlindScalyGrosbeak-small.gif",
            "https://media.giphy.com/media/Gx7QXQHdP1MZO/giphy.gif",
            "https://thumbs.gfycat.com/UglyWhichCuttlefish-small.gif",
            "https://i.pinimg.com/originals/d2/77/44/d27744ea634264013cf46bd778f3ba14.gif",
            "https://i.pinimg.com/originals/b1/cd/f6/b1cdf65b0627586b7ad2274c011b100f.gif",
            "https://i.pinimg.com/originals/4b/45/fc/4b45fc5ce39673b9ed0ee1fdcf9fa34f.gif",
            "https://i.gifer.com/IK9c.gif",
            "https://media1.giphy.com/media/CoeFBrfvxzZ2U/giphy.gif",
            "https://thumbs.gfycat.com/AcidicAppropriateGalago-size_restricted.gif",
            "https://66.media.tumblr.com/7c3918df9cdb4a47a0ae536e2193aea6/tumblr_or91ekky8M1vhvnzyo1_400.gifv",
            "https://data.whicdn.com/images/190027766/original.gif",
            "https://pa1.narvii.com/7471/31cf999815194db29906987ca9be1be31280c5bcr1-500-281_00.gif",
            "https://cdn140.picsart.com/264890626019202.gif?to=min&r=640",
            "https://data.whicdn.com/images/145617644/original.gif",
            "https://i.pinimg.com/originals/df/1d/8b/df1d8b3bec2f022d177edfcf9994d54e.gif",
            "https://66.media.tumblr.com/9a0efe3d6c1516214e3b3ffce5a51c78/tumblr_os2qsvffPq1qzxv73o1_400.gifv",
            "https://i.chzbgr.com/full/8483621632/hD9AEC273/dont-bother-her-when-shes-trying-to-sleep",
            "https://cdn.lowgif.com/full/28d4ec26d49e39a4-kawaii-anime-gif-me-at-sleep-overs-gifs-pinterest.gif",
            "https://media1.tenor.com/images/1db32a3916c6b5f7ff1b423c9ffafd9c/tenor.gif?itemid=12196456",


        ];

        let sleepembed = new Discord.MessageEmbed()
            .setColor([255, 153, 255])
            .setTitle("SHHhh.")
            .setDescription(receivedMessage.author.toString() + " is fast asleep! 😴") //receivedMessage.author.toString() gets the user who sent the message Tag!S
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
            .setFooter(
                "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
            );

        receivedMessage.channel.send(sleepembed);
    } catch (err) {
        catchERR(err, receivedMessage);
    }
}

function drinkCommand(arguments, receivedMessage) {
    try {
        const rando_imgs = [
            "https://media1.tenor.com/images/005d2bcb1dbb66f6b753da69bd3753b9/tenor.gif?itemid=14698957",
            "https://i.pinimg.com/originals/db/31/6a/db316ad853b1b27e6a81b18b7c3a6021.gif",
            "https://media1.tenor.com/images/86377f44e719f55a251bbe82ed57c306/tenor.gif?itemid=14132835",
            "https://dajlznucrzlgk.cloudfront.net/news/wp-content/uploads/kimi-no-na-wa-drink.gif",
            "https://thumbs.gfycat.com/RichVeneratedAsiantrumpetfish-small.gif",
            "https://ift.tt/2hckIz9",
            "https://media1.giphy.com/media/2tMzQmtX7Uh5i8tGRn/giphy.gif",
            "https://media3.giphy.com/media/BJLCcNzwaZ344/giphy.gif",
            "https://33.media.tumblr.com/3a91b1373a2ff824f774bc703bbefa24/tumblr_mtymn2RJdm1s515j6o1_500.gif",
            "https://giffiles.alphacoders.com/137/137430.gif",
            "https://image.myanimelist.net/ui/5pjpFizOF0WqHWXSGonzMaqsxH2EGo2HKF7Msm4MqIuPKlgIUGul4aPLwmHIl9Fogf5RwTBymtcUAMg_Oy-_s8Zi-d2RW8zQ8Yv7F-iOKI4",
            "https://pa1.narvii.com/5695/9f5a6b93bda71444234b0d740d465bc059837419_hq.gif",
            "https://i.imgur.com/zK3RUrx.gif",
            "https://media.giphy.com/media/UDqvUqkw0nB8Q/giphy.gif",
            "https://i.imgur.com/59yMs.gif",
            "https://cdn70.picsart.com/189784170003202.gif?to=min&r=640",
            "https://cdn.lowgif.com/full/ccda1ac2d970811a-react-the-gif-above-with-another-anime-gif-v-2-9600.gif",
            "https://31.media.tumblr.com/a4fdd6dd59cfa0f6e3bae1fa7b671ca6/tumblr_mpsciojYsd1s7itpyo1_500.gif",
            "https://media1.tenor.com/images/3ca0808c4b7416cb36aec9e4fbcf8908/tenor.gif?itemid=17361620",
            "https://24.media.tumblr.com/55d113255b47bea0bedcacd3322a0d1b/tumblr_my70h9YPhW1sivapqo1_500.gif",
            "https://i.pinimg.com/originals/89/ba/bd/89babdf25e2b06b247e186ecb0343cca.gif",
        ];
        let drinkembed = new Discord.MessageEmbed()
            .setColor([255, 153, 255])
            .setTitle("Glug Glug!")
            .setDescription(
                receivedMessage.author.toString() +
                " Drinks somthing! (wonder what it is)"
            ) //receivedMessage.author.toString() gets the user who sent the message Tag!S
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
            .setFooter(
                "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
            );

        receivedMessage.channel.send(drinkembed);
    } catch (err) {
        catchERR(err, receivedMessage);
    }
}

function cryCommand(arguments, receivedMessage) {
    try {
        const rando_imgs = [
            "https://media0.giphy.com/media/mvRwcoCJ9kGTS/source.gif",
            "https://media.giphy.com/media/b5z9pHJxxcREI/giphy.gif",
            "https://media1.giphy.com/media/4iusP4Pbf1L8c/giphy.gif",
            "https://media.tenor.com/images/9c3d5212025bbeb8bbdf8851e2800ccc/tenor.gif",
            "https://media.tenor.com/images/d7286a667f4c7f5e3af2daf2ac3d9948/tenor.gif",
            "https://media.tenor.com/images/94d6d0cee0ba91393ccbc443ef9276f2/tenor.gif",
            "https://media.tenor.com/images/91fe5528f8ecd420f49f541196f9318c/tenor.gif",
            "https://media.tenor.com/images/7cba9943d6449423bd9da78929bf6337/tenor.gif",
            "https://media.tenor.com/images/5fed120e585f91aa2af29abb97251942/tenor.gif",
            "https://media.tenor.com/images/05325358f7b7d2a8201063d588220518/tenor.gif",
            "https://media.tenor.com/images/315b2b6e191de690b611cbcb95924607/tenor.gif",
            "https://media.tenor.com/images/47608365978d83956791a4b70a1cfdba/tenor.gif",
            "https://media.tenor.com/images/c9fdb6e3ab914d5b195b11ebd99524d0/tenor.gif",
            "https://media.tenor.com/images/b9b256eafbd680434e11ce8a7a60467f/tenor.gif",
            "https://media.tenor.com/images/5fbea42f205b367e119e5d5125704a2d/tenor.gif",
            "https://media.tenor.com/images/84bb22e3b7290269d926a9cfd1d065f0/tenor.gif",
            "https://media.tenor.com/images/82c7523a9b203fc4e938d2d027540dea/tenor.gif",
            "https://media.tenor.com/images/3368a542ef94e3ecc0821585afa96a8a/tenor.gif",
            "https://media.tenor.com/images/a901f319531c79f6115e270ef510fdb3/tenor.gif",
            "https://media.tenor.com/images/af7f60b79dcaa1c78d92c8c2f2a0e63c/tenor.gif",
            "https://media.tenor.com/images/a874f133b7168056c38a632a883b0656/tenor.gif",
            "https://media.tenor.com/images/faf6f9f03e606c7afd94cc9941f831ff/tenor.gif",
            "https://media.tenor.com/images/c1cd1857a8ac9981a297f763f52faf87/tenor.gif",
            "https://media.tenor.com/images/8d0b8ddd8d2e102e0b8ba5d69c85a3c1/tenor.gif",
            "https://media.tenor.com/images/873f6f77948bbfd24c7b3b670638c799/tenor.gif",
            "https://media.tenor.com/images/33c36682db030540428fae7a142bb55f/tenor.gif",
            "https://media.tenor.com/images/c650340dee57f412cbae2efa6fa30c40/tenor.gif",
        ];
        let cryembed = new Discord.MessageEmbed()
            .setColor([255, 153, 255])
            .setTitle("T^T")
            .setDescription(
                "poor " + receivedMessage.author.toString() + " is crying..."
            ) //receivedMessage.author.toString() gets the user who sent the message Tag!S
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
            .setFooter(
                "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
            );

        receivedMessage.channel.send(cryembed);
    } catch (err) {
        catchERR(err, receivedMessage);
    }
}

function eatCommand(arguments, receivedMessage) {
    try {
        const rando_imgs = [
            "https://media0.giphy.com/media/9n4muqn344LMA/source.gif",
            "https://media0.giphy.com/media/BuOSTtLMIK7Cw/source.gif",
            "https://media1.giphy.com/media/ViC6liI1iz3TGxb4po/giphy.gif",
            "https://media0.giphy.com/media/RneIcLEosVuta/giphy.gif",
            "https://media3.giphy.com/media/hXYlYBixtHEFq/giphy.gif",
            "https://media1.giphy.com/media/13LQZoCE0Nysr6/giphy.gif",
            "https://media.tenor.com/images/b8e8366fcb6b7f88bd075d84f12825b3/tenor.gif",
            "https://media.tenor.com/images/ad18eb28cbad4511d6e66976d68c9c31/tenor.gif",
            "https://media.tenor.com/images/53600e9365e3348d8787c15047fdf7eb/tenor.gif",
            "https://media.tenor.com/images/8cd8f56c494a8ac8d0cc893d65c09fc9/tenor.gif",
            "https://media.tenor.com/images/41cc24ab4553e297a0d469865603361d/tenor.gif",
            "https://media.tenor.com/images/23fa876f0384559e91cc2f56d70e8242/tenor.gif",
            "https://media.tenor.com/images/8fae5fbe5a477bd93549800abbd44b83/tenor.gif",
            "https://media.tenor.com/images/340f48053b8910c6e5072b07b16d43da/tenor.gif",
            "https://media.tenor.com/images/18cb38866d0d651a0379ac40e24678e9/tenor.gif",
            "https://media.tenor.com/images/ce5cc6351a116dc474605899638561be/tenor.gif",
            "https://media.tenor.com/images/a8d1d91ee78a0db4f1c8272880040624/tenor.gif",
            "https://media.tenor.com/images/c4655b39ec1bcef4165352e4da98169b/tenor.gif",
            "https://media.tenor.com/images/297c94fdcbb700eb2c2f90cfc1469bb4/tenor.gif",
            "https://media.tenor.com/images/2377b5ebd61435120af20901834933dd/tenor.gif",
        ];

        let eatembed = new Discord.MessageEmbed()
            .setColor([255, 153, 255])
            .setTitle("Nom!")
            .setDescription(
                receivedMessage.author.toString() + " Eats something (what could it be?)"
            ) //receivedMessage.author.toString() gets the user who sent the message Tag!S
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
            .setFooter(
                "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
            );

        receivedMessage.channel.send(eatembed);
    } catch (err) {
        catchERR(err, receivedMessage);
    }
}

function hideCommand(arguments, receivedMessage) {
    try {
        const rando_imgs = [
            "https://media1.tenor.com/images/cfee6bb543427ab79202ff05ba7d0765/tenor.gif?itemid=3532023",
            "https://media1.tenor.com/images/f8eba73981eea6dd48e3630d867e6a59/tenor.gif?itemid=12004189",
            "https://media1.tenor.com/images/af7f50de621aacf1c350baf584f9016d/tenor.gif?itemid=13765054",
            "https://media1.tenor.com/images/87243e2e9268ecb5134af016a4f78f2e/tenor.gif?itemid=16038395",
            "https://i.pinimg.com/originals/bd/69/36/bd69362c627737bef489401a74aeb835.gif",
            "https://i.gifer.com/4A9v.gif",
            "https://thumbs.gfycat.com/UnfinishedLawfulArabianhorse-size_restricted.gif",
            "https://i.kym-cdn.com/photos/images/newsfeed/001/169/460/2a1.gif",
            "https://media1.tenor.com/images/2b7dbc632d8123acaabb462217760929/tenor.gif?itemid=13839451",
            "https://media1.giphy.com/media/9uIms6ZFLbIKo3piKO/giphy.gif",
            "https://media1.tenor.com/images/5b85b7d9ae8bb2c028e4a1811a177eda/tenor.gif?itemid=4959291",
            "https://data.whicdn.com/images/107809583/original.gif",
            "https://media1.tenor.com/images/b72bda96b449d2ad93a4cebdb42b116d/tenor.gif?itemid=13436988",
            "https://i.imgur.com/0IkPGvp.gif",
            "https://i.kym-cdn.com/photos/images/newsfeed/000/953/423/89d.gif",
            "https://i.gifer.com/sCO.gif",
        ]
        let hideembed = new Discord.MessageEmbed()
            .setColor([255, 153, 255])
            .setTitle("Woop!")
            .setDescription(receivedMessage.author.toString() + " Hides (peekaboo!)") //receivedMessage.author.toString() gets the user who sent the message Tag!S
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
            .setFooter(
                "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
            );

        receivedMessage.channel.send(hideembed);
    } catch (err) {
        catchERR(err, receivedMessage);
    }
}

function smileCommand(arguments, receivedMessage) {

    try {

        const rando_imgs = [
            "https://media.giphy.com/media/ivibkKm68n3a/giphy.gif",
            "https://media1.tenor.com/images/c5fad21f9828d19044a58f8b84a6e14b/tenor.gif?itemid=6013419",
            "https://media.giphy.com/media/bqSkJ4IwNcoZG/giphy.gif",
            "https://media3.giphy.com/media/rFfmUWVMOyKVG/source.gif",
            "https://thumbs.gfycat.com/SplendidBeautifulFieldspaniel-size_restricted.gif",
            "https://i.imgur.com/Y5o48VW.gif",
            "https://cdn72.picsart.com/186168594000202.gif?to=min&r=480",
            "https://i.gifer.com/3YTP.gif",
            "https://cdn140.picsart.com/261285216025202.gif?to=min&r=640",
            "https://cdn52.picsart.com/172955010001202.gif?to=min&r=480",
            "https://cdn.lowgif.com/medium/a6bdec2753cb5410-blood-blockade-battlefront-smile-gif-find-share-on-giphy.gif",
        ];

        let smileembed = new Discord.MessageEmbed()
            .setColor([255, 153, 255])
            .setTitle("Awwwe! 😊")
            .setDescription(receivedMessage.author.toString() + " Is smiling (cute)") //receivedMessage.author.toString() gets the user who sent the message Tag!S
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length - 1)])
            .setFooter(
                "If any Image is broken please DM me: ₊˚🌙 ꒱ Zoe ༉‧₊˚#2244"
            );

        receivedMessage.channel.send(smileembed);
    } catch (err) {
        catchERR(err, receivedMessage);
    }
}

function hugCommand(arguments, receivedMessage) {

    try {

        const user = receivedMessage.mentions.users.first();

        if (!user) {
            receivedMessage.channel.send("You did not say who u want to hug!");
        }

        if (user) {
            fetch("https://nekos.life/api/v2/img/hug")
                .then(res => res.json())
                .then(json => {
                    let nekoembed = new Discord.MessageEmbed()
                        .setColor([255, 153, 255])
                        .setTitle("HUG!")
                        .setDescription(
                            receivedMessage.author.toString() + " hugs " + user.toString()
                        )
                        .setImage(json.url)
                        .setFooter("API: nekos.life ❤️")




                    receivedMessage.channel.send(nekoembed);

                });

        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }
}

function patCommand(arguments, receivedMessage) {

    try {
        const user = receivedMessage.mentions.users.first();

        if (!user) {
            receivedMessage.channel.send("You did not say who u want to pat!");
        }

        if (user) {
            fetch("https://nekos.life/api/v2/img/pat")
                .then(res => res.json())
                .then(json => {
                    let nekoembed = new Discord.MessageEmbed()
                        .setColor([255, 153, 255])
                        .setTitle("Pat pat!")
                        .setDescription(
                            receivedMessage.author.toString() +
                            " gives " + user.toString() +
                            " a big pat!"
                        )
                        .setImage(json.url)
                        .setFooter("API: nekos.life ❤️")


                    receivedMessage.channel.send(nekoembed);

                });



        }
    } catch (err) {
        catchERR(err, receivedMessage);
    }
}

function clearCommand(arguments, receivedMessage) {



    try {
        var number = arguments.join(" ").slice(5);
        if (!number) {
            receivedMessage.channel.send(
                "I Dont see a number there!"
            );
        }

        if (number) {
            if (receivedMessage.deletable) {
                receivedMessage.delete();
            }

            if (!receivedMessage.member.hasPermission("MANAGE_MESSAGES")) {
                receivedMessage.channel.send(
                    "BAKA! you dont have permission to use this command..."
                );
            }

            if (isNaN(number) || parseInt(number) <= 0) {
                receivedMessage.channel.send("That is not a number sowy 💔");
            }

            if (!receivedMessage.guild.me.hasPermission("MANAGE_MESSAGES")) {
                receivedMessage.channel.send(
                    "Apperantly i dont have permission to do that senpai please fix that!"
                );
            }

            let deleteAmount;

            if (parseInt(number) > 100) {
                deleteAmount = 100;
            } else {
                deleteAmount = parseInt(number);
            }



            receivedMessage.channel
                .bulkDelete(deleteAmount, true)
                .then(deleted =>
                    receivedMessage.channel.send(
                        "I deleted " + deleteAmount + " messages for you senpai ❤️"
                    ).then((d_msg) => { setTimeout(function() { d_msg.delete() }, 3000); })
                );
        }

    } catch (err) {
        catchERR(err, receivedMessage);
    }

}

function catCommand(arguments, receivedMessage) {


    try {
        const Reply = arguments[0];
        receivedMessage.channel.send("Generating ✧").then((sentMessage) => sentMessage.edit("Generating ✧ ✧")).then((sentMessage) => sentMessage.edit("Generating ✧ ✧ ✧"))
        fetch("https://nekos.life/api/v2/img/meow")
            .then(res => res.json())
            .then(json => {
                let nekoembed = new Discord.MessageEmbed()
                    .setColor([255, 153, 255])
                    .setTitle("meow~!")
                    .setImage(json.url)
                    .setFooter("API: nekos.life ❤️")




                receivedMessage.channel.send(nekoembed);

            });
    } catch (err) {
        catchERR(err, receivedMessage);
    }


}



function dogCommand(arguments, receivedMessage) {

    try {
        const Reply = arguments[0];
        receivedMessage.channel.send("Generating ✧").then((sentMessage) => sentMessage.edit("Generating ✧ ✧")).then((sentMessage) => sentMessage.edit("Generating ✧ ✧ ✧"))
        fetch("https://nekos.life/api/v2/img/woof")
            .then(res => res.json())
            .then(json => {
                let nekoembed = new Discord.MessageEmbed()
                    .setColor([255, 153, 255])
                    .setTitle("woof~!")
                    .setImage(json.url)
                    .setFooter("API: nekos.life ❤️")




                receivedMessage.channel.send(nekoembed);

            });

    } catch (err) {
        catchERR(err, receivedMessage);
    }


}



function searchCommand(arguments, receivedMessage) {
    try {
        receivedMessage.channel.send("Generating ✧").then((sentMessage) => sentMessage.edit("Generating ✧ ✧")).then((sentMessage) => sentMessage.edit("Generating ✧ ✧ ✧"))


        var search = arguments.join(" ").slice(6);




        var options = {

            url: "http://results.dogpile.com/serp?qc=images&q=" + search,
            method: "GET",
            headers: {
                Accept: "text/html",
                "User-Agent": "Chrome"
            }
        };

        request(options, function(error, response, responseBody) {
            if (error) {
                return;
            }

            $ = cheerio.load(responseBody);

            var links = $(".image a.link");

            var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));



            if (!urls.length) {
                return console.error(`No URLs for URL:`);
            }



            // Send result
            //receivedMessage.channel.send( urls[Math.floor(Math.random() * urls.length)]);

            let serembed = new Discord.MessageEmbed()
                .setColor([255, 153, 255])
                .setTitle("Here ya go!")
                .setDescription(`We hired the best neko's in town to fetch this! ${search}`)
                .setImage(urls[Math.floor(Math.random() * urls.length)])

            receivedMessage.channel.send(serembed);


        });
    } catch (err) {
        catchERR(err, receivedMessage);
    }

}





client.login("Njc1MDQ1NzMxNTg0NzA0NTQ0.XjxbVA.NQnyZKDPQnAAYPtu94cSzXLbGDA");