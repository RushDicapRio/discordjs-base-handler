const {
  CommandInteraction,
  ApplicationCommandType,
  PermissionFlagsBits,
  Client,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  name: "avatar",
  description: `Obtenir l'avatar d'un utilisateur !!`,
  userPermissions: PermissionFlagsBits.SendMessages,
  botPermissions: PermissionFlagsBits.SendMessages,
  category: "Misc",
  type: ApplicationCommandType.ChatInput,
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  run: async (client, interaction) => {
    // Code
    let AvatarUrl = interaction.user.displayAvatarURL({
      extension: "png",
      size: 512,
    });
    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Blurple")
          .setAuthor({
            name: `Avatar de ${interaction.user.tag}`,
            iconURL: AvatarUrl,
          })
          .setImage(AvatarUrl)
          .setTimestamp(),
      ],
      ephemeral: true,
    });
  },
};