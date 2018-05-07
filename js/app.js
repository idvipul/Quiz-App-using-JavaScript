function populate() {
    // // show questions
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
}

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