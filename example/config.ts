import { getAgo, setGlobalLang } from "../src";

// Setting global config for language
setGlobalLang("en");

// echo
const ago = getAgo("2022-01-02 12:00:00");
console.log(ago);
