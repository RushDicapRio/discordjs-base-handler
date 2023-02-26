const { Client } = require("discord.js");
const { readdirSync } = require("fs");

/**
 *
 * @param {Client} client
 */
module.exports = async (client) => {
  try {
    readdirSync("./Commands/Message").forEach((dir) => {
      const commands = readdirSync(`./Commands/Message/${dir}`).filter((f) =>
        f.endsWith(".js")
      );

      for (const cmd of commands) {
        const command = require(`../Commands/Message/${dir}/${cmd}`);
        if (command.name) {
          client.mcommands.set(command.name, command);
        } else {
          console.log(`${cmd} n'est pas prêt`);
        }
      }
    });
    console.log(`> ${client.mcommands.size} Commandes de message chargées !!`);
  } catch (error) {
    console.log(error);
  }
};