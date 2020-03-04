/********************************************************************************************************************
---------------------------------------------UDEMY BASIC JAVASCRIPT CLASS-1---------------------------------------
**********************************************************************************************************************/



/***************************************************************************************************
 *Variable and data types 
*/
var firstName = 'Alamin';
console.log(firstName);

var lastName = 'Islam';
console.log(lastName);

var age = '21';
console.log(age);

var adult = 'true';
console.log(adult);




/***************************************************************************************************
 *Variable mutation and type coarcion 
*/

var firstName = 'Alamin';
var age = 22;
//type coarcion
console.log(firstName + ' old is ' + age);

var job, isMeried;
job = 'Teacher';
isMeried = false;
console.log(firstName + ' is a ' + age + ' years old ' + job + ' he is Maried? ' + isMeried);

//Variable mutation
age = 'Twenty eight';
job = 'Driver';
isMeried = true;
alert(firstName + ' is a ' + age + ' years old ' + job + ' he is Maried? ' + isMeried);
var lastName = prompt('What is your last name');
console.log(firstName + ' ' + lastName);





/***************************************************************************************************
 *Basic operator 
*/
var year,yearJohn,yearMark;
year = 2020;
yearJohn = 28;
yearMark = 25;

//Math operator
yearJohn = year - yearJohn;
yearMark = year - yearMark;
console.log(yearJohn);
console.log(year + 2);
console.log(year - 2);
console.log(year * 2);

//Logical operator
var ourOlders = yearMark > yearJohn;
console.log(ourOlders);

//Type of operator
console.log(typeof ourOlders);
var x;
console.log(typeof x);






/***************************************************************************************************
 *Operator Preciedence 
*/

var now,yearJohn,fullAge;
now = 2018;
yearJohn = 1998;
fullAge = 22;

//Multiple operator
var isFullAge = now - yearJohn <= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 65;
var avarege = (ageJohn+ageMark) / 2;
console.log(avarege);

//Multiple assignment
var x,y;
x = y = (3+6) * 4 - 6;
console.log(x,y);

//More operator
x *= 2;//x = x * 2;
y +=3;//y = y + 3;
console.log(x);
x++;
console.log(x);






/***************************************************************************************************
 *If else estatement 
*/
var firstName = 'Alamin';
var chivilstatus = 'Single';

if(chivilstatus === 'married'){
    console.log( firstName + ' is Married ');
}else{
    console.log( firstName + ' will hopefully marry soon' );
}

var isMeried = false;
if(isMeried){
    console.log( firstName + ' is Married ');
}else{
    console.log( firstName + ' will hopefully marry soon ' );
}





/***************************************************************************************************
 *Boolen logic 
*/
var firstName = 'Alamin';
var age = 22;

if(age < 21){
    console.log( firstName + ' is a boy ' );
}else if(age >= 13 && age < 22){
    console.log( firstName + ' is a teenager ' );
}else if(age >= 21 || age < 23){
    console.log( firstName + ' is a parfect man ' );
}else if(!( age <= 21 ) ){
    console.log( firstName + ' is a fuck man ' );
}else{
    console.log( firstName + ' is a man ' );
}






/***************************************************************************************************
 *Ternary operator and switch statement
*/
var firstName = 'Alamin';
var age = 22;

//Ternary operator
!(age >= 21) ? console.log( firstName + ' is a young man ' ) : console.log( firstName + ' is old guy ' );
var ageAlamin = age > 12 ? firstName + ' is a firstBoy ' : firstName + ' is a second boy ';
console.log( ageAlamin );

//Switch statement
var job = 'Programmer';
switch(job){
    case 'driver':
    console.log( firstName + ' is a driver ' );
    break;

    case 'teacher':
    console.log( firstName + ' is a teacher ' );
    break;

    case 'Programmer':
    console.log( firstName + ' is a smart programmer ' );
    break;

    default:
        console.log(  firstName + ' is a fuck man ' );
        
}

switch(true){
    case age <= 21:
        console.log( firstName + ' is a small boy ' );
        break;
    case !(age >= 21):
        console.log(  firstName + ' is a Big man ');
        break;
    default:
        console.log( firstName + ' is a fuck man ' );
        
}







/***************************************************************************************************
 *Truthly and falsy value and equality operators 
*/
var height;
height = ' 5*3';
if( height || height === 0 ){
    console.log( 'Variable is defined' );
}else{
    console.log( ' Variable is undefined' );
}






/***************************************************************************************************
 *Function
*/
function calculateAge(birtyear){
    return 2020 - birtyear;
}
console.log(calculateAge(1933));

