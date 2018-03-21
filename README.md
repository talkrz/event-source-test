# Install

```
npm install
```

# Usage

## Open multiple connections

```
node event-source-test.js url concurrency [interval]
```

*url* - URL of the event source  
*concurrency* - amount of concurrent connections  
*timeout* - optional interval between opening new connection in ms (default 0)


## Send test data
```
node send.js url
```