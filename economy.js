const Client = require('discord.js');
const mongoose = require('mongoose');
const mongo = require('../Misato/mongo.js')
require('../Misato/index.js')
const profileSchema = require('../Misato/profile_schema.js')

const coinsCache = {}

module.exports = (client) => {}

module.exports.add_Dailycoins = async (guildId, userId, coins) =>
{
    return await mongo().then(async (mongoose) =>{
        try{
            console.log(`Running findOneAndUpdate()`)

            const result = await profileSchema.findOneAndUpdate({
                guildId,
                userId
            },{
                guildId,
                userId,
                $inc: {
                    coins
                }
                

            },{
                upsert: true,
                new: true
            })

            coinsCache[`${guildId}-${userId}`] - result.coins

            return result.coins
        }finally{
            mongoose.connection.close()
        }
    }) 
}

module.exports.addcoins = async (guildId, userId, coins) =>
{
    return await mongo().then(async (mongoose) =>{
        try{
            console.log(`Running findOneAndUpdate()`)

            const result = await profileSchema.findOneAndUpdate({
                guildId,
                userId
            },{
                guildId,
                userId,
                $inc: {
                    coins
                }
                

            },{
                upsert: true,
                new: true
            })

            coinsCache[`${guildId}-${userId}`] - result.coins

            return result.coins
        }finally{
            mongoose.connection.close()
        }
    }) 
}


module.exports.subcoins = async (guildId, userId, coins) =>
{
    return await mongo().then(async (mongoose) =>{
        try{
            console.log(`Running findOneAndUpdate()`)

            const result = await profileSchema.findOneAndUpdate({
                guildId,
                userId
            },{
                guildId,
                userId,
                $inc: {
                    coins
                }
                

            },{
                upsert: true,
                new: true
            })

            coinsCache[`${guildId}-${userId}`] - result.coins

            return result.coins
        }finally{
            mongoose.connection.close()
        }
    }) 
}

module.exports.getCoins = async (guildId, userId) => {
    const cachedValue = coinsCache[`${guildId}-${userId}`]
    if (cachedValue)
    {
        return cachedValue
    }
    return await mongo().then( async Mongoose => {
        try {
            console.log(`Running findOne()`)


            const result = await profileSchema.findOne({
                guildId,
                userId,
            })

        console.log(`RESULT:`, result)

        let coins = 0

        if (result) {
            coins = result.coins
        }else {
            console.log("\x1b[33m",'Insterting a new document')
            await new profileSchema({
                guildId,
                userId,
                coins
            }).save()
        }

        coinsCache[`${guildId}-${userId}`] = coins

        return coins
        } finally {
            Mongoose.connection.close()
        }

    })
   

}
