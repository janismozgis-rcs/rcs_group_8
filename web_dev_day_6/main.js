

// isEven
// true / false


// Ja skaitlis dalās bez atlikuma ar 2 (ir pāra skaitlis), tad izdrukā vārdu "Fizz"
// Ja skaitlis dalās bez atlikuma ar 3, tad izvada "Bazz"
// Ja bez atlikuma dalās ar abiem, tad izvada "Fizz Bazz"
// Ja nedalās bez atlikuma ar nevienu, tad izvada skaitli

function fizzBazz(number) {
    var output = '';
    if (number % 2 === 0) {
        output = 'Fizz ';
    }
    if (number % 3 === 0) {
        output += 'Bazz';
    }
    if (output === '') {
        output = number;
    }
    return output;
}


function isEven(number) {
    return number % 2 == 0 ? 'is even' : 'is odd'; 
    // if (number % 2 == 0) {
    //     return 'is even';
    // } else {
    //     return 'is odd';
    // }
}
// console.log('number 2 is even ' + isEven(2));
// console.log('number 3 is even ' + isEven(3));
// console.log('number 4 is even ' + isEven(4));
// console.log('number 5 is even ' + isEven(5));
// console.log('number 223452345 is even ' + isEven(223452345));


var isEven2 = function(number){
    return number % 2 == 0 ? 'is even' : 'is odd'; 
}
console.log('number 2 ' + isEven2(2));
console.log('number 3 ' + isEven2(3));
console.log('number 4 ' + isEven2(4));
console.log('number 5 ' + isEven2(5));
console.log('number 223452345 ' + isEven2(223452345));



var cat = {
    name: 'Muris',
    hunger: 10,
    feed: function(){
        this.hunger--;
    }
}

// console.log(cat);
// cat.hunger += 2;
// cat.feed();
// cat.feed();
// cat.feed();
// cat.feed();
// cat.feed();
// console.log(cat);

var array = ['foo', 'bar', 'baz'];
console.log("apple");


// 1. jāuztaisa funkcija, kas kā parametru saņem vienu vārdu un atgriež šo vārdu spoguļrakstā.
// 2. uztaisīst funkciju, kas kā parametru saņem tekstu un atgirež true / false, vai šis teksts in palindroms

function reverseWord(word) {
    // var wordSplitted = word.split(''); // converts word into array
    // console.log(wordSplitted);
    // var reversedArray = wordSplitted.reverse(); // reverses the array
    // console.log(reversedArray);
    // var joinedArray = reversedArray.join('');
    return word.split('').reverse().join('');
}

function isPalindrom(word) {
    return word == reverseWord(word);
}
// console.log(reverseWord('Jānis'));
// console.log(reverseWord('alus ari ira sula'));

console.log(isPalindrom('Jānis'));
console.log(isPalindrom('eye'));
console.log(isPalindrom('alus ari ira sula'));
console.log(isPalindrom('racecar'));