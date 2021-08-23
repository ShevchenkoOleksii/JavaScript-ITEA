function MatrixModel() {
    BaseModel.call(this);
var generalSize = 4;

    this.attributes = {
        grid: Array(generalSize).fill([]).map(function () {
            return Array(generalSize).fill('');
        })
        // grid: [
        //     ['', '', '', ''],
        //     ['', '', '', ''],
        //     ['', '', '', ''],
        //     ['', '', '', ''],
        // ]
    }

    this.getSize = function () {
        return generalSize;
    }

    var instance = this;
    MatrixModel = function () {
        return instance;
    }

    this.displayDigitByKeyPress();
}

MatrixModel.prototype = Object.create(BaseModel.prototype);
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.randomPlace = function () {
    return Math.floor(Math.random() * this.getSize());
}

MatrixModel.prototype.randomNumber = function () {
    return Math.random() < 0.8 ? 2 : 4;
}

MatrixModel.prototype.displayDigitByKeyPress = function (code) {
    // this.attributes.grid[this.randomPlace()][this.randomPlace()] = this.randomNumber();
    // this.attributes.grid[this.randomPlace()][this.randomPlace()] = this.randomNumber();
    //-------------------------------------------------------------------------------------

    let numOne,
        numTwo,
        checkArray;

    do {
        numOne = this.randomPlace();
        numTwo = this.randomPlace();


        checkArray = this.attributes.grid.flat().every(elem => elem !== '');
        if (checkArray) {
            console.error('Game Over!');
            break;
        }

    } while (this.attributes.grid[numOne][numTwo] !== '');

    if (this.attributes.grid[numOne][numTwo] === '') {
        this.attributes.grid[numOne][numTwo] = this.randomNumber();
    } else {
        console.error('Game Over!!!!!');

    }
// to add second random number =>
    // do {
    //     numOne = this.randomPlace();
    //     numTwo = this.randomPlace();

   
    //     checkArray = this.attributes.grid.flat().every(elem => elem !== '');
    //     if(checkArray) {
    //         console.log('Game Over!');
    //         break;
    //     }
       
    // } while (this.attributes.grid[numOne][numTwo] !== '');

    // if(this.attributes.grid[numOne][numTwo] === '') {
    //     this.attributes.grid[numOne][numTwo] = this.randomNumber();
    // } else {
    //     console.log('Game Over!!!!!');
    // }
    
    this.publish('changeData');

    let emptyCells = [
        [],
        [],
        [],
        []
    ];

    if (code === 'ArrowRight') {
        let index,
            i,
            k,
            j;
        for (index = 0; index < 4; index += 1) {

            for (i = 0; i < 4; i += 1) {

                if (this.attributes.grid[index][i] !== '') {

                    emptyCells[index].push(this.attributes.grid[index][i]);
                } else {
                    emptyCells[index].unshift('');
                }
            }

            for (j = 3; j >= 0; j -= 1) {
                if (emptyCells[index][j] === emptyCells[index][j - 1] && emptyCells[index][j - 1] !== '') {
                    emptyCells[index][j] += emptyCells[index][j - 1];
                    emptyCells[index].splice(j - 1, 1);
                    emptyCells[index].unshift('');
                }
            }

            for (k = 0; k < 4; k += 1) {
                this.attributes.grid[index][k] = emptyCells[index][k];
            }
        }
    }
    // ArrowLeft dosn't work correct!
    if (code === 'ArrowLeft') {
        let index,
            i,
            k,
            j;
        for (index = 0; index < 4; index += 1) {

            for (i = 0; i < 4; i += 1) {

                if (this.attributes.grid[index][i] === '') {
                    emptyCells[index].push('');

                } else {
                    emptyCells[index].unshift(this.attributes.grid[index][i]);
                }
            }

            for (j = 0; j < 4; j += 1) {

                if (emptyCells[index][j] === emptyCells[index][j + 1] && emptyCells[index][j + 1] !== '' && emptyCells[index][j] !== '') {
                    emptyCells[index][j] += emptyCells[index][j + 1];
                    emptyCells[index].splice(j + 1, 1);
                    emptyCells[index].push('');
                } else if (emptyCells[index][j] === '') {
                    break;
                }
            }

            for (k = 0; k < 4; k += 1) {
                this.attributes.grid[index][k] = emptyCells[index][k];
            }
        }
    }
}

MatrixModel.prototype.startNewGame = function () {
    console.log('startNewGame');
}