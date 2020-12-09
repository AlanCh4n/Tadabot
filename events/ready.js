module.exports = (client) => {
  console.log(
    `Bot is online!`
 );

  const activities = [`tadabot.ga`,"t!help",`your commands!`];
  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(activity, { type: "LISTENING" });
  }, 20000);

};
