const mongoose = require("mongoose");
let hm = new mongoose.Schema({
ownerID: String,
ownerName: String,
botID: String,
botid:String,
username: String,
discrim: String,
date: String,
avatar: String,
prefix: String,
longDesc: String,
shortDesc: String,
tags: Array,
today: String,
webhook: String,
dcwebhook: String,
coowners: Array,
status: String,
users: String,
website: String,
github: String, 
support: String,
backURL: String,
nsfw: String,
premium: String,
Date: {type: Date, default: null},
certificate: String,
votes: {type: Number, default: 0},
token: String,
serverCount: String
});

module.exports = mongoose.model("bots", hm);
