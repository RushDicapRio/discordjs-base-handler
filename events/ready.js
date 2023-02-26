const { ActivityType } = require("discord.js");
const client = require("../index");

client.on("ready", () => {
  console.log(`le robot est prêt à fonctionner !!`);
  client.user.setActivity({
    name: `https://https://github.com/RushDicapRio ❤️‍🔥`,
    type: ActivityType.Watching,
  });
});