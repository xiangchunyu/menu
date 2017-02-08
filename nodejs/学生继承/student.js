/**
 * Created by admin on 2017/2/8.
 */
var util = require('util');
var Person = require('./person.js');

function Student(){
    Person.call(this);
    this.name = 'liuliu';
}
util.inherits(Student,Person);
Student.prototype.study = function(){
  console.log(this.name + ' is studying');
};
module.exports = Student;