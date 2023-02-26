require("dotenv").config();
const {
  Client,
  Partials,
  Collection,
  GatewayIntentBits,
} = require("discord.js");
const { TOKEN } = require("./settings/config");

const client = new Client({
  // intents: 3276799,
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
  ],
  failIfNotExists: false,
  allowedMentions: {
    parse: ["everyone", "roles", "users"],
    users: [],
    roles: [],
    repliedUser: false,
  },
});

// variables globales
client.scommands = new Collection();
client.mcommands = new Collection();
client.cooldowns = new Collection();
client.events = 0;

module.exports = client;

// handlers
["event_handler", "slash_handler", "cmd_handler"].forEach((file) => {
  require(`./handlers/${file}`)(client);
});

// Connexio au bot
client.login(TOKEN);
