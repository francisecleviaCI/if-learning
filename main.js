/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

function isItLong(string){
  return string.length > 20;
}

let result = isItLong('kqwesdfsdfdsfdsfu');
result;

if (result){
    console.log('That\'s a long string');
}
//
function isItMedium(str){
  return str.length >= 10 && str.length <= 20;
}
let result1 = isItMedium('FragggggggggggggggggncisEclevia');
result1;

if (result1){
    console.log('That\'s is a regular sized string!');
}
//*HELP*
function isItShort(str){
  return str.length < 10;
}
let result2 = isItShort('Frdfsdf');
result2;

if (result2){
    console.log('That\'s a small string');
} else {
    console.log('That\'s not a small string');
}
//
function howLongIsMyString(str){
  return str.length
}
let result3 = howLongIsMyString('RandomWord123xfghhh');
result3;

if (result3 > 20){
  console.log('That\'s a long string!');
} else if (result3 >= 10 && result3 <= 20){
  console.log('That\'s a regular sized string!');
} else if (result3 < 10){
  console.log('That\'s a small string!')
}

function instructorHeight(str){
  return str
}
let result4 = instructorHeight('Francis');
result4;

if (result4 = 'Colin'){
  console.log('62');
} else if(result4 = 'Mesuara'){
  console.log('67');
} else if (result4 !== 'Colin' && result4 !== 'Mesuara'){
  console.log('I don\'t know that instructor!');
}


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}