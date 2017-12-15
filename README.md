Decodes an instagram style uuid.

See [Sharding & IDs at Instagram](Sharding & IDs at Instagram)

# Usage
```js
const decodeInstauuid = require('decode-instauuid');

const id = '12694591244328775695';

const decoded = decodeInstauuid(id);

console.log(decoded);
// { timestamp: 1513313203374, additional: 12, counter: 15 }

console.log(new Date(decoded.timestamp));
// 2017-12-15T04:46:43.374Z
```
