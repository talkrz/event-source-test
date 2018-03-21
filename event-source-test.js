const EventSource = require('eventsource');

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Usage: \n  node event-source-test.js url concurrency [timeout]\n\nParams:\n  ' +
    'url - URL of the event source\n  ' +
    'concurrency - amount of concurrent connections\n  ' +
    'interval - optional interval between opening new connection in ms(default 0)');
  process.exit();
}

const url = args[0];
const concurrency = args[1];
const interval = args[2] ? args[2] : 0;

function makeEventSource(i) {
  const source = new EventSource(url);

  source.onmessage = function (e) {
    console.log('Event from ' + i + ' ' + e.data);
  };

  source.onerror = function (e) {
    console.log('Error ', e)
  }
}

for(let i=0; i < concurrency; ++i) {
  setTimeout(() => {
    console.log('Created event source, id: ', i)
    makeEventSource(i);
  }, (i * interval));
}
