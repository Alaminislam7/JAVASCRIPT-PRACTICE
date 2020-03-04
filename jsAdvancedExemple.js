/********************************************************************************************************************
---------------------------------------------UDEMY ADVANCED JAVASCRIPT CLASS-2---------------------------------------
**********************************************************************************************************************/


/********************************************************************************************************
 *Variable er value exchange   *START------------------------> (JHONKAR MAHBUB BHAIER PROBLEM SHOLVING)
**********************************************************************************************************/

//process-1
var a = 6;
var b = 9;
var tmp = a;
var a = b;
var b = tmp;
console.log( " After swap " + a + ' and ' + b );

//process-2

var a = 6;
var b = 9;
var a = a+b;
var b = a-b;
var a = a-b;
console.log( " After swap " + a + ' and ' + b );

//process-3

var a = 6;
var b = 9;
[ a,b ] = [ b,a];
console.log( " After swap " + a + ' and ' + b );




/***************************************************************************************************
 *Javascript random number 
*/
//Rendom code zenarator

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 console.log(makeid(10));




 
/***************************************************************************************************
 *Javascript max numbers for 3 or many numbers
*/

var amla = 757;
var business = 767;
var teacher = 875;

var max = Math.max(amla, business, teacher);

console.log(" BOROLOK "+ max ); 

function maxNum(num1, num2, num3){
    var max = 0;
    if((num1 >= num2) && (num1 >= num3)){
        max = num1;
    }
    else if((num2 >= num1) && (num2 >= num3)){
        max = num2;
    }
    else{
        max = num3;
    }
return max;
}

var arr = []; 
for(i=0;i<3;i++){
    arr[i] = parseInt(prompt("Enter a number"));
}
console.log(maxNum.apply(this, arr));




/***************************************************************************************************
 *Javascript array max values
*/

var marks = [ 97,78,54,98,70 ];
var max = marks[0];

for( var i=0; i<=marks.length; i++){
    var height = marks[i]
    if(height > max){
        max = height;
    }
}
console.log( 'height number '+ max );

var marks = [ 97,78,54,98,70 ];
var sum = marks[0];
for( var i=0; i<marks.length; i++){
    var element = marks[i];

    sum += element;
}
console.log(sum);




function getArrayTotal(marks){
    for( var i=0; i<marks.length; i++){
        var element = marks[i];
        sum += element;
        return sum;
    }
}
var marks = [ 97,78,54,98,70 ];
var result = getArrayTotal(marks);
console.log( result );



/***************************************************************************************************
 *Javascript dupplicate array
*/

// Defining function to get unique values from an array
function getUnique(array){
    var uniqueArray = [];
    
    // Loop through array values
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
var uniqueNames = getUnique(names);
console.log(uniqueNames); // Prints: ["John", "Peter", "Clark", "Harry", "Alice"]


//section-2

var name = [ 23,54,23,43,234,22,243,22 ];
var uniqueNames = [];

for( var i=0; i<name.length; i++ ){
    var element = name[i];
    var index = uniqueNames.indexOf(element);
    if(index == -1){
        uniqueNames.push(element);
    }
}
console.log(uniqueNames);



/***************************************************************************************************
 *Javascript Count number of words
*/

var speace = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio culpa exercitationem fugit dicta nisi illum quos fuga, molestiae minus cupiditate voluptas.'

var count = 0;
for( var i = 0; i < speace.length; i++){
    var char = speace[i];
    if(char == " " && speace[i-1] != " "){
        count++;
    }
}
count++
console.log(count);



/***************************************************************************************************
 *Javascript revarse coun
*/
function revarseString(str){
    var revarse = "";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        revarse = char + revarse;
    }
    return revarse;
}
var statement = "he allah amk help koro";
var forAlign = revarseString(statement);
console.log(forAlign);






/***************************************************************************************************
 *Hoisting 
 */
calculateAge(1998);
function calculateAge(year){
    console.log(2020 - year);
}


var retirement = function(year){
    console.log(65 - (2016 - year));
}

