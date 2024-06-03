const me = require('./information');

const cowsay = require("cowsay");
console.log(cowsay.say({
    text : `Hello je s'appelle ${me.name} et mon campus s'appelle ${me.campus.toUpperCase()}, parce que c'est NOTRE CAMPUS.`,
    e : "OO"
}));