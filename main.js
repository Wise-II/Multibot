
const { ShardingManager } = require('discord.js');
const Discord = require('discord.js');
const chalk = require('chalk');
const client = new Discord.Client();
// insert your bot token here 
const manager = new ShardingManager('./index.js', {
    totalShards: 5,
    token: "NzM3NDM2NDQ4MTM0NzkxMjgy.Xx9VNg.sGprnRSFUeq5LZtfoDOpEXx2Wpw"
});
manager.spawn();

manager.on('shardCreate', (shard) => console.log(chalk.redBright(`Shard ${shard.id} created`)))


 
// Need at least 1 data point for every 5 minutes.
// Submit random data for the whole day.
var totalPoints = 60 / 5 * 24;
var epochInSeconds = Math.floor(new Date() / 1000);
 
// This function gets called every second.
function submit(count) {
  count = count + 1;
 
  if(count > totalPoints) return;
 
  var currentTimestamp = epochInSeconds - (count - 1) * 5 * 60;
  var randomValue = Math.floor(Math.random() * 1000);
 
  var data = {
    timestamp: currentTimestamp,
    value: randomValue,
  };
 
  var request = http.request(url, options, function (res) {
    res.on('data', function () {
      console.log('Submitted point ' + count + ' of ' + totalPoints);
    });
    res.on('end', function() {
      setTimeout(function() { submit(count); }, 1000);
    });
  });
 
  request.end(JSON.stringify({ data: data }));
}
 
// Initial call to start submitting data.
submit(0);
  

