var someText = document.getElementById('someTextFromUser').innerHTML;
var resultOfFunc = document.getElementById('resultOfFunction');
var result;

var pattForIndex = /\b\d{5}\b/g;

var pattForIp = /([0-2][0-5][0-5]|[0-2][0-4][0-9]|[0-1]?[0-9][0-9]?)\.([0-2][0-5][0-5]|[0-2][0-4][0-9]|[0-1]?[0-9][0-9]?)\.([0-2][0-5][0-5]|[0-2][0-4][0-9]|[0-1]?[0-9][0-9]?)\.([0-2][0-5][0-5]|[0-2][0-4][0-9]|[0-1]?[0-9][0-9]?)/g;

var pattForDollar = /\$(\d{1,})\.?(\d{1,})/g;

var pattForDate = /([0-2]{1}[0-9]{1}|3{1}[0-1]{1})\/([0-1]{1}[0-2]{1}|0{1}[0-9]{1})\/(1{1}[0-9]{1}[0-9]{1}[0-9]{1}|2{1}0{1}[0-9]{1}[0-9]{1})/g;

function chooseElements(patt) {
    result = someText.match(patt);
    showArrayAsList();
}

function showArrayAsList() {
    resultOfFunc.innerHTML = '';

    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        resultOfFunc.innerHTML += `<br> ${element}`;
    }
}