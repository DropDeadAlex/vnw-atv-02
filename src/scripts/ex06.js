const verefiqVar = boolean => boolean ? true : false

globalThis.ver = verefiqVar

console.log(`"": `, verefiqVar(""));
console.log(`"a": `, verefiqVar("a"));
console.log(`"false": `, verefiqVar("false"));
console.log(`0: `, verefiqVar(0));
console.log(`1: `, verefiqVar(1));
console.log(`true: `, verefiqVar(true));
console.log(`false: `, verefiqVar(false));
console.log(`{}: `, verefiqVar({}));
console.log(`[]: `, verefiqVar([]));
console.log(`new Date(): `, verefiqVar(new Date()));
console.log(`Infinity: `, verefiqVar(Infinity));