var ageJohn = calculateAge(1992);
var ageMark = calculateAge(1922);
var ageAlamin = calculateAge(1999);
console.log(ageJohn, ageMark, ageAlamin);

function yearUntilRetairment(year, firstName){
    var age = calculateAge(year);
    var retairment = 64 + age;
    console.log( firstName + ' retires in ' + retairment + ' years ' );
}
yearUntilRetairment(1933,'Adnan');
yearUntilRetairment(1932,'Salim');
yearUntilRetairment(1931,'Sumon');
yearUntilRetairment(1935,'Sagor');
yearUntilRetairment(1936,'Alamin');



function dubble(price){
    var dam = price*price;
    console.log(dam);
    
}
dubble(4);
dubble(100);



function dubble(price){
    var dam = price*price;
    return dam;
}
var first = dubble(12);
var secend = dubble(100);
var total = ( first+secend);
console.log( total);



function add(num1, num2){
    var total = num1 + num2;
    return total;
}
var result = add(12, 23);
console.log(result);





/***************************************************************************************************
 *Function statement and expresion 
*/
//function expretion
var whatdoyoudo = function(job, firstName){
    switch (job){
        case 'teacher':
            return firstName + ' is a head teacher ';
        case 'driver':
            return firstName + ' is a very good driver ';
        case 'programmer':
            return firstName + ' is a very good programmer ';
        default:
            return firstName + ' is a fuck man ';
    }
        
}
console.log( whatdoyoudo( 'teacher', 'Shakil') );
console.log( whatdoyoudo( 'driver', 'Sumon') );
console.log( whatdoyoudo( 'programmer', 'Alamin') );





/***************************************************************************************************
 *Array 
*/
var names = ['Alamin','Adnan','Sumon'];
var years = new Array( 1993, 1988, 1964);
console.log(names[2]);
console.log(names.length);

//Mutate array data
names[1] = 'ben';
names[names.length] = 'marry';
console.log( names );

//Diffrent data type
var membars = ['alamin','akash','sumon','Designer'];
//Adding
membars.push('blue');
membars.unshift('adnan');
console.log( membars );

//Deleting
membars.pop();
membars.shift();
console.log(membars);

console.log(membars.indexOf('sumon'));

var isDesigner = membars.indexOf('Designer') === -1 ? 'Membar is a not designer' : ' Membars is a designer';
console.log(isDesigner);





/***************************************************************************************************
 *Object and Properties 
*/
//Object literal
var alamin = {
    'firstName': 'alamin',
    'lastName': 'islam',
    'family': ['ma','baba','bhai','vabi'],
    'birthYear': 1999,
    'isMerried': false
}
console.log(alamin.firstName);
var x='birthYear';
console.log(alamin[x]);

alamin.job = 'programmer';
alamin['isMerried'] = true;
console.log(alamin);

//New object syntext
var adnan = new Object();
adnan.firstName = 'adnan',
adnan.birthYear = 1998,
adnan.lastName = 'ahmed'
console.log(adnan);





var studant = { name:'alamin', id:2, phone:4239443 };
var studant2 = { name:'adnan', id:3, phone:347743 };

phone1 = studant.phone
//var phone1 = studant['phone']
//console.log(phone1);

//update phone number
studant.phone = 34737274;
console.log(studant);

//add properties
 studant.cinema = 'ogni33';
 console.log(studant);





/***************************************************************************************************
 *Object and method 
*/
var alamin = {
    firstName: 'alamin',
    lastName: 'islam',
    family: ['ma','baba','bhai','vabi'],
    birthYear: 1999,
    isMerried: false,
    calcAge: function(birthYear){
        this.age = 2019 - this.birthYear;
    }
};
alamin.calcAge();
console.log(alamin);






/***************************************************************************************************
 *Loops and iterator 
*/
//for loop
for( var i = 0; i <= 20; i+=3){
    console.log(i);
}

var alamin = ['alamin','islam',12,true,'adnan'];
for( var i = 0; i < alamin.length; i++){
    console.log(alamin[i]);
}

//While loop
var i = 0;
while( i < alamin.length ){
    console.log(alamin[i]);
    i++;
}

//Continue and break point
var alamin = ['alamin','islam',12,true,'adnan'];
for( var i = 0; i < alamin.length; i++){
    if(typeof alamin[i] !== 'string' ) continue;
    console.log(alamin[i]);
    
}
//looping backword
var alamin = ['alamin','islam',12,true,'adnan'];
for( var i = alamin.length -1; i >= 0; i--){
    console.log(alamin[i]);
    
}















