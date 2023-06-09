import { isEmpty, hasProperty, objectEmpty } from "../mod.ts";

console.log('$---', isEmpty('')); // true

console.log('$---', hasProperty({a: 1}, 'a')) // true

console.log('$---', objectEmpty('')); // true