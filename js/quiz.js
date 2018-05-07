function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    this.questionIndex++;

    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
