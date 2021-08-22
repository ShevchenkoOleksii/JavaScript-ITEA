function Controller() {
    this.matrixModel = new MatrixModel();
    this.summaryModel = new SummaryModel();
}

Controller.prototype.onKeyPress = function (event) {
    if(
        event.code === 'ArrowUp' ||
        event.code === 'ArrowRight' ||
        event.code === 'ArrowDown' ||
        event.code === 'ArrowLeft'
    ) {
        this.matrixModel.displayDigitByKeyPress(event.code);
    }
}

Controller.prototype.onClickNewGame = function () {
    this.matrixModel.startNewGame();
}