const {
  Message,
  PermissionFlagsBits,
  Client,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Obtenir l'avatar d'un utilisateur !!",
  userPermissions: PermissionFlagsBits.SendMessages,
  botPermissions: PermissionFlagsBits.SendMessages,
  category: "Misc",
  cooldown: 5,
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   */
  run: async (client, message, args, prefix) => {
    // Code
    let AvatarUrl = message.author.displayAvatarURL({
      extension: "png",
      size: 512,
    });
    message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Blurple")
          .setAuthor({
            name: `Avatar de ${message.author.tag}`,
            iconURL: AvatarUrl,
          })
          .setImage(AvatarUrl)
          .setTimestamp(),
      ],
    });
  },
};