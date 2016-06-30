/////////Log the lyrics of 99 bottles of beer on the wall to console using loops//////////
var list = [];
var i = 1;
var highEnd = 99;
var songBegin = ' bottles of beer on the wall, ';
var songMid = ' bottles of beer. Take one down, pass it around, ';
var songEnd = ' bottles of beer on the wall. ';
var lastLine = ' 1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, no more bottles of beer on the wall! ';
var secondTolastLine = ' 2 bottles of beer on the wall, 2 bottles of beer. Take one down, pass it around, 1 bottle of beer on the wall. ';

while (i <= highEnd) {
	list.push(i + songBegin + i + songMid + (i - 1) + songEnd);
	i++;
} list.reverse();
list [97] = secondTolastLine;
list [98] = lastLine;
console.log(list);
