//Variable
var age = 22;
function foo(){
    var age = 33;
    console.log(age);
}
foo();
console.log(age);






/***************************************************************************************************
 *Variable Scope chain 
*/
var a = 'hello';
first();
function first(){
    var b = 'hi';
    secend();
    function secend(){
        var c = 'hey';
        var z = a+b+c;
        console.log( z );
        
    }
}






/***************************************************************************************************
 *The this keyword 
*/

calculateAge(1998);
function calculateAge(year){
    console.log(2020 - year);
    console.log(this);
    
} 

var alamin = {
    name: 'alamin',
    yearOfBirth: 1998,
    calculateAge: function(){
        console.log(this);
        console.log( 2020 - this.yearOfBirth );

        // function innerFunction(){
        //     console.log(this);
            
        // }
        // innerFunction();
        
    }
}
alamin.calculateAge();

var adnan = {
    name: 'adnan',
    yearOfBirth: 1987
};

adnan.calculateAge = alamin.calculateAge;
adnan.calculateAge();





/***************************************************************************************************
 *END-------------------------------> (JHONKAR MAHBUB BHAIER PROBLEM SHOLVING)
*****************************************************************************************************/

/***************************************************************************************************
 *START-------------------------------> (UDEMY ADVANCE JAVASCRIPT COURSE)
*****************************************************************************************************/




/***************************************************************************************************
 *ADVANCE JAVASCRIPT OBJECT AND FUNCTION( FUNCTION CONSTRUCTOR )
*/


var Person = function( name,yearOfBirth,job ){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log( 2020 - this.yearOfBirth );
}

Person.prototype.name = "smith";

var john = new Person( 'Alamin',1998,'Programmer' );
var jane = new Person( 'Adnan',1995,'Designer' );
var mark = new Person( 'Alamin',1998,'Scientist' );

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log( john.name);
console.log( jane.name);
console.log( mark.name);




/***************************************************************************************************
 *ADVANCE JAVASCRIPT OBJECT AND FUNCTION( OBJECT.CREATE )
*/


var personProto = {
    calculateAge: function(){
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'john',
john.yearOfBirth = 1998,
john.job = 'Teacher'

var jane = Object.create(personProto,
{
    name: { value:'jane' },
    yearOfBirth: { value:1999 },
    job: { value: 'Programming' }
});




/***************************************************************************************************
 *ADVANCE JAVASCRIPT OBJECT AND FUNCTION( PRIMITIVES VS OBJECT )
*/

//PRIMITIVES
var a = 23;
var b = a;
a = 45;
console.log(a);
console.log(b);

//OBJECT
var obj1 = {
    name: 'Alamin',
    age:26,
}
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//FUNCTION
var age = 29;
var obj = {
    name: 'adnan',
    city:'Dhaka'
};

function change(a, b){
    a = 30,
    b.city = 'california'
}
change(age, obj);
console.log(age);
console.log(obj.city);







/***************************************************************************************************
 *ADVANCE JAVASCRIPT OBJECT AND FUNCTION(FIRST CLASS FUNCTION:PASSING FUNCTION AS ARGUMENTS)
*/

var years = [ 1999,2010,2015,1997,1990 ];
function arrayCals(arr, fn){
    var arrRes = [];
    for( var i=0; i<arr.length; i++ ){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020-el;
}
function isFullage(el){
    return el >= 18;
}
function maxHeartRates(el){
    if( el >= 18 && el <= 81 ){
        return Math.round( 206.9 - (0.67*el) );
    }else{
        return -1;
    }
}

var ages = arrayCals(years, calculateAge);
var fullAges = arrayCals(ages,isFullage);
var Rates = arrayCals(ages, maxHeartRates);

console.log(fullAges);
console.log(ages);
console.log(Rates);







/***************************************************************************************************
 *ADVANCE JAVASCRIPT OBJECT AND FUNCTION(FIRST CLASS FUNCTION:FUNCTIONS RETURNING FUNCTIONS)
*/

function interviewQuestion(job) {
    if( job === 'designer' ) {
        return function(name){
            console.log( name +' can you please explain what is ux design?' );
        }
    }else if( job === 'teacher' ) {
        return function(name) {
            console.log( ' What subject do you tech ' + name + ' ? ' );
        }
    }else{
        return function(name) {
            console.log( ' Hello ' + name + ' what do you do?' );
        }
    }
}


var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Alamin');
designerQuestion('Alamin');
designerQuestion('Adnan');
designerQuestion('Ahmed');
interviewQuestion('teacher')('Adnan');




/***************************************************************************************************
 *ADVANCE JAVASCRIPT OBJECT AND FUNCTION(IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) )
*/

function game(){
    var score = Math.random() * 10;
    console.log( score >=5 );
}
game();

(function(){
    var score = Math.random() * 10;
    console.log( score >=5 );
})();

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log( score >= 5 - goodLuck );
})(5);






/***************************************************************************************************
 *ADVANCE JAVASCRIPT OBJECT AND FUNCTION( CLOSURES )
*/

function retirement(retirementAge){
    var a = ' years left until retirement. ';
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth;
        console.log( (retirementAge-age)+a );
    }
}
var retirementBD = retirement(66);
var retirementIceland = retirement(67);
var retirementUsa = retirement(65);

