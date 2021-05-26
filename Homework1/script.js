function removeIdNames() {
    var allLi = document.getElementById('uniqueID').children;
    for (var key of allLi) {
        key.removeAttribute('id');
    }
}

function resetTextValue() {
    document.getElementById('text').value = '';
}

function chooseFirstLi() {
    removeIdNames();
    var firstLi = document.getElementById('uniqueID').firstElementChild;
    firstLi.setAttribute('id', 'myElement');
}

function chooseLastLi() {
    removeIdNames();
    var lastLi = document.getElementById('uniqueID').lastElementChild;
    lastLi.setAttribute('id', 'myElement');
}

function nextElement() {
    var begin = document.getElementById('myElement');
    if (!begin) {
        var firstLi = document.getElementById('uniqueID').firstElementChild;
        firstLi.setAttribute('id', 'myElement');
        return;
    } var nextLi = begin.nextSibling;

    if (!nextLi) {
        removeIdNames();
        var firstLi = document.getElementById('uniqueID').firstElementChild;
        firstLi.setAttribute('id', 'myElement');
        return;
    }

    if (nextLi.nodeType == 3) {
        nextLi = nextLi.nextSibling;
        if (!nextLi) {
            removeIdNames();
            var firstLi = document.getElementById('uniqueID').firstElementChild;
            firstLi.setAttribute('id', 'myElement');
            return;
        }
    }
    removeIdNames();
    nextLi.setAttribute('id', 'myElement');
}

function previousElement() {
    var begin = document.getElementById('myElement');
    if (!begin) {
        var lastLi = document.getElementById('uniqueID').lastElementChild;
        lastLi.setAttribute('id', 'myElement');
        return;
    } var previousLi = begin.previousSibling;

    if (!previousLi) {
        removeIdNames();
        var lastLi = document.getElementById('uniqueID').lastElementChild;
        lastLi.setAttribute('id', 'myElement');
        return;
    }

    if (previousLi.nodeType == 3) {
        previousLi = previousLi.previousSibling;

        if (!previousLi) {
            removeIdNames();
            var lastLi = document.getElementById('uniqueID').lastElementChild;
            lastLi.setAttribute('id', 'myElement');
            return;
        }
    }
    removeIdNames();
    previousLi.setAttribute('id', 'myElement');
}

function addElement() {
    var newLi = document.createElement('li');
    newLi.innerHTML = document.getElementById('text').value;
    resetTextValue()
    var myEl = document.getElementById('myElement');
    if (!myEl) {
        alert('Виберіть елемент, після якого потрібно добавити новий!');
        return;
    }
    var myElParent = myEl.parentNode;
    myElParent.insertBefore(newLi, myEl.nextSibling);
    removeIdNames();
    newLi.setAttribute('id', 'myElement');
}

function addElementToEnd() {
    var newLi = document.createElement('li');
    newLi.innerHTML = document.getElementById('text').value;
    resetTextValue()
    document.getElementById('uniqueID').appendChild(newLi);
    removeIdNames();
    newLi.setAttribute('id', 'myElement');
}

function removeElement() {
    var parentEl = document.getElementById('uniqueID');
    var childEl = document.getElementById('myElement');
    if (!childEl) {
        alert('Виберіть елемент, що потрібно видалити!');
        return;
    }
    parentEl.removeChild(childEl);
}

function addElementToStart() {
    var newLi = document.createElement('li');
    newLi.innerHTML = document.getElementById('text').value;
    resetTextValue()
    var myEl = document.getElementById('uniqueID').firstChild;
    var myElParent = myEl.parentNode;
    myElParent.insertBefore(newLi, myEl);
    removeIdNames();
    newLi.setAttribute('id', 'myElement');
}
