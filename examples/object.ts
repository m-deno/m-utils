import { objectHelper } from "../mod.ts";

console.log('$---', objectHelper.isEmpty('')); // true

console.log('$---', objectHelper.hasProperty({a: 1}, 'a')) // true

console.log('$---', objectHelper.objectEmpty('')); // true

// to boolean
console.log(objectHelper.toBoolean(null)) // false
console.log(objectHelper.toBoolean(undefined)) // false
console.log(objectHelper.toBoolean('True')) // true
console.log(objectHelper.toBoolean('tRUE')) // true
console.log(objectHelper.toBoolean('False')) // false
console.log(objectHelper.toBoolean('FALSE')) // false