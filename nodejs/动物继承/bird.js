/**
 * Created by admin on 2017/2/8.
 */
var util = require('util');
var Animal = require('./animal.js');
function Bird(){
    Animal.call(this);
 // util.inherits(this,Animal);
    this.say = function(){
        console.log('ji...ji...');
    };
}
util.inherits(Bird,Animal);
module.exports = Bird;
