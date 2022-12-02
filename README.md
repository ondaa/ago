# Ago

This is a library that allows you to easily see how much time has passed based on the current date.  
<br/>

## Recommended use of node version

node v14.6.x higher ( because used jest test )  
<br/>

## Install

```shell
$ npm install @jlln/ago

or

$ yarn add @jlln/ago
```

<br/>

## How to Use

Default

```javascript
/* Test in 20221202 */
import { getAgo } from "@jlln/ago";

const ago = getAgo("1982-10-20 12:32:00");
console.log(ago); // 40 년 전
```

Global language setting

```javascript
/* Test in 20221202 */
import { getAgo, setGlobalLang } from "@jlln/ago";

// Setting global config for language
setGlobalLang("en");

const ago = getAgo("2022-01-02 12:00:00");
console.log(ago); // 10 months a go
```

<br/>

## Test

```shell
$ npm run test

or

$ yarn test
```

<br/>

## Author

Park Sung Jin (demnodey)  
<br/>

## Use Library

- dayjs
