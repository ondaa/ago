# Ago

This is a library that allows you to easily see how much time has passed based on the current date.  
<br/>

## Recommended use of node version

node v14.6.x higher ( for used jest test )  
<br/>

## Install

```shell
$ npm install @jlln/ago
```

<br/>

## How to Use

```javascript
/* Test in 20221202 */
import { getAgo } from "@jlln/ago";

const ago = getAgo("1982-10-20 12:32:00");
console.log(ago); // 40 year
```

<br/>

You can see more examples in my github repository. :)  
Here [example](https://github.com/ondaa/ago/tree/master/example) link

<br/>

## Test

```shell
$ npm run test
```

<br/>

## Author

Park Sung Jin (demnodey)  
<br/>

## Use Library

- dayjs
