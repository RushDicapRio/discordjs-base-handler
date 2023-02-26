module.exports = {
  TOKEN: process.env.TOKEN || "token du bot",
  PREFIX: process.env.PREFIX || "préfix du bot",
  Slash: {
    Global: false,
    GuildID: process.env.GuildID || "ID du serveur",
  },
};
