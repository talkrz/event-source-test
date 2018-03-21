const fetch = require('node-fetch');

const args = process.argv.slice(2);

if (args.length < 1) {
  console.log('Usage: \n  node send.js url \n\nParams:\n  ' +
    'url - URL of the event source\n');
  process.exit();
}

const url = args[0];

const data = {
  "some": "data",
  "foo": Math.random()
};

fetch(url, {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "accept": "application/json"
  },
  body: JSON.stringify({
    "event": "message",
    "data": JSON.stringify(data)
  })
}).then(response => {
  return response.text();
});


