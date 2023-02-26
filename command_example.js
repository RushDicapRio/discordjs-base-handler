// commandes de slash d'entrée de chat
const {
  CommandInteraction,
  ApplicationCommandType,
  PermissionFlagsBits,
  Client,
} = require("discord.js");

module.exports = {
  name: "",
  description: ``,
  userPermissions: PermissionFlagsBits.SendMessages,
  botPermissions: PermissionFlagsBits.SendMessages,
  category: "",
  type: ApplicationCommandType.ChatInput,
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  run: async (client, interaction) => {
    // Code
  },
};

// commandes de slash d'entrée de message
const {
  ContextMenuCommandInteraction,
  ApplicationCommandType,
  Client,
} = require("discord.js");

module.exports = {
  name: "",
  category: "",
  type: ApplicationCommandType.Message,
  /**
   *
   * @param {Client} client
   * @param {ContextMenuCommandInteraction} interaction
   */
  run: async (client, interaction) => {
    // Code
  },
};

// commandes utilisateur slash

const {
  ContextMenuCommandInteraction,
  ApplicationCommandType,
  Client,
} = require("discord.js");

module.exports = {
  name: "",
  category: "",
  type: ApplicationCommandType.User,
  /**
   *
   * @param {Client} client
   * @param {ContextMenuCommandInteraction} interaction
   */
  run: async (client, interaction) => {
    // Code
  },
};

// commandes de messages
const { Message, PermissionFlagsBits, Client } = require("discord.js");

module.exports = {
  name: "",
  description: ``,
  userPermissions: PermissionFlagsBits.SendMessages,
  botPermissions: PermissionFlagsBits.SendMessages,
  category: "",
  cooldown: 10,
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   */
  run: async (client, message, args, prefix) => {
    // Code
  },
};