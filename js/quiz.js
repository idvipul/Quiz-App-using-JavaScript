function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

// get index of current question
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

// check is quiz has ended or not
Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

// calculate score
Quiz.prototype.guess = function(answer) {
    this.questionIndex++;

    if(this.questionIndex().correctAnswer(answer)) {
        this.score++;
    }
}