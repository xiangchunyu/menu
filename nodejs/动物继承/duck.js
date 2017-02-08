/**
 * Created by admin on 2017/2/8.
 */
var util = require('util');
var Animal = require('./animal.js');
function Duck(){
    Animal.call(this);
    //util.inherits(this,Animal);
    this.say = function(){
        console.log('ga...ga...');
    };
}
util.inherits(Duck,Animal);
var duck = new Duck();
exports.say = duck.say;
