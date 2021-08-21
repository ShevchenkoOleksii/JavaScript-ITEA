function Controller() {
    this.matrixModel = new MatrixModel();
    this.summaryModel = new SummaryModel();
}

Controller.prototype.onKeyPress = function () {

}

Controller.prototype.onClickNewGame = function () {
    this.matrixModel.insertNumber();
}