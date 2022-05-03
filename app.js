const Redis = require("ioredis");

const client = new Redis();

client.on("connect", function () {
  console.log("Connected!");
});

client.hdel("frameworks_hash", "node");

/* client.set("framework", "ReactJS");

client.set("framework", "ReactJS", function (err, reply) {
  console.log(reply); 
});

client.get("framework", function (err, reply) {
  console.log(reply); 
}); */

/* client.hmset(
  "frameworks_hash",
  "javascript",
  "ReactJS",
  "css",
  "TailwindCSS",
  "node",
  "Express"
);

client.hgetall("frameworks_hash", function (err, object) {
  console.log(object); // { javascript: 'ReactJS', css: 'TailwindCSS', node: 'Express' }
}); */

/* client.rpush(["frameworks_list", "ReactJS", "Angular"], function (err, reply) {
  console.log(reply); // 2
}); */

/* client.lrange("frameworks_list", 0, 2, function (err, reply) {
  console.log(reply); // [ 'ReactJS', 'Angular' ]
}); */

/* client.sadd(
  ["frameworks_set", "ReactJS", "Angular", "Svelte", "VueJS", "VueJS"],
  function (err, reply) {
    console.log(reply); // 4
  }
); */

/* client.smembers("frameworks_set", function (err, reply) {
  console.log(reply); // [ 'Angular', 'ReactJS', 'VueJS', 'Svelte' ]
}); */

/* client.exists("framework", function (err, reply) {
  if (reply === 1) {
    console.log("Exists!");
  } else {
    console.log("Doesn't exist!");
  }
}); */

/* client.del("frameworks_list", function (err, reply) {
  console.log(reply); // 1
}); */

/* client.set("status", "logged_in");
client.expire("status", 300); */

/* var fooRedis = new Redis({ keyPrefix: "foo:" });
fooRedis.set("bar", "baz");

fooRedis.set("framework", "ReactJS", function (err, reply) {
  console.log(reply);
});

client.del("framework"); */
