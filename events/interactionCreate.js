const { InteractionType } = require("discord.js");
const client = require("../index");

client.on("interactionCreate", async (interaction) => {
  // code
  if (interaction.type == InteractionType.ApplicationCommand) {
    const command = client.scommands.get(interaction.commandName);
    if (!command) {
      return interaction.reply({
        content: `\`${interaction.commandName}\` n'est pas une commande valide !!`,
        ephemeral: true,
      });
    } else {
      if (
        command.userPermissions &&
        !interaction.member.permissions.has(command.userPermissions)
      ) {
        return interaction.reply({
          content: `vous n'avez pas assez d'autorisations !!`,
          ephemeral: true,
        });
      } else if (
        command.botPermissions &&
        !interaction.guild.members.me.permissions.has(command.botPermissions)
      ) {
        return interaction.reply({
          content: `je n'ai pas assez de permissions !!`,
          ephemeral: true,
        });
      } else {
        command.run(client, interaction);
      }
    }
  }
});