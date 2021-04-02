const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const imgs = require(__dirname + "/imgs/imgs.json");
const boobs = require(__dirname + "/imgs/boobs.json");
const mongo = require(__dirname + '/mongo.js');
const mongoose = require('mongoose');
const owoify = require('owoify-js').default
const Canvas = require('canvas');
const canvacord = require("canvacord");
const dailyRewardsSchema = require(__dirname + '/daily_rewards_schema.js');
const { author } = require('canvacord');
const reverseImageSearch = require('reverse-image-search-google')
const snekfetch = require('snekfetch');
const akaneko = require('akaneko');
const NSFW = require("discord-nsfw");
const superagent = require('superagent');
const nsfw = new NSFW();
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();
const R34 = new (require('r34api.js'));



require('dotenv').config();

//https://nekos.life/api/v2/endpoints
//for all the neko.llife api endpoints as reference

client.on('ready', async () => {
	client.user.setActivity('With Boobs! || S!help');

	console.log("\x1b[35m", ' 🍬  Bot (' + client.user.tag + ') Ready!');
	// \x1b[35m is fancy text for making the console log text Magenta 

	await mongo().then(mongoose => {
		try {
			console.log('\x1b[36m%s\x1b[0m', '     connected to mongo!')
			// \x1b[36m%s\x1b[0m is fancy text for making the console log text Cyan

		} finally {
			mongoose.connection.close()
		}


	})

	
});
async function catchERR(err, message) {
	try {
		//send error too Zoe
		client.users.cache
			.get('427835914052567040')
			.send(
				'There Was a Error at Channel ' +
				message.channel +
				' In the Guild ' +
				message.guild
			);
		client.users.cache
			.get('427835914052567040')
			.send('ERROR ```' + err + '```');

	} catch (err) { }
}

let claimedCache = []

const clearCache = () => {
	claimedCache = []
	setTimeout(clearCache, 1000 * 60 * 10) // 10 mins
}
clearCache()





