var parag = document.getElementById('paragraph');
var patt = new RegExp('a');
var countA = 0;
var userText = prompt('Enter some text', 'Bla Bla Bla Bla Bla Bla');
var someText = parag.innerHTML = userText;
var newArray = someText.split(' ');
for (let index = 0; index < someText.length; index++) {
    const element = someText[index];
    if(patt.test(element)) {
        countA++;
    }
}
alert(`Кількість введених "а": ${countA}`);

var divContainer = document.getElementById('container');
for (let index = 0; index < newArray.length; index++) {
    const element = newArray[index];
    divContainer.insertAdjacentHTML('beforeend', '<li></li>');
    if(index == 0) {
        divContainer.lastChild.innerHTML = element.toUpperCase();
    } else if(index >= newArray.length - 2) {
        divContainer.lastChild.innerHTML = element.toLowerCase();
    } else {
        divContainer.lastChild.innerHTML = element;
    }
}

divContainer.insertAdjacentHTML('beforeend', `<li> Кількість введених "а": ${countA} </li>`);
divContainer.lastChild.id = 'liForCount';