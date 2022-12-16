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

## Options

| name       | type                                                                    | description                           |
| ---------- | ----------------------------------------------------------------------- | ------------------------------------- |
| lang       | "ko" \| "en"                                                            | Display languege                      |
| display    | "YEAR" \| "MONTH" \| "WEEK" \| "DAY" \| "HOUR" \| "MINUTE" \| "SECONDS" | Display result for selected time set  |
| short      | optional\<boolean>                                                      | Apply to 'en' languege (ex) year => y |
| onlyDate   | optional\<boolean>                                                      | Return only number value of Date      |
| includeAgo | optional\<boolean>                                                      | Optional auto include "a go" word     |

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
