const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["791446335063719986"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR")))
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Bu komutu sadece yetkililer kullanabilir`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "781299650514255902"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
  '0': `<a:rkm_0:781467995238301706>`,
  '1': `<a:exp_1:781468002615820300>`,
  '2': `<a:rkm_2:790294265518358578>`,
  '3': `<a:rkm_3:781468014549794846>`,
  '4': `<a:rkm_4:781468014780350464>`,
  '5': `<a:rkm_5:781468014561198170>`,
  '6': `<a:rkm_6:781468016784834570>`,
  '7': `<a:rkm_7:781468014641152022>`,
  '8': `<a:rkm_8:781468016663330836> `,
  '9': `<a:rkm_9:790294668586909777>`}[d];})}


var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:rkm_0:781467995238301706>`,
  '1': `<a:exp_1:781468002615820300>`,
  '2': `<a:rkm_2:790294265518358578>`,
  '3': `<a:rkm_3:781468014549794846>`,
  '4': `<a:rkm_4:781468014780350464>`,
  '5': `<a:rkm_5:781468014561198170>`,
  '6': `<a:rkm_6:781468016784834570>`,
  '7': `<a:rkm_7:781468014641152022>`,
  '8': `<a:rkm_8:781468016663330836> `,
  '9': `<a:rkm_9:790294668586909777>`}[d];})}

var taglılar = 0;
let tag = "TAG";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:rkm_0:781467995238301706>`,
  '1': `<a:exp_1:781468002615820300>`,
  '2': `<a:rkm_2:790294265518358578>`,
  '3': `<a:rkm_3:781468014549794846>`,
  '4': `<a:rkm_4:781468014780350464>`,
  '5': `<a:rkm_5:781468014561198170>`,
  '6': `<a:rkm_6:781468016784834570>`,
  '7': `<a:rkm_7:781468014641152022>`,
  '8': `<a:rkm_8:781468016663330836> `,
  '9': `<a:rkm_9:790294668586909777>`}[d];})}



var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:rkm_0:781467995238301706>`,
  '1': `<a:exp_1:781468002615820300>`,
  '2': `<a:rkm_2:790294265518358578>`,
  '3': `<a:rkm_3:781468014549794846>`,
  '4': `<a:rkm_4:781468014780350464>`,
  '5': `<a:rkm_5:781468014561198170>`,
  '6': `<a:rkm_6:781468016784834570>`,
  '7': `<a:rkm_7:781468014641152022>`,
  '8': `<a:rkm_8:781468016663330836> `,
  '9': `<a:rkm_9:790294668586909777>`}[d];})}




var booster = message.guild.roles.cache.get("BOOSTER ROL ID").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:rkm_0:781467995238301706>`,
  '1': `<a:exp_1:781468002615820300>`,
  '2': `<a:rkm_2:790294265518358578>`,
  '3': `<a:rkm_3:781468014549794846>`,
  '4': `<a:rkm_4:781468014780350464>`,
  '5': `<a:rkm_5:781468014561198170>`,
  '6': `<a:rkm_6:781468016784834570>`,
  '7': `<a:rkm_7:781468014641152022>`,
  '8': `<a:rkm_8:781468016663330836> `,
  '9': `<a:rkm_9:790294668586909777>`}[d];})}


const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
**Sunucuda Toplam** ${üyesayısı} **Üye bulunmakta.**
**Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi.**
**Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.**
**Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**
**Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**`)

msg.channel.send(embed1);

  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}
