function MatrixModel() {
    BaseModel.call(this);
    this.attributes = {
        grid: [
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
        ]
    }
}

MatrixModel.prototype = Object.create(BaseModel.prototype);
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.insertNumber = function () {
    this.attributes.grid[0][0] = '2';
    this.publish('changeData');
}