retirementBD(1998);
retirementIceland(1998);
retirementUsa(1998);
// retirement(66)(1997);

function interviewQuestion(job) {
    if( job === 'designer' ) {
        return function(name){
            console.log( name +' can you please explain what is ux design?' );
        }
    }else if( job === 'teacher' ) {
        return function(name) {
            console.log( ' What subject do you tech ' + name + ' ? ' );
        }
    }else{
        return function(name) {
            console.log( ' Hello ' + name + ' what do you do?' );
        }
    }
}

function interviewQuestion(job){
    return function(name){
        if( job === 'designer'){
            console.log( name +' can you please explain what is ux design?' );
        }else if( job === 'teacher' ) {
                console.log( ' What subject do you tech ' + name + ' ? ' );
        }else {
            console.log( ' Hello ' + name + ' what do you do?' );
        }
    }
}
interviewQuestion('teacher')('Alamin');





/***************************************************************************************************
 *ADVANCE JAVASCRIPT OBJECT AND FUNCTION( BIND, CALL AND APPLY )
*/

var john = {
    name: 'John',
    age: 22,
    job:'teacher',
    presentation: function(style, timeOfDay){
        if( style === 'formal' ){
            console.log( ' Good ' + timeOfDay + ' Ladies and gentlemen! I\'m '+ this.name + ' I\'m a ' + this.job + ' and i\'m ' + this.age + ' year\'s old ' );
        }else if( style === 'friendly' ){
            console.log( ' Hey What\'s up I\'m '+ this.name + ' I\'m a ' + this.job + ' and i\'m ' + this.age + ' year\'s old have a nice ' + timeOfDay + '.' );
        }
    }
}
john.presentation('formal','morning');


var adnan = {
    name: 'Adnan',
    age:32,
    job:'designer'
}
//CALL
john.presentation.call( adnan,'friendly','afternoon' );
//APPLY
john.presentation.apply( adnan,['friendly','evening']);
//BIND
var johnFriendly = john.presentation.bind(adnan,'friendly');
johnFriendly('morning');


