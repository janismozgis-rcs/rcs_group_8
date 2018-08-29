var someNumber = 123; // integer
var someDecimal = 3.14; // float
var someWord = '<strong class="yay">foo</strong>'; // string '' "" ``
var someTrue = true; // boolean (bool)
var someNothing = null; // null

var someArray = [
    'vaz',
    'zaz',
    'gaz',
    'maz',
    'bmw',
    1, 
    3.14, 
    true,
]; // array


var johnny = {
    name: 'Johnny',
    surname: 'Doe',
    "full name": 'Johnny Doe',
    age: '21',
}; // object

// +
// -
// *
// /
// %
// var number1 = 2;
// var number2 = 4;
// console.log(1 + 1);
// console.log(2 + 2 * 2);
// console.log(number1 + number2);
// console.log(number1 + 3);
// var number3 = number1 - number2;
// console.log(number3);
// console.log((2 + 2) * 2); // 8
// number1 = number1 + 1;
// number1 += 2;
// number1++;
// number1--;
// console.log(number1);

// console.log(1 / 0);

// console.log(5 % 2);


// console.log('foo ' + 'bar');
// var someInt = 123;
// console.log(typeof 123 + '');
// console.log(1 + parseInt('1'));
// console.log('1' + 1);

// ==
// !=
// >
// <
// >=
// <=
// === stict comparison (eaqual)
// !== strict comparison (not eaqual)

// var name = 'Kāris';
// if (name = '') {
//     console.log('Čau Anna');
// } else if(name == 'Jānis') { 
//     console.log('Whats up Jānis')
// } else {
//     console.log('Nepazīstu Tevi');
// }
// Anna => Čau Anna, Jānis => Whats up Jānis, anything else => Nepazīstu tevi
var a = 1;
var b = 2;
var c = 3;

// && = and
// || = or
if (a == 2 && (b == 3 || c == 3)) {

}


// Jānis vai Kārlis, vai Zane -> Čau zināmais cilvēk
// else -> Nepazīstu Tevi





var name = 'Jānis';
// ------------------------------------------------------------
// if (
//     name == 'Jānis' 
//     || name == 'Kārlis' 
//     || name == 'Zane'
// ) {
//     console.log('Čau zināmais cilvēk')
// } else {
//     console.log('Nepazīstu Tevi')
// }



// // ------------------------------------------------------------
// if (name == 'Jānis') {
//     console.log('Čau zināmais cilvēk')
// } else if (name == 'Kārlis') {
//     console.log('Čau zināmais cilvēk')
// } else if (name == 'Zane') {
//     console.log('Čau zināmais cilvēk')
// } else {
//     console.log('Nepazīstu Tevi')
// }

// var name = 'Kārlis';
// switch (name) {
//     case 'Jānis':
//     case 'Kārlis':
//     case 'Zane':
//         console.log('Čau zināmais cilvēk');
//     default:
//         console.log('Nepazīstu Tevi');
// }

// var i = 0;
// while (i < 20) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// }
// ----------------------------------------
// i = 0;
// while (i < 20) {
//     console.log(i);
//     i += 2;
// }

// var i3 = 20;
// while (i3 >= 0) {
//     i3--;        
//     console.log(i3);
// }

// var i = 0;
// while (i < 20) {
//     i++;    
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }
// console.log(i);

// var i = 20;
// do {
//     console.log(i);
//     i++;
// } while (i < 20);
// for (var i = 20; i > 0; i--) {
//     console.log(i);
// }

var cars = ['vaz', 'gaz', 'bmw'];
var superCar = 'gaz';
for (var index = 0; index < cars.length; index++) {
    var car = cars[index];
    if (car == superCar) {
        // console.log(car);
    }
}
addTwoNumbers(2, 3);
function addTwoNumbers(number1, number2) {
    var sum = number1 + number2;
    console.log(sum);
}

function sentNotification(name) {
    //
    //
    //
    //
    //
}

var users = ['Jānis', 'Kārlis', 'Anna'];
for (var index = 0; index < users.length; index++) {
    var user = users[index];
    sentNotification(user);
}
// funkcija saņem divus parametrus - cilvēka vārdu un vecumu.
// Kārlis, 50
// Čau Kārli, Tev ir 50 gadi!.
// console.log(addTwoNumbers(2, 3));
function greetPerson(name, age) {
    console.log('Čau ' + name + ', Tev ir ' + age + ' gadi!');
}
greetPerson('Anna', 20);
greetPerson('Kārlis', 30);
greetPerson('Līga', 40);



// Fizz Bazz
// Uzrakstīt programmu, kas izskaita no 0 līdz 30.
// Ja skaitlis dalās bez atlikuma ar 2 (ir pāra skaitlis), tad izdrukā vārdu "Fizz"
// Ja skaitlis dalās bez atlikuma ar 3, tad izvada "Bazz"
// Ja bez atlikuma dalās ar abiem, tad izvada "Fizz Bazz"
// Ja nedalās bez atlikuma ar nevienu, tad izvada skaitli

// for (var i = 0; i <= 30; i++) {
//     if (i % 2 == 0 && i % 3 == 0) {
//         console.log('Fizz Bazz');
//     } else if (i % 3 == 0) {
//         console.log('Bazz');
//     } else if (i % 2 == 0) {
//         console.log('Fizz');
//     } else {
//         console.log(i);
//     }
// }
for (var i = 0; i <= 30; i++) {
    var output = '';
    if (i % 2 === 0) {
        output = 'Fizz ';
    }
    if (i % 3 === 0) {
        output += 'Bazz';
    }
    if (output === '') {
        output = i;
    }
    console.log(output);
}





// Fizz Bazz
// 1
// Fizz
// Bazz
// Fizz
// 5
// Fizz Bazz
// 7
// Fizz
// Bazz
// Fizz
// 11
// Fizz Bazz
// 13
// Fizz
// Bazz
// Fizz
// 17
// Fizz Bazz
// 19
// Fizz
// Bazz
// Fizz
// 23
// Fizz Bazz
// 25
// Fizz
// Bazz
// Fizz
// 29
// Fizz Bazz