//Process the Prefix
async function processCommand(receivedMessage) {
	try {
		let fullCommand = receivedMessage.content.toLowerCase().substr(2); // Remove the '/'
		let splitCommand = fullCommand.split(' '); // Split the message up in to pieces for each space
		let primaryCommand = splitCommand[0]; // The first word directly after the exclamation is the command
		let arguments = splitCommand.slice(1); // All other words are arguments/parameters/options for the command

		//All the Commands!
		switch (primaryCommand) {
			case 'color':
				goCommand(arguments, receivedMessage);
				break;
			case 'help':
				helpCommand(arguments, receivedMessage);
				break;
			case 'info':
				infoCommand(arguments, receivedMessage);
				break;
			case 'hentai':
				hentaiCommand(arguments, receivedMessage);
				break;
			case 'hug':
				hugCommand(arguments, receivedMessage);
				break;
			case 'kiss':
				kissCommand(arguments, receivedMessage);
				break;
			case 'cuddle':
				cuddleCommand(arguments, receivedMessage);
				break;
			case 'purge':
				clearCommand(arguments, receivedMessage);
				break;
			case 'bj':
				bjCommand(arguments, receivedMessage);
				break;
			case 'pussy':
				pussyCommand(arguments, receivedMessage);
				break;
			case 'yuri':
				yuriCommand(arguments, receivedMessage);
				break;
			case 'boobs':
				boobCommand(arguments, receivedMessage);
				break;
			case 'futa':
				trapCommand(arguments, receivedMessage);
				break;
			case 'anal':
				analCommand(arguments, receivedMessage);
				break;
			case 'femdom':
				femdomCommand(arguments, receivedMessage);
				break;
			case 'cum':
				cumCommand(arguments, receivedMessage);
				break;
			case 'solo':
				soloCommand(arguments, receivedMessage);
				break;
			case 'feet':
				feetCommand(arguments, receivedMessage);
				break;
			case 'yaoi':
				yaoiCommand(arguments, receivedMessage);
				break;
			case 'threesome':
				threesomCommand(arguments, receivedMessage);
				break;
			case 'meme':
				memeCommand(arguments, receivedMessage);
				break;
			case 'pat':
				patCommand(arguments, receivedMessage);
				break;
			case 'smile':
				smileCommand(arguments, receivedMessage);
				break;
			case 'hide':
				hideCommand(arguments, receivedMessage);
				break;
			case 'eat':
				eatCommand(arguments, receivedMessage);
				break;
			case 'cry':
				cryCommand(arguments, receivedMessage);
				break;
			case 'drink':
				drinkCommand(arguments, receivedMessage);
				break;
			case 'sleep':
				sleepCommand(arguments, receivedMessage);
				break;
			case 'run':
				runCommand(arguments, receivedMessage);
				break;
			case 'punch':
				punchCommand(arguments, receivedMessage);
				break;
			case 'bite':
				biteCommand(arguments, receivedMessage);
				break;
			case 'stab':
				stabCommand(arguments, receivedMessage);
				break;
			case 'slap':
				slapCommand(arguments, receivedMessage);
				break;
			case 'revive':
				reviveCommand(arguments, receivedMessage);
				break;
			case 'carry':
				carryCommand(arguments, receivedMessage);
				break;
			case 'lick':
				lickCommand(arguments, receivedMessage);
				break;
			case 'baka':
				bakaCommand(arguments, receivedMessage);
				break;
			case 'dance':
				danceCommand(arguments, receivedMessage);
				break;
			case 'hf':
				hfCommand(arguments, receivedMessage);
				break;
			case 'boop':
				boopCommand(arguments, receivedMessage);
				break;
			case 'smh':
				smhCommand(arguments, receivedMessage);
				break;
			case 'fuck':
				fuckCommand(arguments, receivedMessage);
				break;
			case 'role':
				roleCommand(arguments, receivedMessage);
				break;
			case 'rboobs':
				rboobsCommand(arguments, receivedMessage);
				break;
			case 'cat':
				catCommand(arguments, receivedMessage);
				break;
			case 'dog':
				dogCommand(arguments, receivedMessage);
				break;
			case 'bal':
				balCommand(arguments, receivedMessage);
				break;
			case 'balance':
				balCommand(arguments, receivedMessage);
				break;
			case 'addbalance':
				abalCommand(arguments, receivedMessage);
				break;
			case 'addbal':
				abalCommand(arguments, receivedMessage);
				break;
			case 'subbalance':
				sbalCommand(arguments, receivedMessage);
				break;
			case 'subbal':
				sbalCommand(arguments, receivedMessage);
				break;
			case 'daily':
				dabalCommand(arguments, receivedMessage);
				break;
			case 'avatar':
				avCommand(arguments, receivedMessage);
				break;
			case 'bdsm':
				bdsmCommand(arguments, receivedMessage);
				break;
			case 'owo':
				owoCommand(arguments, receivedMessage);
				break;
			case 'gun':
				gunCommand(arguments, receivedMessage);
				break;
			case 'jail':
				jailCommand(arguments, receivedMessage);
				break;
			case 'gay':
				gayCommand(arguments, receivedMessage);
				break;
			case 'whymask':
				whymaskCommand(arguments, receivedMessage);
				break;
			case 'psps':
				pspsCommand(arguments, receivedMessage);
				break;
			case 'reason':
				reasonCommand(arguments, receivedMessage);
				break;
			case 'yeet':
				yeetCommand(arguments, receivedMessage);
				break;
			case 'license':
				licenseCommand(arguments, receivedMessage);
				break;
			case 'trigger':
				triggerCommand(arguments, receivedMessage);
				break;
			case 'easteregg':
				eggCommand(arguments, receivedMessage);
				break;
			case 'wanted':
				wantedCommand(arguments, receivedMessage);
				break;
			case 'rip':
				ripCommand(arguments, receivedMessage);
				break;
			case 'slap2':
				slapimgCommand(arguments, receivedMessage);
				break;
			case 'spank':
				spankCommand(arguments, receivedMessage);
				break;
			case 'wasted':
				wastedCommand(arguments, receivedMessage);
				break;
			case 'beautiful':
				beautifulCommand(arguments, receivedMessage);
				break;
			case 'play':
				playCommand(arguments, receivedMessage);
				break;
			case 'stop':
				stopCommand(arguments, receivedMessage);
				break;
			case 'loop':
				loopCommand(arguments, receivedMessage);
				break;
			case 'skip':
				skipCommand(arguments, receivedMessage);
				break;
			case 'queue':
				queueCommand(arguments, receivedMessage);
				break;
			case 'ship':
				shipCommand(arguments, receivedMessage);
				break;
			case 'search':
				searchCommand(arguments, receivedMessage);
				break;
			case 'whois':
				whoisCommand(arguments, receivedMessage);
				break;
			case 'porn':
				pornCommand(arguments, receivedMessage);
				break;
			case 'updates':
				updateCommand(arguments, receivedMessage);
				break;
			case 'maid':
				maidCommand(arguments, receivedMessage);
				break;
			case 'orgy':
				orgyCommand(arguments, receivedMessage);
				break;
			case 'panties':
				pantiesCommand(arguments, receivedMessage);
				break;
			case 'school':
				schoolCommand(arguments, receivedMessage);
				break;
			case 'tentacles':
				tentaclesCommand(arguments, receivedMessage);
				break;
			case 'thighs':
				thighsCommand(arguments, receivedMessage);
				break;
			case 'uniform':
				uniformCommand(arguments, receivedMessage);
				break;
			case 'zettairyouiki':
				zettaiCommand(arguments, receivedMessage);
				break;
			case 'doujin':
				doujinCommand(arguments, receivedMessage);
				break;
			case 'foxgirl':
				foxCommand(arguments, receivedMessage);
				break;
			case 'rpussy':
				rpussyCommand(arguments, receivedMessage);
				break;
			case 'porngif':
				porngifCommand(arguments, receivedMessage);
				break;
			case 'rass':
				rassCommand(arguments, receivedMessage);
				break;
			case 'ranal':
				ranalCommand(arguments, receivedMessage);
				break;
			case 'rpanties':
				rpantiesCommand(arguments, receivedMessage);
				break;
			case 'rthighs':
				rthighsCommand(arguments, receivedMessage);
				break;
			case 'r34random':
				r34randomCommand(arguments, receivedMessage);
				break;
			case 'r34search':
				r34searchCommand(arguments, receivedMessage);
				break;
			case 'rlesbian':
				lesbianCommand(arguments, receivedMessage);
				break;
			case 'rgay':
				gay2Command(arguments, receivedMessage);
				break;
			case 'rbdsm':
				rbdsmCommand(arguments, receivedMessage);
				break;
			case 'pegged':
				PeggingCommand(arguments, receivedMessage);
				break;
			case 'collared':
				collaredCommand(arguments, receivedMessage);
				break;
			case 'toys':
				toysCommand(arguments, receivedMessage);
				break;
			case 'tattoos':
				tattoosCommand(arguments, receivedMessage);
				break;
			case 'tiny':
				tinyCommand(arguments, receivedMessage);
				break;
			case 'traps':
				trapsCommand(arguments, receivedMessage);
				break;
			case 'bottomless':
				bottomlessCommand(arguments, receivedMessage);
				break;
			case 'group':
				groupCommand(arguments, receivedMessage);
				break;
			case 'pawg':
				pawgCommand(arguments, receivedMessage);
				break;
			case 'acc':
				accCommand(arguments, receivedMessage);
				break;
			case 'nsfw':
				nsfwCommand(arguments, receivedMessage);
				break;
			default:
				receivedMessage.channel.send('not a command');
		}



	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

client.on('message', receivedMessage => {
	try {
		if (receivedMessage.author == client.user) {
			// Prevent bot from responding to its own messages
			return;
		}
		//The Prefix!
		if (receivedMessage.content.toLowerCase().startsWith('s!')) {
			processCommand(receivedMessage);
		}
		/*if (receivedMessage.content.startsWith('S!')) {
			processCommand(receivedMessage);
		}*/

		if (receivedMessage.content.startsWith("<@!799480585663545395>")) {

			receivedMessage.channel.send("Looks like your having problems my prefix is `S!` ");

		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
});


async function helpCommand(arguments, receivedMessage) {
	try {
		let exembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setAuthor("█▚▞▌ █ ▄█▀ ▅▀▅ ▀█▀ ⬤  🌺")
			.setDescription("Here's a list of all the commands my prefix is `S!` Master ❤️")
			.addField("⠀", "⠀", false)
			.addField("  Fun 🎲", " `meme` `cat` `dog` `avatar` `owo` ", false)// `cat` `dog` `neko` `meme` `search` `needlove` `needhelp` `cookie` `duel`
			.addField("  Image 📷", " `gun` `jail` `gay` `whymask` `psps` `reason` `yeet` `license` `trigger` `wanted` `rip` `slap2` `spank` `wasted` `beautiful` `ship` ", false)
			.addField("  Hentai 💦", " `hentai` `pussy` `yuri` `boobs` `futa` `anal` `femdom` `solo` `feet` `yaoi` `threesome` `BDSM` `maid` `orgy` `panties` `school` `tentacles` `thighs` `uniform` `zettaiRyouiki` `doujin` `foxgirl`", false)
			.addField("  Porn 🍑", " `rboobs` `rpussy` `porngif` `rass` `ranal` `rthighs` `rpanties` `r34random` `r34search` `rlesbian` `rgay` `rbdsm` `pegged` `collared` `toys` `tattoos` `tiny` `traps` `bottomless` `group` `pawg`", false)
			.addField("  Economy 💰", " `daily`", false)
			.addField("  Actions ✨", " `hug` `pat` `kiss` `cuddle` `bj` `punch` `bite` `stab` `revive` `slap` `carry` `lick` `hf` `boop` `fuck`", false) // `pat` `carry` `kiss` `lick` `boop` `cuddle` `punch` `bite` `revive` `slap` `throw` `happybirthday` `stab` `hf` `propose` `glomp`
			.addField("  Emotes 😇", " `cum` `smile` `hide` `eat` `cry`  `drink` `sleep` `run` `baka` `dance` `smh`", false)//`run` `sleep` `drink` `eat` `cry` `hide` `smile` `dance` `baka` `gm` `smh` 
			.addField("  Moderation ⚙️", " `Purge` `addbal` `subbal` `whois`", false)
			.addField("  Other 💫", " `info` `updates`", false)


		let warning = new Discord.MessageEmbed()
			.setColor([255, 0, 0])
			.setTitle("///Please keep in mind///")
			.setDescription("this bot is still in its development stages not everything will work 100%")
			.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Caution_sign_used_on_roads_pn.svg/1200px-Caution_sign_used_on_roads_pn.svg.png")

		receivedMessage.channel.send(warning)
		receivedMessage.channel.send(exembed)

	} catch (err) {
		catchERR(err, receivedMessage);
	}
}





async function fuckCommand(arguments, receivedMessage) {

	try {
		const user = receivedMessage.mentions.users.first();

		if (!user) {
			receivedMessage.channel.send('You did not say who u want to fuck!');
		}

		if (!receivedMessage.channel.nsfw) {
			receivedMessage.channel.send('This Channel is not NSFW');
		}
		if (user) {
			if (receivedMessage.channel.nsfw) {
				receivedMessage.react('<:Sex:802017879599218718>').then(r => {

					receivedMessage.react('<:Gay_Sex:802017878198714382>').then(r => {

						receivedMessage.react('<:Lesb_Sex:802017879943151686>');
					});
				});


				// First argument is a filter async function
				receivedMessage.awaitReactions((reaction, user) => user.id == receivedMessage.author.id && (reaction.emoji.name == '<:Sex:802017879599218718>' || reaction.emoji.name == '<:Gay_Sex:802017878198714382>' || reaction.emoji.name == '<:Lesb_Sex:802017879943151686>'),
					{ max: 1, time: 40000 }).then(collected => {
						if (collected.first().emoji.name == '<:Sex:802017879599218718>') {

						}
						else if (collected.first().emoji.name == '<:Gay_Sex:802017878198714382>') {




							const img = [
								"https://wetgif.com/wp-content/uploads/erotic-yaoi-25.gif",
								"https://wetgif.com/wp-content/uploads/erotic-yaoi-23.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-8.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-13.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-9-gap.jpg",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-7.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-5.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-4.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-3.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-2.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-36.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-34.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-33.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-32.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-31.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-30.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-25.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-21.gif",
								"https://wetgif.com/wp-content/uploads/porno-yaoi-20.gif",

							];

							const rando = img[Math.floor(Math.random() * img.length)];


							if (rando == 0) {
								rando == 1




								let nekoembed = new Discord.MessageEmbed()
									.setColor([255, 153, 255])
									.setTitle('Here ya go~!')

									.setImage(rando);

								receivedMessage.channel.send(nekoembed);



							}





							let nekoembed = new Discord.MessageEmbed()
								.setColor([255, 153, 255])
								.setTitle('Here ya go~!')

								.setImage(rando);

							receivedMessage.channel.send(nekoembed);



						} else if (collected.first().emoji.name == '<:Lesb_Sex:802017879943151686>') {

						} else
							receivedMessage.reply('Not a valid reaction');
					}).catch(() => {
						receivedMessage.reply('No reaction after 40 seconds, operation canceled');
					});

			}
		}



	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function catCommand(arguments, receivedMessage) {


	try {
		const Reply = arguments[0];
		fetch("https://nekos.life/api/v2/img/meow")
			.then(res => res.json())
			.then(json => {
				let nekoembed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle("meow~!")
					.setImage(json.url)




				receivedMessage.channel.send(nekoembed);

			});
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}


async function accCommand(arguments, receivedMessage) {


	try {
				let embed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle("React with ❤️ here to get access to the server!")
					.setDescription("In order to get full access to this server you must react to this message by reacting to this message you agree that you have read and understood all the rules of the server")
					.setThumbnail('https://cdn.discordapp.com/emojis/826638861068140559.gif')
			
				receivedMessage.channel.send(embed);

		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function nsfwCommand(arguments, receivedMessage) {


	try {
				let embed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle("React with <:LipBite:771258644888944660> here to get access to the nsfw channels!")
					.setDescription("In order to get full access to this server you must react to this message by reacting to this message you agree that you are over 18 years of age and are comfortable with adult content")
					.setThumbnail('https://cdn.discordapp.com/emojis/826638861068140559.gif')
			
				receivedMessage.channel.send(embed);

		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function searchCommand(arguments, receivedMessage) {


	try {
		const image = arguments[0];

		if (!image){
			receivedMessage.channel.send("**No Image provided**");
		}
	
		const doSomething = (results) => {


			if(!results[1]){
				receivedMessage.channel.send("**Could not find image!**");
				return receivedMessage.channel.send("Either the image is one of a kind or is unclear");
			}
	
			let embed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Visually similar images")
				.setDescription(results[1].title)
				.setImage(results[1].url)
				.setURL(results[1].url)
				.setFooter(results[1].url)

			receivedMessage.channel.send(embed);
			console.log(results)
		}

		reverseImageSearch(image, doSomething)

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}



async function playCommand(arguments, receivedMessage) {


	try {
		const zoe = "427835914052567040"

		if (receivedMessage.author.id === zoe) {
			client.distube.play(receivedMessage, arguments.join(" "));
		} else {
			receivedMessage.reply(`**Your not zoe!** sorry only zoe is allowed too use this command`)
			return;
		}



	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function stopCommand(arguments, receivedMessage) {


	try {
		const zoe = "427835914052567040"

		if (receivedMessage.author.id === zoe) {
			client.distube.stop(receivedMessage);
		} else {
			receivedMessage.reply(`**Your not zoe!** sorry only zoe is allowed too use this command`)
			return;
		}



	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function loopCommand(arguments, receivedMessage) {


	try {
		const zoe = "427835914052567040"

		if (receivedMessage.author.id === zoe) {
			client.distube.setRepeatMode(receivedMessage, parseInt(args[0]));
		} else {
			receivedMessage.reply(`**Your not zoe!** sorry only zoe is allowed too use this command`)
			return;
		}



	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function skipCommand(arguments, receivedMessage) {


	try {
		const zoe = "427835914052567040"

		if (receivedMessage.author.id === zoe) {
			client.distube.skip(receivedMessage);
		} else {
			receivedMessage.reply(`**Your not zoe!** sorry only zoe is allowed too use this command`)
			return;
		}



	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function queueCommand(arguments, receivedMessage) {


	try {
		const zoe = "427835914052567040"

		if (receivedMessage.author.id === zoe) {
			let queue = client.distube.getQueue(receivedMessage);
			receivedMessage.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
				`**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
			).slice(0, 10).join("\n"));
		} else {
			receivedMessage.reply(`**Your not zoe!** sorry only zoe is allowed too use this command`)
			return;
		}



	} catch (err) {
		catchERR(err, receivedMessage);
	}


}




async function dabalCommand(arguments, receivedMessage) {
	try {

		const { guild, member } = receivedMessage
		const { id } = member

		if (claimedCache.includes(id)) {
			receivedMessage.reply(`You have already claimed your daily` + " :PeachCurrency:")
			return
		}

		const obj = {
			guildId: guild.id,
			userId: id

		}

		await mongo().then(async mongoose => {
			try {
				const reply = ("You have already claimed your daily :PeachCurrency:")
				const economy = require(__dirname + "/economy.js")

				const results = await dailyRewardsSchema.findOne(obj)
				console.log('RESULTS:', results)

				if (results) {
					const then = new Date(results.updatedAt).getTime()
					const now = new Date().getTime()

					const diffTime = Math.abs(then - now)
					const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

					if (diffDays <= 1) {
						claimedCache.push(id)
						receivedMessage.reply(reply)
						/*
												var seconds = (diffTime / 1000).toFixed(1);
						
												var minutes = (diffTime/ ((1000 * 60))).toFixed(1);
										
												var hours = (diffTime / (1000 * 60 * 60)).toFixed(1);
						
												receivedMessage.reply(reply + " please wait " + hours + "h " + minutes + "m " + seconds + "s " )
										
										
												if (seconds < 60) {
													receivedMessage.reply(reply + " please wait " + seconds + " Sec" )
												} else if (minutes < 60) {
													receivedMessage.reply(reply + " please wait " + minutes + " Min" )
												} else if (hours < 24) {
													receivedMessage.reply(reply + " please wait " + hours + " Hrs" )
												} 
												return
												*/

						return
					}
				}

				await dailyRewardsSchema.findOneAndUpdate(obj, obj, {
					upsert: true
				})

				claimedCache.push(id)

				const coins = 20
				const mention = receivedMessage.author

				const guildId = receivedMessage.guild.id
				const userId = mention.id


				const newCoins = await economy.add_Dailycoins(guildId, userId, coins)

				receivedMessage.reply(`You have claimed your daily` + " :PeachCurrency:")
			} finally {
				mongoose.connection.close()
			}
		})


	} catch (err) {
		catchERR(err, receivedMessage);
	}


}


async function balCommand(arguments, receivedMessage) {
	try {
		const economy = require(__dirname + "/economy.js")
		target = receivedMessage.mentions.users.first()
		const person = receivedMessage.mentions.users.first()
		if (!person) {
			target = receivedMessage.author
		} else {
			target = receivedMessage.mentions.users.first()
		}
		const targetId = target.id

		console.log(`ID:`, targetId)


		const guildId = receivedMessage.guild.id
		const userId = target.id

		const coins = await economy.getCoins(guildId, userId)


		receivedMessage.reply(`**That user has:** ${coins}` + " :PeachCurrency:")




	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function lesbianCommand(arguments, receivedMessage) {
	try {
		

		const { body } = await superagent.get(
			"https://www.reddit.com/r/lesbians.json?sort=top&t=year"
		  );

		const allowed = receivedMessage.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
		const randomnumber = Math.floor(Math.random() * allowed.length)

		let nekoembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)

			let nekoembed2 = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.setImage(allowed[randomnumber].data.url)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)
						

			
			if (allowed[randomnumber].data.url.startsWith("https://redgifs.com/" || "https://www.redgifs.com/")){
				receivedMessage.channel.send(nekoembed);
				receivedMessage.channel.send(allowed[randomnumber].data.url);
				
			}else {
				receivedMessage.channel.send(nekoembed2);
				
			}
			
	
				
	

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function trapsCommand(arguments, receivedMessage) {
	try {
		

		const { body } = await superagent.get(
			"https://www.reddit.com/r/trapsgonewild.json?sort=top&t=year"
		  );

		const allowed = receivedMessage.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
		const randomnumber = Math.floor(Math.random() * allowed.length)

		let nekoembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)

			let nekoembed2 = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.setImage(allowed[randomnumber].data.url)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)
						

			
			if (allowed[randomnumber].data.url.startsWith("https://redgifs.com/" || "https://www.redgifs.com/")){
				receivedMessage.channel.send(nekoembed);
				receivedMessage.channel.send(allowed[randomnumber].data.url);
				
			}else {
				receivedMessage.channel.send(nekoembed2);
				
			}
			
	
				
	

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function bottomlessCommand(arguments, receivedMessage) {
	try {
		

		const { body } = await superagent.get(
			"https://www.reddit.com/r/Bottomless.json?sort=top&t=year"
		  );

		const allowed = receivedMessage.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
		const randomnumber = Math.floor(Math.random() * allowed.length)

		let nekoembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)

			let nekoembed2 = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.setImage(allowed[randomnumber].data.url)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)
						

			
			if (allowed[randomnumber].data.url.startsWith("https://redgifs.com/" || "https://www.redgifs.com/")){
				receivedMessage.channel.send(nekoembed);
				receivedMessage.channel.send(allowed[randomnumber].data.url);
				
			}else {
				receivedMessage.channel.send(nekoembed2);
				
			}
			
	
				
	

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function groupCommand(arguments, receivedMessage) {
	try {
		

		const { body } = await superagent.get(
			"https://www.reddit.com/r/groupsex.json?sort=top&t=year"
		  );

		const allowed = receivedMessage.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
		const randomnumber = Math.floor(Math.random() * allowed.length)

		let nekoembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)

			let nekoembed2 = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.setImage(allowed[randomnumber].data.url)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)
						

			
			if (allowed[randomnumber].data.url.startsWith("https://redgifs.com/" || "https://www.redgifs.com/")){
				receivedMessage.channel.send(nekoembed);
				receivedMessage.channel.send(allowed[randomnumber].data.url);
				
			}else {
				receivedMessage.channel.send(nekoembed2);
				
			}
			
	
				
	

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function pawgCommand(arguments, receivedMessage) {
	try {
		

		const { body } = await superagent.get(
			"https://www.reddit.com/r/pawg.json?sort=top&t=year"
		  );

		const allowed = receivedMessage.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
		const randomnumber = Math.floor(Math.random() * allowed.length)

		let nekoembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)

			let nekoembed2 = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.setImage(allowed[randomnumber].data.url)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)
						

			
			if (allowed[randomnumber].data.url.startsWith("https://redgifs.com/" || "https://www.redgifs.com/")){
				receivedMessage.channel.send(nekoembed);
				receivedMessage.channel.send(allowed[randomnumber].data.url);
				
			}else {
				receivedMessage.channel.send(nekoembed2);
				
			}
			
	
				
	

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}


async function tattoosCommand(arguments, receivedMessage) {
	try {
		

		const { body } = await superagent.get(
			"https://www.reddit.com/r/nsfw_tattoos.json?sort=top&t=year"
		  );

		const allowed = receivedMessage.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
		const randomnumber = Math.floor(Math.random() * allowed.length)

		let nekoembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)

			let nekoembed2 = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.setImage(allowed[randomnumber].data.url)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)
						

			
			if (allowed[randomnumber].data.url.startsWith("https://redgifs.com/" || "https://www.redgifs.com/")){
				receivedMessage.channel.send(nekoembed);
				receivedMessage.channel.send(allowed[randomnumber].data.url);
				
			}else {
				receivedMessage.channel.send(nekoembed2);
				
			}
			
	
				
	

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function tinyCommand(arguments, receivedMessage) {
	try {
		

		const { body } = await superagent.get(
			"https://www.reddit.com/r/xsmallgirls.json?sort=top&t=year"
		  );

		const allowed = receivedMessage.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
		const randomnumber = Math.floor(Math.random() * allowed.length)

		let nekoembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)

			let nekoembed2 = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.setImage(allowed[randomnumber].data.url)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)
						

			
			if (allowed[randomnumber].data.url.startsWith("https://redgifs.com/" || "https://www.redgifs.com/")){
				receivedMessage.channel.send(nekoembed);
				receivedMessage.channel.send(allowed[randomnumber].data.url);
				
			}else {
				receivedMessage.channel.send(nekoembed2);
				
			}
			
	
				
	

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function toysCommand(arguments, receivedMessage) {
	try {
		

		const { body } = await superagent.get(
			"https://www.reddit.com/r/ToysGW.json?sort=top&t=year"
		  );

		const allowed = receivedMessage.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
		const randomnumber = Math.floor(Math.random() * allowed.length)

		let nekoembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)

			let nekoembed2 = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.setImage(allowed[randomnumber].data.url)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)
						

			
			if (allowed[randomnumber].data.url.startsWith("https://redgifs.com/" || "https://www.redgifs.com/")){
				receivedMessage.channel.send(nekoembed);
				receivedMessage.channel.send(allowed[randomnumber].data.url);
				
			}else {
				receivedMessage.channel.send(nekoembed2);
				
			}
			
	
				
	

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function PeggingCommand(arguments, receivedMessage) {
	try {
		

		const { body } = await superagent.get(
			"https://www.reddit.com/r/pegging.json?sort=top&t=year"
		  );

		const allowed = receivedMessage.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
		const randomnumber = Math.floor(Math.random() * allowed.length)

		let nekoembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)

			let nekoembed2 = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.setImage(allowed[randomnumber].data.url)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)
						

			
			if (allowed[randomnumber].data.url.startsWith("https://redgifs.com/" || "https://www.redgifs.com/")){
				receivedMessage.channel.send(nekoembed);
				receivedMessage.channel.send(allowed[randomnumber].data.url);
				
			}else {
				receivedMessage.channel.send(nekoembed2);
				
			}
			
	
				
	

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}


async function collaredCommand(arguments, receivedMessage) {
	try {
		

		const { body } = await superagent.get(
			"https://www.reddit.com/r/collared.json?sort=top&t=year"
		  );

		const allowed = receivedMessage.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
		const randomnumber = Math.floor(Math.random() * allowed.length)

		let nekoembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)

			let nekoembed2 = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.setImage(allowed[randomnumber].data.url)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)
						

			
			if (allowed[randomnumber].data.url.startsWith("https://redgifs.com/" || "https://www.redgifs.com/")){
				receivedMessage.channel.send(nekoembed);
				receivedMessage.channel.send(allowed[randomnumber].data.url);
				
			}else {
				receivedMessage.channel.send(nekoembed2);
				
			}
			
	
				
	

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}


async function PeggingCommand(arguments, receivedMessage) {
	try {
		

		const { body } = await superagent.get(
			"https://www.reddit.com/r/Pegging.json?sort=top&t=year"
		  );

		const allowed = receivedMessage.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
		const randomnumber = Math.floor(Math.random() * allowed.length)

		let nekoembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)

			let nekoembed2 = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.setImage(allowed[randomnumber].data.url)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)
						

			
			if (allowed[randomnumber].data.url.startsWith("https://redgifs.com/" || "https://www.redgifs.com/")){
				receivedMessage.channel.send(nekoembed);
				receivedMessage.channel.send(allowed[randomnumber].data.url);
				
			}else {
				receivedMessage.channel.send(nekoembed2);
				
			}
			
	
				
	

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}



async function rbdsmCommand(arguments, receivedMessage) {
	try {
		

		const { body } = await superagent.get(
			"https://www.reddit.com/r/bdsm.json?sort=top&t=year"
		  );

		const allowed = receivedMessage.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
		const randomnumber = Math.floor(Math.random() * allowed.length)

		let nekoembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)

			let nekoembed2 = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.setImage(allowed[randomnumber].data.url)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)
						

			
			if (allowed[randomnumber].data.url.startsWith("https://redgifs.com/" || "https://www.redgifs.com/")){
				receivedMessage.channel.send(nekoembed);
				receivedMessage.channel.send(allowed[randomnumber].data.url);
				
			}else if (allowed[randomnumber].data.url.startsWith("https://www.reddit.com/r/bdsm/comments/medwup/subreddit_rules_reformatted_and_posted_for_your/")){
				rbdsmCommand(arguments, receivedMessage);

			}else {
				receivedMessage.channel.send(nekoembed2);
				
			}
			
	
				
	

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}


async function gay2Command(arguments, receivedMessage) {
	try {
		

		const { body } = await superagent.get(
			"https://www.reddit.com/r/gaynsfw.json?sort=top&t=year"
		  );

		const allowed = receivedMessage.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
		const randomnumber = Math.floor(Math.random() * allowed.length)

		let nekoembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)

			let nekoembed2 = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle(allowed[randomnumber].data.title)
			.setDescription("Posted by: " + allowed[randomnumber].data.author)
			.setImage(allowed[randomnumber].data.url)
			.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
			.setURL(allowed[randomnumber].data.url)
						

			
			if (allowed[randomnumber].data.url.startsWith("https://redgifs.com/" || "https://www.redgifs.com/")){
				receivedMessage.channel.send(nekoembed);
				receivedMessage.channel.send(allowed[randomnumber].data.url);
				
			}else {
				receivedMessage.channel.send(nekoembed2);
				
			}
			
	
				
	

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}


async function abalCommand(arguments, receivedMessage) {
	try {
		if (receivedMessage.member.hasPermission("ADMINISTRATOR")) {

			const economy = require(__dirname + "/economy.js")
			const mention = receivedMessage.mentions.users.first()
			if (!mention) {
				receivedMessage.reply('You did not say who you wanted to add to')
				return
			}


			const coins = Number(arguments[1])

			console.log(coins)
			if (isNaN(coins)) {
				receivedMessage.reply('please give a valid number of :PeachCurrency:')
			}
			if (coins < 0) {
				receivedMessage.reply('Cannot give negative amount of :PeachCurrency:')
			} else if (coins > 0) {
				const guildId = receivedMessage.guild.id
				const userId = mention.id


				const newCoins = await economy.addcoins(guildId, userId, coins)

				receivedMessage.reply(`you have given <@${userId}> ${coins} Peaches they now have ${newCoins} :PeachCurrency:`)

			}
		} else {
			receivedMessage.reply('You dont have admin rights sorry')
		}

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function sbalCommand(arguments, receivedMessage) {
	try {
		if (receivedMessage.member.hasPermission("ADMINISTRATOR")) {


			const economy = require(__dirname + "/economy.js")
			const mention = receivedMessage.mentions.users.first()
			if (!mention) {
				receivedMessage.reply('You did not say who you wanted to add to')
				return
			}

			const coins = -Number(arguments[1])
			console.log(coins)
			if (isNaN(coins)) {
				receivedMessage.reply('please give a valid number of :PeachCurrency:')
			}

			if (coins > 0) {
				receivedMessage.reply('Cannot remove a negative amount of :PeachCurrency:')
			} else if (coins < 0) {

				const guildId = receivedMessage.guild.id
				const userId = mention.id

				const newCoins = await economy.subcoins(guildId, userId, coins)

				receivedMessage.reply(`you have subtracted <@${userId}> ${coins} Peaches they now have ${newCoins} :PeachCurrency:`)
			}
		} else {
			receivedMessage.reply('You dont have admin rights sorry')
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function dogCommand(arguments, receivedMessage) {

	try {
		const Reply = arguments[0];
		fetch("https://nekos.life/api/v2/img/woof")
			.then(res => res.json())
			.then(json => {
				let nekoembed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle("woof~!")
					.setImage(json.url)




				receivedMessage.channel.send(nekoembed);

			});

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}


async function avCommand(arguments, receivedMessage) {
	try {

		let mentionedMember = receivedMessage.mentions.users.first()

		if (!mentionedMember) {
			mentionedMember = receivedMessage.author
		}


		let embed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setAuthor(`${mentionedMember.tag}'s Avatar`)
			.setImage(mentionedMember.displayAvatarURL({ dynamic: true, size: 512 }))

		receivedMessage.channel.send(embed);


	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function tweetCommand(arguments, receivedMessage) {
	try {

		let text = arguments[1];

		let mentionedMember = receivedMessage.mentions.users.first()

		if (!mentionedMember) {
			mentionedMember = receivedMessage.author
			
		}

		let profile = mentionedMember.displayAvatarURL({ dynamic: false, format: 'png' })

		fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${mentionedMember.username}&text=${text}&raw=1${profile}`).then(res => res.json())
			.then(json => {

				let embed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setImage(json.message)

					console.log(json.message)

				receivedMessage.channel.send(embed);

			});



		



	} catch (err) {
		catchERR(err, receivedMessage);
	}


}


async function smhCommand(arguments, receivedMessage) {

	try {


		const rando = imgs.smhimg[Math.floor(Math.random() * imgs.smhimg.length)];

		if (rando == 0) {
			rando == 1
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Yikes")
				.setDescription(receivedMessage.author.toString() + " Shakes their head. Looks like someone did something stupid")
				.setImage(rando)




			receivedMessage.channel.send(hugembed);
		}


		let hugembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle("Yikes")
			.setDescription(receivedMessage.author.toString() + " Shakes their head. Looks like someone did something stupid")
			.setImage(rando)




		receivedMessage.channel.send(hugembed);
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function updateCommand(arguments, receivedMessage) {

	try {
		 
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Updates")
				.setDescription("`==Added==`")
				.addField("`1.`", "rpanties command", false)
				.addField("`2.`", "rthighs command", false)
				.addField("`3.`", "r34random command", false)
				.addField("`4.`", "r34search command", false)
				.addField("`5.`", "rlesbian command", false)
				.addField("`6.`", "rgay command", false)
				.addField("`7.`", "rbdsm command", false)
				.addField("`7.`", "pegged command", false)
				.addField("`7.`", "collared command", false)
				.addField("`7.`", "toys command", false)
				.addField("`7.`", "tattoos command", false)
				.addField("`7.`", "tiny command", false)
				.addField("`7.`", "traps command", false)
				.addField("`7.`", "bottomless command", false)
				.addField("`7.`", "group command", false)
				.addField("`7.`", "pawg command", false)
				
				
				
			


			receivedMessage.channel.send(hugembed);
		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function bdsmCommand(arguments, receivedMessage) {

	try {
		 
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("K-kinky~")
				.setImage(await akaneko.nsfw.bdsm())
			


			receivedMessage.channel.send(hugembed);
		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function maidCommand(arguments, receivedMessage) {

	try {
		 
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("S-Senpai~")
				.setImage(await akaneko.nsfw.maid())
			


			receivedMessage.channel.send(hugembed);
		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function orgyCommand(arguments, receivedMessage) {

	try {
		 
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("O-oh my!")
				.setImage(await akaneko.nsfw.orgy())
			


			receivedMessage.channel.send(hugembed);
		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function foxCommand(arguments, receivedMessage) {

	try {
		 
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("who's a wittle good fox~")
				.setImage(await akaneko.nsfw.foxgirl())
			


			receivedMessage.channel.send(hugembed);
		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function doujinCommand(arguments, receivedMessage) {

	try {
		 
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("hands you doujin")
				.setImage(await akaneko.nsfw.doujin())
			


			receivedMessage.channel.send(hugembed);
		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function pantiesCommand(arguments, receivedMessage) {

	try {
		 
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("oop there was a gust of wind~")
				.setImage(await akaneko.nsfw.panties())
			


			receivedMessage.channel.send(hugembed);
		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function schoolCommand(arguments, receivedMessage) {

	try {
		 
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("B-BAKA~!")
				.setImage(await akaneko.nsfw.school())
			


			receivedMessage.channel.send(hugembed);
		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function tentaclesCommand(arguments, receivedMessage) {

	try {
		 
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Slimyyy")
				.setImage(await akaneko.nsfw.tentacles())
			


			receivedMessage.channel.send(hugembed);
		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function thighsCommand(arguments, receivedMessage) {

	try {
		 
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Ara ara~")
				.setImage(await akaneko.nsfw.thighs())
			


			receivedMessage.channel.send(hugembed);
		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function uniformCommand(arguments, receivedMessage) {

	try {
		 
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Sexy~")
				.setImage(await akaneko.nsfw.uniform())
			


			receivedMessage.channel.send(hugembed);
		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function zettaiCommand(arguments, receivedMessage) {

	try {
		 
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Sexy~")
				.setImage(await akaneko.nsfw.zettaiRyouiki())
			


			receivedMessage.channel.send(hugembed);
		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}


async function owoCommand(arguments, receivedMessage) {
	try {

		var Text = arguments.join(" ");

		receivedMessage.delete();
		receivedMessage.channel.send(receivedMessage.author.toString() + " **says:** " + owoify(Text));


	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function gunCommand(arguments, receivedMessage) {
	try {

		let mentionedMember = receivedMessage.mentions.users.first()

		if (!mentionedMember) {
			mentionedMember = receivedMessage.author
		}


		receivedMessage.delete();
		const canvas = Canvas.createCanvas(620, 512);
		const ctx = canvas.getContext('2d');
		const avatar = await Canvas.loadImage(mentionedMember.displayAvatarURL({ format: 'jpg' }));
		ctx.drawImage(avatar, 25, 25, 512, 512);

		const Gun = await Canvas.loadImage(__dirname + '/imgs/c75.png');
		ctx.drawImage(Gun, 350, 200, 300, 300);

		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'gun.png');

		receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
		receivedMessage.channel.send(attachment);

	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function triggerCommand(arguments, receivedMessage) {
	try {

		let mentionedMember = receivedMessage.mentions.users.first()

		if (!mentionedMember) {
			mentionedMember = receivedMessage.author
		}
		receivedMessage.delete();
		let avatar = mentionedMember.displayAvatarURL({ dynamic: false, format: 'png' });
		let image = await canvacord.Canvas.trigger(avatar);
		let attachment = new Discord.MessageAttachment(image, "triggered.gif");

		receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
		return receivedMessage.channel.send(attachment);



	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function beautifulCommand(arguments, receivedMessage) {
	try {

		let mentionedMember = receivedMessage.mentions.users.first()

		if (!mentionedMember) {
			mentionedMember = receivedMessage.author
		}
		receivedMessage.delete();
		let avatar = mentionedMember.displayAvatarURL({ dynamic: false, format: 'png' });
		let image = await canvacord.Canvas.beautiful(avatar);
		let attachment = new Discord.MessageAttachment(image, "beautiful.gif");

		receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
		return receivedMessage.channel.send(attachment);



	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function ripCommand(arguments, receivedMessage) {
	try {

		let mentionedMember = receivedMessage.mentions.users.first()

		if (!mentionedMember) {
			mentionedMember = receivedMessage.author
		}
		receivedMessage.delete();
		let avatar = mentionedMember.displayAvatarURL({ dynamic: false, format: 'png' });
		let image = await canvacord.Canvas.rip(avatar);
		let attachment = new Discord.MessageAttachment(image, "rip.png");

		receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
		return receivedMessage.channel.send(attachment);



	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function slapimgCommand(arguments, receivedMessage) {
	try {

		let mentionedMember = receivedMessage.mentions.users.first()
		let author = receivedMessage.author

		if (!mentionedMember) {
			receivedMessage.channel.send("you didnt say who you wanted too slap");
			return;
		}
		receivedMessage.delete();
		let avatar = mentionedMember.displayAvatarURL({ dynamic: false, format: 'png' });
		let aavatar = author.displayAvatarURL({ dynamic: false, format: 'png' });
		let image = await canvacord.Canvas.slap(aavatar, avatar);
		let attachment = new Discord.MessageAttachment(image, "slap.png");

		receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
		return receivedMessage.channel.send(attachment);



	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function shipCommand(arguments, receivedMessage) {
	try {

		const mentions = receivedMessage.mentions.users.first(3);
		const firstMention = mentions[0];
		const secondMention = mentions[1];
		let author = receivedMessage.author
		let precent = (Math.floor(Math.random() * 100) + 1)

		if (firstMention == author) {
			return receivedMessage.channel.send("you cant tag yourself silly");
		}

		if (!firstMention) {
			return receivedMessage.channel.send("You didnt tag anyone!");
		}

		if (!secondMention) {

			const canvas = Canvas.createCanvas(960, 320);
			const ctx = canvas.getContext('2d');
			const avatar1 = await Canvas.loadImage(author.displayAvatarURL({ format: 'jpg' }));
			const avatar2 = await Canvas.loadImage(firstMention.displayAvatarURL({ format: 'jpg' }));
			const ship = await Canvas.loadImage(__dirname + '/imgs/ship.png');

			ctx.drawImage(ship, 0, 0, 960, 320);
			ctx.drawImage(avatar1, 25, 25, 260, 260);
			ctx.drawImage(avatar2, 670, 25, 260, 260);
			ctx.font = '70px Impact'
			ctx.fillText(`${precent}%`, 420, 180)

			const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'ship.png');


			receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
			//receivedMessage.channel.send(`${precent}%`);
			return receivedMessage.channel.send(attachment);


		} else {

			const canvas = Canvas.createCanvas(960, 320);
			const ctx = canvas.getContext('2d');
			const avatar1 = await Canvas.loadImage(firstMention.displayAvatarURL({ format: 'jpg' }));
			const avatar2 = await Canvas.loadImage(secondMention.displayAvatarURL({ format: 'jpg' }));
			const ship = await Canvas.loadImage(__dirname + '/imgs/ship.png');

			ctx.drawImage(ship, 0, 0, 960, 320);
			ctx.drawImage(avatar1, 25, 25, 260, 260);
			ctx.drawImage(avatar2, 670, 25, 260, 260);
			ctx.font = '70px Impact'
			ctx.fillText(`${precent}%`, 420, 180)

			const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'ship.png');


			receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
			//receivedMessage.channel.send(`${precent}%`);
			return receivedMessage.channel.send(attachment);

		}

	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function spankCommand(arguments, receivedMessage) {
	try {

		let mentionedMember = receivedMessage.mentions.users.first()
		let author = receivedMessage.author

		if (!mentionedMember) {
			receivedMessage.channel.send("you didnt say who you wanted too spank");
			return;
		}
		receivedMessage.delete();
		let avatar = mentionedMember.displayAvatarURL({ dynamic: false, format: 'png' });
		let aavatar = author.displayAvatarURL({ dynamic: false, format: 'png' });
		let image = await canvacord.Canvas.spank(aavatar, avatar);
		let attachment = new Discord.MessageAttachment(image, "spank.png");

		receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
		return receivedMessage.channel.send(attachment);



	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function wantedCommand(arguments, receivedMessage) {
	try {

		let mentionedMember = receivedMessage.mentions.users.first()

		if (!mentionedMember) {
			mentionedMember = receivedMessage.author
		}
		receivedMessage.delete();
		let avatar = mentionedMember.displayAvatarURL({ dynamic: false, format: 'png' });
		let image = await canvacord.Canvas.wanted(avatar);
		let attachment = new Discord.MessageAttachment(image, "wanted.png");

		receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
		return receivedMessage.channel.send(attachment);



	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function wastedCommand(arguments, receivedMessage) {
	try {

		let mentionedMember = receivedMessage.mentions.users.first()

		if (!mentionedMember) {
			mentionedMember = receivedMessage.author
		}
		receivedMessage.delete();
		let avatar = mentionedMember.displayAvatarURL({ dynamic: false, format: 'png' });
		let image = await canvacord.Canvas.wasted(avatar);
		let attachment = new Discord.MessageAttachment(image, "wasted.png");

		receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
		return receivedMessage.channel.send(attachment);



	} catch (err) {
		catchERR(err, receivedMessage);
	}
}



async function reasonCommand(arguments, receivedMessage) {
	try {

		let mentionedMember = receivedMessage.mentions.users.first()

		if (!mentionedMember) {
			mentionedMember = receivedMessage.author
		}


		receivedMessage.delete();
		const canvas = Canvas.createCanvas(359, 810);
		const ctx = canvas.getContext('2d');
		const reason = await Canvas.loadImage(__dirname + '/imgs/reason.png');
		ctx.drawImage(reason, 0, 0, 359, 810);

		const avatar = await Canvas.loadImage(mentionedMember.displayAvatarURL({ format: 'jpg' }));
		ctx.drawImage(avatar, 25, 400, 140, 140);

		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'reason.png');

		receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
		receivedMessage.channel.send(attachment);

	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function yeetCommand(arguments, receivedMessage) {
	try {

		let mentionedMember = receivedMessage.mentions.users.first()

		if (!mentionedMember) {
			mentionedMember = receivedMessage.author
		}


		receivedMessage.delete();
		const canvas = Canvas.createCanvas(512, 512);
		const ctx = canvas.getContext('2d');
		const reason = await Canvas.loadImage(__dirname + '/imgs/yeet.jpg');
		ctx.drawImage(reason, 0, 0, 512, 512);
		ctx.rotate(-0.3)
		const avatar = await Canvas.loadImage(mentionedMember.displayAvatarURL({ format: 'jpg' }));
		ctx.drawImage(avatar, 280, 230, 120, 120);

		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'reason.png');

		receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
		receivedMessage.channel.send(attachment);

	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function licenseCommand(arguments, receivedMessage) {
	try {

		let mentionedMember = receivedMessage.mentions.users.first()

		if (!mentionedMember) {
			mentionedMember = receivedMessage.author
		}


		receivedMessage.delete();
		const canvas = Canvas.createCanvas(512, 512);
		const ctx = canvas.getContext('2d');
		const license = await Canvas.loadImage(__dirname + '/imgs/license.png');
		ctx.drawImage(license, 0, 0, 512, 512);
		ctx.rotate(-0.3)
		const avatar = await Canvas.loadImage(mentionedMember.displayAvatarURL({ format: 'jpg' }));
		ctx.drawImage(avatar, 5, 230, 120, 120);

		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'license.png');

		receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
		receivedMessage.channel.send(attachment);

	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function jailCommand(arguments, receivedMessage) {
	try {

		let mentionedMember = receivedMessage.mentions.users.first()

		if (!mentionedMember) {
			mentionedMember = receivedMessage.author
		}


		receivedMessage.delete();
		const canvas = Canvas.createCanvas(600, 512);
		const ctx = canvas.getContext('2d');
		const avatar = await Canvas.loadImage(mentionedMember.displayAvatarURL({ format: 'jpg' }));
		ctx.drawImage(avatar, 25, 25, 512, 512);

		const jail = await Canvas.loadImage(__dirname + '/imgs/jail.png');
		ctx.drawImage(jail, 25, 25, 512, 512);

		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'jail.png');

		receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
		receivedMessage.channel.send(attachment);

	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function whymaskCommand(arguments, receivedMessage) {
	try {

		let mentionedMember = receivedMessage.mentions.users.first()

		if (!mentionedMember) {
			mentionedMember = receivedMessage.author
		}


		receivedMessage.delete();
		const canvas = Canvas.createCanvas(600, 512);
		const ctx = canvas.getContext('2d');


		const mask = await Canvas.loadImage(__dirname + '/imgs/whymask.jpg');
		ctx.drawImage(mask, 25, 25, 512, 512);

		ctx.beginPath();
		ctx.arc(125, 390, 60, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.clip();
		const avatar = await Canvas.loadImage(mentionedMember.displayAvatarURL({ format: 'jpg' }));
		ctx.drawImage(avatar, 60, 330, 120, 120);

		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'why.png');

		receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
		receivedMessage.channel.send(attachment);

	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function pspsCommand(arguments, receivedMessage) {
	try {


		let mentionedMember = receivedMessage.mentions.users.first()

		if (!mentionedMember) {
			mentionedMember = receivedMessage.author
		}



		receivedMessage.delete();
		const canvas = Canvas.createCanvas(600, 512);
		const ctx = canvas.getContext('2d');


		const mask = await Canvas.loadImage(__dirname + '/imgs/psps.jpg');
		ctx.drawImage(mask, 25, 25, 512, 512);

		ctx.beginPath();
		ctx.arc(370, 320, 120, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.clip();
		const avatar = await Canvas.loadImage(mentionedMember.displayAvatarURL({ format: 'jpg' }));
		ctx.drawImage(avatar, 230, 160, 280, 280);

		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'psps.png');

		receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
		receivedMessage.channel.send(attachment);

	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function gayCommand(arguments, receivedMessage) {
	try {

		let mentionedMember = receivedMessage.mentions.users.first()

		if (!mentionedMember) {
			mentionedMember = receivedMessage.author
		}


		receivedMessage.delete();
		const canvas = Canvas.createCanvas(600, 512);
		const ctx = canvas.getContext('2d');
		const avatar = await Canvas.loadImage(mentionedMember.displayAvatarURL({ format: 'jpg' }));
		ctx.drawImage(avatar, 25, 25, 512, 512);
		ctx.globalAlpha = 0.5
		const jail = await Canvas.loadImage(__dirname + '/imgs/gay.png');
		ctx.drawImage(jail, 25, 25, 512, 512);

		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'gay.png');

		receivedMessage.channel.send(`**Requested by:** ${receivedMessage.author.toString()}`);
		receivedMessage.channel.send(attachment);

	} catch (err) {
		catchERR(err, receivedMessage);
	}
}



async function boopCommand(arguments, receivedMessage) {
	try {

		const user = receivedMessage.mentions.users.first();

		const rando = imgs.boopimg[Math.floor(Math.random() * imgs.boopimg.length)];

		if (rando == 0) {
			rando == 1

			if (!user) {
				receivedMessage.channel.send("You did not say who you wanted to boop!");
			}

			if (user) {
				let hugembed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle("Boop!")
					.setDescription(receivedMessage.author.toString() + " Boops " + user.toString())
					.setImage(rando)

				receivedMessage.channel.send(hugembed);
			}

		}

		if (!user) {
			receivedMessage.channel.send("You did not say who you wanted to boop!");
		}

		if (user) {
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Boop!")
				.setDescription(receivedMessage.author.toString() + " Boops " + user.toString())
				.setImage(rando)

			receivedMessage.channel.send(hugembed);
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}

}

async function eggCommand(arguments, receivedMessage) {
	try {


		let embed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle("oooh  lookie here~ ❤️")
			.setDescription("someone just found our little secret hm~?")
			.setImage("https://66.media.tumblr.com/827b8e793dcb830ca0678f61c63975fa/tumblr_ot1jea4BYq1wobjc9o3_500.gif")

		receivedMessage.channel.send(embed);

	} catch (err) {
		catchERR(err, receivedMessage);
	}

}

async function danceCommand(arguments, receivedMessage) {
	try {

		const rando = imgs.danceimg[Math.floor(Math.random() * imgs.danceimg.length)];

		if (rando == 0) {
			rando == 1

			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Woahhhhhh")
				.setDescription(receivedMessage.author.toString() + " Starts Dancing (someone's happy!) ")
				.setImage(rando)

			receivedMessage.channel.send(hugembed);
		}


		let hugembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle("Woahhhhhh")
			.setDescription(receivedMessage.author.toString() + " Starts Dancing (someone's happy!) ")
			.setImage(rando)




		receivedMessage.channel.send(hugembed);

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}


async function hfCommand(arguments, receivedMessage) {
	try {
		const user = receivedMessage.mentions.users.first();



		const rando = imgs.hfimg[Math.floor(Math.random() * imgs.hfimg.length)];

		if (rando == 0) {
			rando == 1

			if (!user) {
				receivedMessage.channel.send("You did not say who you wanted to High Five!");
			}

			if (user) {
				let hfembed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle("High Five!")
					.setDescription(receivedMessage.author.toString() + " High five's " + user.toString())
					.setImage(rando)


				receivedMessage.channel.send(hfembed);
			}
		}




		if (!user) {
			receivedMessage.channel.send("You did not say who you wanted to High Five!");
		}

		if (user) {
			let hfembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("High Five!")
				.setDescription(receivedMessage.author.toString() + " High five's " + user.toString())
				.setImage(rando)


			receivedMessage.channel.send(hfembed);
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}

}


async function whoisCommand(arguments, receivedMessage) {
	try {
		const { guild, channel } = receivedMessage

	let user = receivedMessage.mentions.users.first()
    const member = guild.members.cache.get(user.id)

	const mapp = member.roles.cache.map(r => `${r}`).join(", ")
		
	let embed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setThumbnail(user.displayAvatarURL())
				.setTitle(`User info for ${user.username}`, user.displayAvatarURL())
				.addField(`Name:`, `${user.tag}`, false)
				.addField(`Is bot:`, `${user.bot}`, false)
				.addField(`Nickname:`, `${member.nickname}`, false)
				.addField(`Joined Server:`, `${new Date(member.joinedTimestamp).toLocaleDateString()}`, false)
				.addField(`Joined Discord:`, `${new Date(user.createdTimestamp).toLocaleDateString()}`, false)
				.addField(`Role amount:`, `${member.roles.cache.size - 1}`, false)
				.addField('Roles:', mapp.length <= 1024 ? mapp : 'Too many roles to list', true)
        

    channel.send(embed)
  
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}

}

async function bakaCommand(arguments, receivedMessage) {
	try {

		fetch("https://nekos.life/api/v2/img/baka")
			.then(res => res.json())
			.then(json => {
				let nekoembed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle("BAKA!")
					.setDescription(receivedMessage.author.toString() + " Is mad")
					.setImage(json.url)





				receivedMessage.channel.send(nekoembed);

			});

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function rboobsCommand(arguments, receivedMessage) {
	try {

		

		const id = [Math.floor(Math.random() * 10930)];
    	const res = await superagent.get(`http://api.oboobs.ru/boobs/${id}`);
   	 	const preview = res.body[0]["PREVIEW".toLowerCase()];
    	const image = `http://media.oboobs.ru/${preview}`;

			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("jiggles")
				.setImage(image)

			receivedMessage.channel.send(hugembed);
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function rpussyCommand(arguments, receivedMessage) {
	try {

		

		const { body } = await superagent.get(
			"https://nekobot.xyz/api/image?type=pussy"
		  );
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("drips~")
				.setImage(body.message)

			receivedMessage.channel.send(hugembed);
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function rassCommand(arguments, receivedMessage) {
	try {

		

		const { body } = await superagent.get(
			"https://nekobot.xyz/api/image?type=ass"
		  );
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("drips~")
				.setImage(body.message)

			receivedMessage.channel.send(hugembed);
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function ranalCommand(arguments, receivedMessage) {
	try {

		

		const { body } = await superagent.get(
			"https://nekobot.xyz/api/image?type=anal"
		  );
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("drips~")
				.setImage(body.message)

			receivedMessage.channel.send(hugembed);
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function r34randomCommand(arguments, receivedMessage) {
	try {

	const data = await R34.random(1, 'gif')

	
	

			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("naughty naughty~")
				.setImage(data.data[0].media)

		receivedMessage.channel.send(hugembed);
		
			
		
		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function r34searchCommand(arguments, receivedMessage) {
	try {
		const image = arguments[0];
		
		if (!image)
		{
			receivedMessage.channel.send("**You havent told me what to search**");
			return;
		}
		const data = await R34.search(image);



			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("naughty naughty~")
				.setImage(data.data.media)

		receivedMessage.channel.send(hugembed);
	
			
		
		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function rpantiesCommand(arguments, receivedMessage) {
	try {

		
		DabiClient.nsfw.real.panties().then(json => {

			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("oop there was a gust of wind~")
				.setImage(json.url)

		receivedMessage.channel.send(hugembed);
			console.log(json);
		}).catch(error => {
			console.log(error);
			// outputs error
		});
		

		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function rthighsCommand(arguments, receivedMessage) {
	try {

		
		DabiClient.nsfw.real.thighs().then(json => {

			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Ticc~")
				.setImage(json.url)

		receivedMessage.channel.send(hugembed);
			console.log(json);
		}).catch(error => {
			console.log(error);
			// outputs error
		});
		

		
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function porngifCommand(arguments, receivedMessage) {
	try {

		

		const { body } = await superagent.get(
			"https://nekobot.xyz/api/image?type=pgif"
		  );
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Here ya go~")
				.setImage(body.message)

			receivedMessage.channel.send(hugembed);
		
	} catch (err) {
		catchERR(err, receivedMessage);
	}


}

async function memeCommand(arguments, receivedMessage) {

	try {



		fetch('https://meme-api.herokuapp.com/gimme')
			.then(res => res.json())
			.then(json => {
				let embed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle("MEME")
					.setDescription(json.title)
					//.setDescription(json.title)
					.setImage(json.url)
					.setFooter(`🔗: ${json.postLink} | Subreddit: ${json.subreddit}`)
				receivedMessage.channel.send(embed);

			});

	} catch (err) {
		catchERR(err, receivedMessage);
	}


}


async function smileCommand(arguments, receivedMessage) {

	try {

		const rando = imgs.smileimg[Math.floor(Math.random() * imgs.smileimg.length)];

		if (rando == 0) {
			rando == 1
			let smileembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Awwwe! 😊")
				.setDescription(receivedMessage.author.toString() + " Is smiling (cute)") //receivedMessage.author.toString() gets the user who sent the message Tag!S
				.setImage(rando)

			receivedMessage.channel.send(smileembed);

		}

		let smileembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle("Awwwe! 😊")
			.setDescription(receivedMessage.author.toString() + " Is smiling (cute)") //receivedMessage.author.toString() gets the user who sent the message Tag!S
			.setImage(rando)

		receivedMessage.channel.send(smileembed);
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}


async function reviveCommand(arguments, receivedMessage) {

	try {

		const user = receivedMessage.mentions.users.first();

		const rando = imgs.reviveimg[Math.floor(Math.random() * imgs.reviveimg.length)];

		if (rando == 0) {
			rando == 1

			if (!user) {
				receivedMessage.channel.send("You did not say who you wanted to revive");
			}


			if (user) {
				let resembed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle("Woosh!")
					.setDescription(receivedMessage.author.toString() + " Revives " + user.toString() + "what a good teammate!")
					.setImage(rando)


				receivedMessage.channel.send(resembed);
			}

		}

		if (!user) {
			receivedMessage.channel.send("You did not say who you wanted to revive");
		}


		if (user) {
			let resembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Woosh!")
				.setDescription(receivedMessage.author.toString() + " Revives " + user.toString() + "what a good teammate!")
				.setImage(rando)


			receivedMessage.channel.send(resembed);
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}

}

async function lickCommand(arguments, receivedMessage) {
	const user = receivedMessage.mentions.users.first();
	try {

		const rando = imgs.lickimg[Math.floor(Math.random() * imgs.lickimg.length)];

		if (rando == 0) {

			rando == 1

			if (!user) {
				receivedMessage.channel.send("You did not say who you wanted to lick!");
			}

			if (user) {
				let lickembed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle("ummm...")
					.setDescription(receivedMessage.author.toString() + " Licks " + user.toString() + " I guess " + receivedMessage.author.toString() + " is a cat!")
					.setImage(rando)

				receivedMessage.channel.send(lickembed);
			}
		}


		if (!user) {
			receivedMessage.channel.send("You did not say who you wanted to lick!");
		}

		if (user) {
			let lickembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("ummm...")
				.setDescription(receivedMessage.author.toString() + " Licks " + user.toString() + " I guess " + receivedMessage.author.toString() + " is a cat!")
				.setImage(rando)

			receivedMessage.channel.send(lickembed);
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}

}

async function slapCommand(arguments, receivedMessage) {


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







					receivedMessage.channel.send(nekoembed);
				});

		}

	} catch (err) {
		catchERR(err, receivedMessage);
	}

}
async function punchCommand(arguments, receivedMessage) {
	try {
		const img = [
			,



		];
		const user = receivedMessage.mentions.users.first();
		const rando = imgs.punchimg[Math.floor(Math.random() * imgs.punchimg.length)];

		if (rando == 0) {

			rando == 1

			if (!user) {
				receivedMessage.channel.send("You did not say who you wanted to Punch!");
			}

			if (user) {
				let hugembed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle("OUCH!")
					.setDescription(receivedMessage.author.toString() + " Punches " + user.toString())
					.setImage(rando)


				receivedMessage.channel.send(hugembed);
			}
		}


		if (!user) {
			receivedMessage.channel.send("You did not say who you wanted to Punch!");
		}

		if (user) {
			let hugembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("OUCH!")
				.setDescription(receivedMessage.author.toString() + " Punches " + user.toString())
				.setImage(rando)


			receivedMessage.channel.send(hugembed);
		}

	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function carryCommand(arguments, receivedMessage) {
	try {

		const user = receivedMessage.mentions.users.first();

		const rando = imgs.carryimg[Math.floor(Math.random() * imgs.carryimg.length)];

		if (rando == 0) {
			rando == 1
			if (!user) {
				receivedMessage.channel.send("You did not say who you wanted to carry!");
			}

			if (user) {
				let carryembed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle("Awwwe ❤️")
					.setDescription(receivedMessage.author.toString() + " Carries " + user.toString() + "❤️")
					.setImage(rando)

				receivedMessage.channel.send(carryembed);
			}
		}

		if (!user) {
			receivedMessage.channel.send("You did not say who you wanted to carry!");
		}

		if (user) {
			let carryembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Awwwe ❤️")
				.setDescription(receivedMessage.author.toString() + " Carries " + user.toString() + "❤️")
				.setImage(rando)

			receivedMessage.channel.send(carryembed);
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}

}

async function runCommand(arguments, receivedMessage) {
	try {

		const rando = imgs.runimg[Math.floor(Math.random() * imgs.runimg.length)];

		if (rando == 0) {
			rando == 1
			let runembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("NANI?")
				.setDescription(receivedMessage.author.toString() + " runs away!") //receivedMessage.author.toString() gets the user who sent the message Tag!S
				.setImage(rando)

			receivedMessage.channel.send(runembed);
		}

		let runembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle("NANI?")
			.setDescription(receivedMessage.author.toString() + " runs away!") //receivedMessage.author.toString() gets the user who sent the message Tag!S
			.setImage(rando)

		receivedMessage.channel.send(runembed);
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function sleepCommand(arguments, receivedMessage) {
	try {

		const rando = imgs.sleepimg[Math.floor(Math.random() * imgs.sleepimg.length)];

		if (rando == 0) {
			rando == 1
			let sleepembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("SHHhh.")
				.setDescription(receivedMessage.author.toString() + " is fast asleep! 😴") //receivedMessage.author.toString() gets the user who sent the message Tag!S
				.setImage(rando)


			receivedMessage.channel.send(sleepembed);
		}

		let sleepembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle("SHHhh.")
			.setDescription(receivedMessage.author.toString() + " is fast asleep! 😴") //receivedMessage.author.toString() gets the user who sent the message Tag!S
			.setImage(rando)


		receivedMessage.channel.send(sleepembed);
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function cryCommand(arguments, receivedMessage) {
	try {

		const rando = imgs.cryimg[Math.floor(Math.random() * imgs.cryimg.length)];

		if (rando == 0) {
			rando == 1

			let cryembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("T^T")
				.setDescription(
					"poor " + receivedMessage.author.toString() + " is crying..."
				) //receivedMessage.author.toString() gets the user who sent the message Tag!S
				.setImage(rando)


			receivedMessage.channel.send(cryembed);
		}


		let cryembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle("T^T")
			.setDescription(
				"poor " + receivedMessage.author.toString() + " is crying..."
			) //receivedMessage.author.toString() gets the user who sent the message Tag!S
			.setImage(rando)


		receivedMessage.channel.send(cryembed);
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function hideCommand(arguments, receivedMessage) {
	try {

		const rando = imgs.hideimg[Math.floor(Math.random() * imgs.hideimg.length)];

		if (rando == 0) {
			rando == 1
			let hideembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Woop!")
				.setDescription(receivedMessage.author.toString() + " Hides (peekaboo!)") //receivedMessage.author.toString() gets the user who sent the message Tag!S
				.setImage(rando)

			receivedMessage.channel.send(hideembed);

		}
		let hideembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle("Woop!")
			.setDescription(receivedMessage.author.toString() + " Hides (peekaboo!)") //receivedMessage.author.toString() gets the user who sent the message Tag!S
			.setImage(rando)

		receivedMessage.channel.send(hideembed);
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function stabCommand(arguments, receivedMessage) {
	try {

		const user = receivedMessage.mentions.users.first();

		const rando = imgs.stabimg[Math.floor(Math.random() * imgs.stabimg.length)];

		if (rando == 0) {
			rando == 1


			if (!user) {
				receivedMessage.channel.send("You did not say who you wanted to Stab!");
			}


			if (user) {
				let stabembed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle("Yikes!")
					.setDescription(receivedMessage.author.toString() + " Stabs! " + user.toString() + " they're bleeding")
					.setImage(rando)
					.setFooter(
						"If any Image is broken please DM me:"
					);
				receivedMessage.channel.send(stabembed);
			}
		}



		if (!user) {
			receivedMessage.channel.send("You did not say who you wanted to Stab!");
		}


		if (user) {
			let stabembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Yikes!")
				.setDescription(receivedMessage.author.toString() + " Stabs! " + user.toString() + " they're bleeding")
				.setImage(rando)
				.setFooter(
					"If any Image is broken please DM me:"
				);
			receivedMessage.channel.send(stabembed);
		}

	} catch (err) {
		catchERR(err, receivedMessage);
	}

}


async function biteCommand(arguments, receivedMessage) {
	try {

		const user = receivedMessage.mentions.users.first();

		const rando = imgs.biteimg[Math.floor(Math.random() * imgs.biteimg.length)];

		if (rando == 0) {
			rando == 1

			if (!user) {
				receivedMessage.channel.send("You did not say who you wanted to Bite!");
			}



			if (user) {


				let biteembed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle("Nom!")
					.setDescription(receivedMessage.author.toString() + " Bites " + user.toString() + " Awwwe Kawaii!")
					.setImage(rando)

				receivedMessage.channel.send(biteembed);

			}

		}

		if (!user) {
			receivedMessage.channel.send("You did not say who you wanted to Bite!");
		}



		if (user) {


			let biteembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Nom!")
				.setDescription(receivedMessage.author.toString() + " Bites " + user.toString() + " Awwwe Kawaii!")
				.setImage(rando)

			receivedMessage.channel.send(biteembed);

		}

	} catch (err) {
		catchERR(err, receivedMessage);
	}

}

async function drinkCommand(arguments, receivedMessage) {
	try {

		const rando = imgs.drinkimg[Math.floor(Math.random() * imgs.drinkimg.length)];

		if (rando == 0) {
			rando == 1

			let drinkembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Glug Glug!")
				.setDescription(
					receivedMessage.author.toString() +
					" Drinks somthing! (wonder what it is)"
				) //receivedMessage.author.toString() gets the user who sent the message Tag!S
				.setImage(rando)

			receivedMessage.channel.send(drinkembed);
		}
		let drinkembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle("Glug Glug!")
			.setDescription(
				receivedMessage.author.toString() +
				" Drinks somthing! (wonder what it is)"
			) //receivedMessage.author.toString() gets the user who sent the message Tag!S
			.setImage(rando)

		receivedMessage.channel.send(drinkembed);
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function eatCommand(arguments, receivedMessage) {
	try {

		const rando = imgs.eatimg[Math.floor(Math.random() * imgs.eatimg.length)];

		if (rando == 0) {
			rando == 1
			let eatembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle("Nom!")
				.setDescription(
					receivedMessage.author.toString() + " Eats something (what could it be?)"
				) //receivedMessage.author.toString() gets the user who sent the message Tag!S
				.setImage(rando)


			receivedMessage.channel.send(eatembed);
		}
		let eatembed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle("Nom!")
			.setDescription(
				receivedMessage.author.toString() + " Eats something (what could it be?)"
			) //receivedMessage.author.toString() gets the user who sent the message Tag!S
			.setImage(rando)


		receivedMessage.channel.send(eatembed);
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function patCommand(arguments, receivedMessage) {

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


					receivedMessage.channel.send(nekoembed);

				});



		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}



async function clearCommand(arguments, receivedMessage) {
	try {
		var number = arguments.join(' ').slice(0);
		if (!number) {
			receivedMessage.channel.send('I Dont see a number there!');
		}

		if (number) {
			if (receivedMessage.deletable) {
				receivedMessage.delete();
			}

			if (!receivedMessage.member.hasPermission('MANAGE_MESSAGES')) {
				receivedMessage.channel.send(
					'you dont have permission to use this command...'
				);
			}

			if (isNaN(number) || parseInt(number) <= 0) {
				receivedMessage.channel.send('That is not a number sorry');
			}

			if (!receivedMessage.guild.me.hasPermission('MANAGE_MESSAGES')) {
				receivedMessage.channel.send(
					'Apperantly I dont have permission to do that please fix that!'
				);
			}

			let deleteAmount;

			if (parseInt(number) > 100) {
				deleteAmount = 100;
			} else {
				deleteAmount = parseInt(number);
			}

			receivedMessage.channel.bulkDelete(deleteAmount, true).then(deleted =>
				receivedMessage.channel
					.send('I deleted ' + deleteAmount + ' messages for you ❤️')
					.then(d_msg => {
						setTimeout(async function () {
							d_msg.delete();
						}, 3000);
					})
			);
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

//info command is now a thing as requested by calvin~!
async function infoCommand(arguments, receivedMessage) {
	try {
		const zoe = '427835914052567040';
		const pain = '209925225691873280';
		const user = receivedMessage.author.id;

		client.users.fetch(user).then(myUser => {
			let help = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle('**Need help?**')
				.setThumbnail(
					'https://media2.giphy.com/media/1ynCEtlgMPAeNAqdnu/source.gif'
				)
				.setAuthor(`${myUser.username}`, `${myUser.avatarURL()}`)
				.setDescription(`Need help? Here are my Developers! 🥰  

**Zoe**
👩‍💻 <@${zoe}>
`);

			receivedMessage.channel.send(help);
		});
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}
/*
async function banCommand(arguments, receivedMessage) 
{
  try {
	 const user = receivedMessage.mentions.users.first();

	 const tag = `<@${user.id}>`

	 if(
	   receivedMessage.member.hasPermission('BAN_MEMBERS') || receivedMessage.member.hasPermission('ADMINISTRATOR')
	 )
	 {
	   if(user)
	   {
	   

		 receivedMessage.member.ban(user.id)
		 receivedMessage.channel.send(`${user.toString()} has been Banned`);

	   }else 
	   {
		 receivedMessage.channel.send(`Please Specify who you want too ban`);
	   }


	   }else 
	   {
		 receivedMessage.channel.send(`sorry ${author.toString()}  you dont have permisson too ban`);
	   }

	 
	 

    

	} catch (err) {
		catchERR(err, receivedMessage);
	}
}
*/

async function bjCommand(arguments, receivedMessage) {
	try {
		const user = receivedMessage.mentions.users.first();

		if (!user) {
			receivedMessage.channel.send('You did not say who u want to Blow!');
		}

		if (!receivedMessage.channel.nsfw) {
			receivedMessage.channel.send('This Channel is not NSFW');
		}
		if (user) {
			if (receivedMessage.channel.nsfw) {
				fetch('https://nekos.life/api/v2/img/bj')
					.then(res => res.json())
					.then(json => {
						let nekoembed = new Discord.MessageEmbed()
							.setColor([255, 153, 255])
							.setTitle('Lewd~!')
							.setDescription(
								receivedMessage.author.toString() +
								' gives ' +
								user.toString() +
								' a blowjob'
							)
							.setImage(json.url);

						receivedMessage.channel.send(nekoembed);
					});
			}
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function hugCommand(arguments, receivedMessage) {
	try {
		const user = receivedMessage.mentions.users.first();

		if (!user) {
			receivedMessage.channel.send('You did not say who u want to hug!');
		}

		if (user) {
			fetch('https://nekos.life/api/v2/img/hug')
				.then(res => res.json())
				.then(json => {
					let nekoembed = new Discord.MessageEmbed()
						.setColor([255, 153, 255])
						.setTitle('HUG!')
						.setDescription(
							receivedMessage.author.toString() + ' hugs ' + user.toString()
						)
						.setImage(json.url);

					receivedMessage.channel.send(nekoembed);
				});
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function cumCommand(arguments, receivedMessage) {
	try {




		fetch('https://nekos.life/api/v2/img/cum')
			.then(res => res.json())
			.then(json => {
				let nekoembed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle('Gaaaah~!')
					.setDescription(
						receivedMessage.author.toString() + ' is cuming '
					)
					.setImage(json.url);

				receivedMessage.channel.send(nekoembed);
			});

	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function kissCommand(arguments, receivedMessage) {
	try {
		const user = receivedMessage.mentions.users.first();

		if (!user) {
			receivedMessage.channel.send('You did not say who u want to kiss!');
		}

		if (user) {
			fetch('https://nekos.life/api/v2/img/kiss')
				.then(res => res.json())
				.then(json => {
					let nekoembed = new Discord.MessageEmbed()
						.setColor([255, 153, 255])
						.setTitle('mwha :kissing_heart:')
						.setDescription(
							receivedMessage.author.toString() + ' kisses ' + user.toString()
						)
						.setImage(json.url);

					receivedMessage.channel.send(nekoembed);
				});
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function cuddleCommand(arguments, receivedMessage) {
	try {
		const user = receivedMessage.mentions.users.first();

		if (!user) {
			receivedMessage.channel.send('You did not say who u want to cuddle!');
		}

		if (user) {
			fetch('https://nekos.life/api/v2/img/cuddle')
				.then(res => res.json())
				.then(json => {
					let nekoembed = new Discord.MessageEmbed()
						.setColor([255, 153, 255])
						.setTitle('Snuggles~!')
						.setDescription(
							receivedMessage.author.toString() + ' cuddles ' + user.toString()
						)
						.setImage(json.url);

					receivedMessage.channel.send(nekoembed);
				});
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function hentaiCommand(arguments, receivedMessage) {
	try {
		if (!receivedMessage.channel.nsfw) {
			receivedMessage.channel.send('This Channel is not NSFW');
		}

		if (receivedMessage.channel.nsfw) {
			fetch('https://nekos.life/api/v2/img/Random_hentai_gif')
				.then(res => res.json())
				.then(json => {
					let nekoembed = new Discord.MessageEmbed()
						.setColor([255, 153, 255])
						.setTitle('Here ya go~!')

						.setImage(json.url);

					receivedMessage.channel.send(nekoembed);
				});
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function pussyCommand(arguments, receivedMessage) {
	try {
		if (!receivedMessage.channel.nsfw) {
			receivedMessage.channel.send('This Channel is not NSFW');
		}

		if (receivedMessage.channel.nsfw) {
			fetch('https://nekos.life/api/v2/img/pussy')
				.then(res => res.json())
				.then(json => {
					let nekoembed = new Discord.MessageEmbed()
						.setColor([255, 153, 255])
						.setTitle('Here ya go~!')

						.setImage(json.url);

					receivedMessage.channel.send(nekoembed);
				});
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function yuriCommand(arguments, receivedMessage) {
	try {
		if (!receivedMessage.channel.nsfw) {
			receivedMessage.channel.send('This Channel is not NSFW');
		}

		if (receivedMessage.channel.nsfw) {
			fetch('https://nekos.life/api/v2/img/yuri')
				.then(res => res.json())
				.then(json => {
					let nekoembed = new Discord.MessageEmbed()
						.setColor([255, 153, 255])
						.setTitle('Here ya go~!')

						.setImage(json.url);

					receivedMessage.channel.send(nekoembed);
				});
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function boobCommand(arguments, receivedMessage) {
	try {
		if (!receivedMessage.channel.nsfw) {
			receivedMessage.channel.send('This Channel is not NSFW');
		}

		if (receivedMessage.channel.nsfw) {
			fetch('https://nekos.life/api/v2/img/boobs')
				.then(res => res.json())
				.then(json => {
					let nekoembed = new Discord.MessageEmbed()
						.setColor([255, 153, 255])
						.setTitle('Here ya go~!')

						.setImage(json.url);

					receivedMessage.channel.send(nekoembed);
				});
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function trapCommand(arguments, receivedMessage) {
	try {
		if (!receivedMessage.channel.nsfw) {
			receivedMessage.channel.send('This Channel is not NSFW');
		}

		if (receivedMessage.channel.nsfw) {
			fetch('https://nekos.life/api/v2/img/trap')
				.then(res => res.json())
				.then(json => {
					let nekoembed = new Discord.MessageEmbed()
						.setColor([255, 153, 255])
						.setTitle('Here ya go~!')

						.setImage(json.url);

					receivedMessage.channel.send(nekoembed);
				});
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function feetCommand(arguments, receivedMessage) {
	try {
		if (!receivedMessage.channel.nsfw) {
			receivedMessage.channel.send('This Channel is not NSFW');
		}

		if (receivedMessage.channel.nsfw) {
			fetch('https://nekos.life/api/v2/img/feet')
				.then(res => res.json())
				.then(json => {
					let nekoembed = new Discord.MessageEmbed()
						.setColor([255, 153, 255])
						.setTitle('Here ya go~!')

						.setImage(json.url);

					receivedMessage.channel.send(nekoembed);
				});
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}


async function soloCommand(arguments, receivedMessage) {
	try {
		if (!receivedMessage.channel.nsfw) {
			receivedMessage.channel.send('This Channel is not NSFW');
		}

		if (receivedMessage.channel.nsfw) {
			fetch('https://nekos.life/api/v2/img/solo')
				.then(res => res.json())
				.then(json => {
					let nekoembed = new Discord.MessageEmbed()
						.setColor([255, 153, 255])
						.setTitle('Here ya go~!')

						.setImage(json.url);

					receivedMessage.channel.send(nekoembed);
				});
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function analCommand(arguments, receivedMessage) {
	try {
		if (!receivedMessage.channel.nsfw) {
			receivedMessage.channel.send('This Channel is not NSFW');
		}

		if (receivedMessage.channel.nsfw) {
			fetch('https://nekos.life/api/v2/img/anal')
				.then(res => res.json())
				.then(json => {
					let nekoembed = new Discord.MessageEmbed()
						.setColor([255, 153, 255])
						.setTitle('Here ya go~!')

						.setImage(json.url);

					receivedMessage.channel.send(nekoembed);
				});
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function yaoiCommand(arguments, receivedMessage) {
	try {

		const rando = imgs.yaoiimg[Math.floor(Math.random() * imgs.yaoiimg.length)];

		if (!receivedMessage.channel.nsfw) {
			receivedMessage.channel.send('This Channel is not NSFW');
		}

		if (rando == 0) {
			rando == 1
			if (receivedMessage.channel.nsfw) {



				let nekoembed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle('Here ya go~!')

					.setImage(rando);

				receivedMessage.channel.send(nekoembed);

			}

		}

		if (receivedMessage.channel.nsfw) {



			let nekoembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle('Here ya go~!')

				.setImage(rando);

			receivedMessage.channel.send(nekoembed);

		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function threesomCommand(arguments, receivedMessage) {
	try {
		if (!receivedMessage.channel.nsfw) {
			receivedMessage.channel.send('This Channel is not NSFW');
		}
		const rando = Math.floor(Math.random() * 9 + 1);
		if (rando == 10) {
			rando == 9
			if (receivedMessage.channel.nsfw) {

				let nekoembed = new Discord.MessageEmbed()
					.setColor([255, 153, 255])
					.setTitle('Here ya go~!')

					.setImage("https://purrbot.site/img/nsfw/threesome_ffm/gif/threesome_00" + rando + ".gif");

				receivedMessage.channel.send(nekoembed);

			}
		}
		if (receivedMessage.channel.nsfw) {

			let nekoembed = new Discord.MessageEmbed()
				.setColor([255, 153, 255])
				.setTitle('Here ya go~!')

				.setImage("https://purrbot.site/img/nsfw/threesome_ffm/gif/threesome_00" + rando + ".gif");

			receivedMessage.channel.send(nekoembed);

		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function femdomCommand(arguments, receivedMessage) {
	try {
		if (!receivedMessage.channel.nsfw) {
			receivedMessage.channel.send('This Channel is not NSFW');
		}

		if (receivedMessage.channel.nsfw) {
			fetch('https://nekos.life/api/v2/img/femdom')
				.then(res => res.json())
				.then(json => {
					let nekoembed = new Discord.MessageEmbed()
						.setColor([255, 153, 255])
						.setTitle('Here ya go~!')

						.setImage(json.url);

					receivedMessage.channel.send(nekoembed);
				});
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

async function roleCommand(arguments, receivedMessage) {
	try {
		let color1embed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle('Gender Roles!')
			.setDescription(
				`╭ ┈‧₊˚ʚ꒷𓏲
			:male_sign:<@&741639599771877406>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :female_sign:<@&741639640934645850>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :transgender_symbol:<@&741640421867913297>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :yellow_heart:<@&741640359318126594>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :green_heart:<@&747642175457722479>  ⌣₊˚
            ╰ ┈ ꒱ ⊹ ˚`
			)
			.setImage(
				'https://i.giphy.com/media/bhJqCi6LVaDPG/200.gif'
			);
		let color2embed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle('**Age roles!**')
			.setDescription(
				`╭ ┈‧₊˚ʚ꒷𓏲
            :baby:<@&741641165010370731>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :blond_haired_man:<@&741641291447795793>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :man:<@&741641358615511062>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :bearded_person:<@&741641390517387304>  ⌣₊˚
            ╰ ┈ ꒱ ⊹ ˚`
			)
			.setImage(
				'https://www.scarymommy.com/wp-content/uploads/2020/12/growing-up-quotes.gif'
			);

		let color3embed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle('**Sexuality roles!**')
			.setDescription(
				`╭ ┈‧₊˚ʚ꒷𓏲
            :family_mmgg:<@&747890740901838968>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :two_women_holding_hands:<@&741643022227341392>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :two_men_holding_hands:<@&741642865528143974>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :family_man_woman_boy:<@&741642801208623194> ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :couple:<@&741642750931501057>  ⌣₊˚
            ╰ ┈ ꒱ ⊹ ˚`
			)
			.setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FxUPGczGYqDruEl9K5a%2Fgiphy.gif');


		let color4embed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle('**Relationship roles!**')
			.setDescription(
				`╭ ┈‧₊˚ʚ꒷𓏲
            :palms_up_together:<@&741647886084866098>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :eyes:<@&741647856934453298>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :hand_splayed:<@&741643890158862436>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :busts_in_silhouette:<@&741643863810244628> ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
			:bust_in_silhouette:<@&741643821384728627>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:open_hands:<@&797469665453408296>  ⌣₊˚
            ╰ ┈ ꒱ ⊹ ˚`
			)
			.setImage('https://cdn.lowgif.com/full/141a0963338f83e8-music-animation-happy-gif-on-gifer-by-steeldragon.gif');

		let color5embed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle('**DM roles!**')
			.setDescription(
				`╭ ┈‧₊˚ʚ꒷𓏲
            :heartbeat:<@&741673458953355265>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :projector:<@&741673397653602425>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :closed_lock_with_key:<@&741673344319094854>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :key:<@&741673177150914616> ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
			:unlock:<@&741673265625432085>  ⌣₊˚
            ╰ ┈ ꒱ ⊹ ˚`
			)
			.setImage('https://cdn.dribbble.com/users/3377233/screenshots/6958190/busy_texting.gif');

		let color6embed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle('**Kink roles!**')
			.setDescription(
				`╭ ┈‧₊˚ʚ꒷𓏲
            :laughing:<@&741652426653827123>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :teddy_bear:<@&741651848242397268> ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :hot_face:<@&741650732620447844>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :lips:<@&741650675309608971> ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
			:weary:<@&741649970704285787>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:drooling_face:<@&741649727019286528>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:cold_face:<@&741649775086010429>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:knife:<@&741645804074303601>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:scissors:<@&741644774028738591>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:middle_finger:<@&741645916838297682>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:yum:<@&741644735889932379>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:chains:<@&741643980189597727>  ⌣₊˚
            ╰ ┈ ꒱ ⊹ ˚`
			)
			.setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnio.luscious.net%2F844%2Flusciousnet_94cd1af2bfe5cf474dfe07b_945662184.gif');

		let color7embed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle('**Extra roles!**')
			.setDescription(
				`╭ ┈‧₊˚ʚ꒷𓏲
            :ice_cream:<@&741652774973866015>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :guide_dog:<@&741651625852010651>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :repeat:<@&741651586786525255>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :triumph:<@&741651387984642099> ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
			:blush:<@&741651352924454944>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:lipstick:<@&741646655694307419>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:high_heel:<@&754940039938703400>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:boot:<@&741646685268344832>   ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:thinking:<@&754940865406959646>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:drooling_face:<@&741646450940969040>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:smirk:<@&741646538261921873>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:baby_bottle:<@&801414257316724776>  ⌣₊˚
            ╰ ┈ ꒱ ⊹ ˚`
			)
			.setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sankakucomplex.com%2Fwp-content%2Fuploads%2F2017%2F07%2FNekopara-Celebratory-Omake-2.gif');

		let color8embed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle('**Porn roles!**')
			.setDescription(
				`╭ ┈‧₊˚ʚ꒷𓏲
			:no_entry_sign:<@&744470952523464804>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :PussySpin:<@&744470864409395211>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :heart_eyes:<@&744470864409395211>  ⌣₊˚
            ╰ ┈ ꒱ ⊹ ˚`
			)
			.setImage('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnamethatpornstar.com%2Fimagecache%2FNTPS4b9jbdclesd0.gif');

		let color9embed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle('**Nude roles!**')
			.setDescription(
				`╭ ┈‧₊˚ʚ꒷𓏲
			:white_check_mark:<@&770721248199311380>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
            :negative_squared_cross_mark:<@&770721264012361798>  ⌣₊˚
            ╰ ┈ ꒱ ⊹ ˚`
			)
			.setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg2.gelbooru.com%2Fimages%2Ff9%2F75%2Ff9752a6595e2ff6fe1ddf9023c811a57.gif');

		let color10embed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle('**Location roles!**')
			.setDescription(
				`╭ ┈‧₊˚ʚ꒷𓏲
			:white_check_mark:<@&770721248199311380>  ⌣₊˚
            ‿︵‿︵‿︵‿︵‿︵‿੭
			:negative_squared_cross_mark:<@&770721264012361798>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:negative_squared_cross_mark:<@&770721264012361798>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:negative_squared_cross_mark:<@&770721264012361798>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:negative_squared_cross_mark:<@&770721264012361798>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:negative_squared_cross_mark:<@&770721264012361798>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:negative_squared_cross_mark:<@&770721264012361798>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:negative_squared_cross_mark:<@&770721264012361798>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:negative_squared_cross_mark:<@&770721264012361798>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
            :negative_squared_cross_mark:<@&770721264012361798>  ⌣₊˚
            ╰ ┈ ꒱ ⊹ ˚`
			)
			.setImage('https://steamuserimages-a.akamaihd.net/ugc/386540406527787313/6CCFC423A36042B62997187D58A0A0255BFB6A75')
		// I am aware that colors will now not send there is no use for it as of rn thus no reason to focus on it

		//receivedMessage.channel.send('https://i.imgur.com/D0kSTNY.png');
		receivedMessage.channel.send(color7embed);
		//receivedMessage.channel.send(color2embed);
		//receivedMessage.channel.send(color3embed);
		//receivedMessage.channel.send('**Scroll Up for more!**');

	} catch (err) {
		catchERR(err, receivedMessage);
	}
}

//please dont touch the go command this was made for the color roles~!
/*async function goCommand(arguments, receivedMessage) {
	try {
		let color1embed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle('**Color roles!**')
			.setDescription(
				`╭ ┈‧₊˚ʚ꒷𓏲
			:strawberry:<@&747422943616827453>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:tangerine:<@&747423513203179590>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:lemon:<@&747423614868914282>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:green_apple:<@&747424110824390749>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:melon:<@&747425060209426593>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:ring:<@&747425672581873675>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿ ੭
			:black_cat:<@&747427005880074291>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:sparkles:<@&754455238542491801>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:cherries:<@&754456889906954362>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:peach:<@&754457164952764487>  ⌣₊˚
			╰ ┈ ꒱ ⊹ ˚`
			)
			.setImage(
				'https://blog.youonlywetter.co.uk/wp-content/uploads/2015/12/cEaVSfm.gif'
			);
		let color2embed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle('**Color roles!**')
			.setDescription(
				`╭ ┈‧₊˚ʚ꒷𓏲
			:kiwi:<@&754457406074912901>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:handbag:<@&754457613059620901>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:octopus:<@&754458007047503954>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:candy:<@&754458155643043870>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:ocean:<@&754517505686634576>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:whale2:<@&754517618144313405>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:butterfly:<@&754517720459903108>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:chocolate_bar:<@&754518114527608884>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:gear:<@&754518425208094751>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:yarn:<@&754518746852360296>  ⌣₊˚
			╰ ┈ ꒱ ⊹ ˚`
			)
			.setImage(
				'https://img.culturacolectiva.com/content/2015/08/gif-phazed.gif'
			);

		let color3embed = new Discord.MessageEmbed()
			.setColor([255, 153, 255])
			.setTitle('**Color roles!**')
			.setDescription(
				`╭ ┈‧₊˚ʚ꒷𓏲
			‿︵‿︵‿︵‿︵‿︵‿੭
			:white_heart:<@&754519137119764583>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:evergreen_tree:<@&754519367483523203>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:dress:<@&754520027868168213>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:wilted_rose:<@&754520183359668425>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:hibiscus:<@&754520521215049819>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:cherry_blossom:<@&754520741935841350>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:cake:<@&754520878729003119>  ⌣₊˚
			‿︵‿︵‿︵‿︵‿︵‿੭
			:heart:<@&754521376408207370>  ⌣₊˚
			╰ ┈ ꒱ ⊹ ˚`
			)
			.setImage('https://i.imgur.com/EoKdMFX.gif');

		// I am aware that colors will now not send there is no use for it as of rn thus no reason to focus on it
		if (receivedMessage.member.hasPermisson('MANAGE_MESSAGES')) {
			receivedMessage.channel.send('https://i.imgur.com/D0kSTNY.png');
			receivedMessage.channel.send(color1embed);
			receivedMessage.channel.send(color2embed);
			receivedMessage.channel.send(color3embed);
			receivedMessage.channel.send('**Scroll Up for more!**');
		}
	} catch (err) {
		catchERR(err, receivedMessage);
	}
}*/
//please do not touch the token
// ^^ its grabbing the token form the .env file
client.login(process.env.DISCORD_TOKEN);
