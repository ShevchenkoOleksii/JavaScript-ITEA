window.addEventListener("load", function () {
    
var textInputs = document.querySelectorAll(`input[type='text']`);
var form = document.querySelector('form');

for (elem of textInputs) {
    elem.addEventListener('change', changeHandler)
}

form.addEventListener('submit', onsubmitHandler);

function validate(elem, pattern) {
    var res = pattern.test(elem.value);
    if (res === false) {
        elem.className = "invalid";
    } 
    else {
        elem.className = "valid";
    }
}

function changeHandler(e) {
    var target = e.target;
    var pattern;
    var name = target.getAttribute('name');

    switch (name) {
        case 'userName':
            pattern = /\S/;
            break;
        case 'email':
            pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
            break;
        case 'zip':
            pattern = /\d{5}/;
            break;
        default:
            break;
    }

    validate(target, pattern);
}

    function onsubmitHandler(e) {
        var elements = this.elements;
        var invalid;

        for (var i = 0; i < elements.length - 1; i++) {
            var element = elements[i];

            if (element.className == "valid") {
                invalid = false;
            } else {
                invalid = true;
            }
        }

        if (invalid) {
            alert("Допущены ошибки при заполнении формы.");
            e.preventDefault();
            return false;
        }
    }
});