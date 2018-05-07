function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show questions
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("submit");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};


// add questions to array
var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#", "C", "C++"], "C"),
    new Question("Which language is used for styling web pages?", ["CSS", "HTML", "jQuery", "XML"], "CSS"),
    new Question("There are __ main components of object oriented programming", ["1", "2", "4", "6"], "4"),
    new Question("The Bootstrap grid system is based on how many columns?", ["3", "6", "12", "18"], "12"),
    new Question("MVC is a ________.", ["Website", "Library", "Language", "Framework"], "Framework")
]

// create object of the Quiz function in quizController.js
var quiz = new Quiz(questions);

// populate questions
populate();