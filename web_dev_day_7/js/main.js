function buttonClick() {
    var element = document
        .querySelector('#some-paragraph');
    if (element.innerText == 'foo') {
        element.innerText = 'bar';
    } else {
        element.innerText = 'foo';
    }
}
function checkParagraphContent() {
    var elements = document.querySelectorAll('.other-paragraph');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var number = i + 1;
        if (element.innerText == 'foo ' + number) {
            element.innerText = 'bar ' + number;
        } else {
            element.innerText = 'foo ' + number;
        }
    }
}
function add(number) {
    var element = document
        .getElementById('number');
    var currentValue = parseInt(element.innerText);
    element.innerText = currentValue + number;
}


var count = 0;
function addCount() {
    count++;
    document
        .getElementById('counter')
        .innerText = count;
}

function isAnagram(str1, str2) {
    str1 = str1.replace(' ', '').split('').sort().join('')
    str2 = str2.replace(' ', '').split('').sort().join('')
    return str1 == str2;
}

console.log('sula ' + isAnagram('sula', 'alus'));
console.log('aaa ' + isAnagram('aaa', 'aaa'));
console.log('aab ' + isAnagram('a a b', 'a b a'));
console.log('random ' + isAnagram('asdfasdf', 'fgjhfgj'));