var years = [ 1999,2010,2015,1997,1990 ];
function arrayCals(arr, fn){
    var arrRes = [];
    for( var i=0; i<arr.length; i++ ){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020-el;
}
function isFullage(limit, el){
    return el >= limit;
}
var ages = arrayCals(years, calculateAge);
var FullBd = arrayCals( ages, isFullage.bind(this, 20));

console.log( ages );
console.log( FullBd );






/***************************************************************************************************
 *ADVANCE JAVASCRIPT OBJECT AND FUNCTION( COODING CHANLENGE )
*/

/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/





/* (function() {

    function Question(question, answer, correct){
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for( var i=0; i<this.answer.length; i++) {
            console.log( i + ': ' + this.answer[i]);
            
        }
    }
    
    Question.prototype.checkAnswer = function(ans){
        if( ans === this.correct ) {
            console.log( 'Correct Answer' );
        }else{
            console.log( ' Wrong answer: try again ' );
        }
    }
    
    var q1 = new Question(' Is javascript the cool programming language in the world ?', 
                                                                                        [ 'Yes','No' ],0);
    
    var q2 = new Question( 'What is the name of course\'s teacher?', 
                                                                [ 'john','mickle','jonas' ],2);
    
    var q3 = new Question( 'What does best describe cooding', 
                                                            [ 'booring','fun','hard' ],1);
    
    
    var questions = [ q1,q2,q3 ];
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt('Please select the correct answer'));
    
    questions[n].checkAnswer(answer);function Question(question, answer, correct){
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for( var i=0; i<this.answer.length; i++) {
        console.log( i + ': ' + this.answer[i]);
        
    }
}

Question.prototype.checkAnswer = function(ans){
    if( ans === this.correct ) {
        console.log( 'Correct Answer' );
    }else{
        console.log( ' Wrong answer: try again ' );
    }
}

var q1 = new Question(' Is javascript the cool programming language in the world ?', 
                                                                                    [ 'Yes','No' ],0);

var q2 = new Question( 'What is the name of course\'s teacher?', 
                                                            [ 'john','mickle','jonas' ],2);

var q3 = new Question( 'What does best describe cooding', 
                                                        [ 'booring','fun','hard' ],1);


var questions = [ q1,q2,q3 ];
var n = Math.floor(Math.random() * questions.length);
questions[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer'));

questions[n].checkAnswer(answer);

})(); */





/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/


(function() {

    function Question(question, answer, correct){
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for( var i=0; i<this.answer.length; i++) {
            console.log( i + ': ' + this.answer[i]);
            
        }
    }
    
    Question.prototype.checkAnswer = function(ans){
        if( ans === this.correct ) {
            console.log( 'Correct Answer' );
        }else{
            console.log( ' Wrong answer: try again ' );
        }
    }
    
    var q1 = new Question(' Is javascript the cool programming language in the world ?', 
                                                                                        [ 'Yes','No' ],0);
    
    var q2 = new Question( 'What is the name of course\'s teacher?', 
                                                                [ 'john','mickle','jonas' ],2);
    
    var q3 = new Question( 'What does best describe cooding', 
                                                            [ 'booring','fun','hard' ],1);
    
    
    var questions = [ q1,q2,q3 ];
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt('Please select the correct answer'));
    
    questions[n].checkAnswer(answer);function Question(question, answer, correct){
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for( var i=0; i<this.answer.length; i++) {
        console.log( i + ': ' + this.answer[i]);
        
    }
}

Question.prototype.checkAnswer = function(ans,callback){
    if( ans === this.correct ) {
        console.log( 'Correct Answer' );
        sc = callback(true);
    }else{
        console.log( ' Wrong answer: try again ' );
        sc = callback(false);
    }
    this.displayScore(sc);
}

Question.prototype.displayScore = function(score){
    console.log( 'Your current score is: '+ score );
    console.log( '----------------------------' );
    
}

var q1 = new Question(' Is javascript the cool programming language in the world ?', 
                                                                                    [ 'Yes','No' ],0);

var q2 = new Question( 'What is the name of course\'s teacher?', 
                                                            [ 'john','mickle','jonas' ],2);

var q3 = new Question( 'What does best describe cooding', 
                                                        [ 'booring','fun','hard' ],1);



var questions = [ q1,q2,q3 ];

function score() {
    var sc = 0;
    return function(correct) {
        if(correct){
            sc++;
        }
        return sc;
    }
}
var keepScore = score();

function nextQuestion(){
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer');

    if(answer !== 'exit'){
        questions[n].checkAnswer(parseInt(answer),keepScore);
        nextQuestion();
    }
    
}
nextQuestion();



})();







/***************************************************************************************************
 *ADVANCE JAVASCRIPT OBJECT AND FUNCTION(IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) )
*/














