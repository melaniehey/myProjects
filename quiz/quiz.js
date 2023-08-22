window.addEventListener('load', function () {
    let allQuestions = [...document.querySelectorAll('.allQuestions')];
    let allAnswers = [...document.querySelectorAll('.allAnswers')];
    // let allAnswers2 = [...document.querySelectorAll('.allAnswersForOne'), document.querySelectorAll('.allAnswersForTwo'), document.querySelectorAll('.allAnswersForThree'), document.querySelectorAll('.allAnswersForFour'), document.querySelectorAll('.allAnswersForFife')];
    // console.log(allAnswers2);
    // console.log(allAnswers2.length);



    for (let i = 0; i < allQuestions.length; i++) {
        allQuestions[i].classList.add('dontDisplay');
    }

    for (let i = 0; i < allAnswers.length; i++) {
        allAnswers[i].classList.add('dontDisplay');
    }

    chooseRandomQuestion();
    randomAnswerSequence();

    function chooseRandomQuestion() {
        let shownQuestion = Math.floor(Math.random() * allQuestions.length);
        allQuestions[shownQuestion].classList.remove('dontDisplay');
        console.log(allQuestions[shownQuestion].id);
        if (allQuestions[shownQuestion].id == 'questionOne') {
            console.log('eins');
            allAnswers[shownQuestion].classList.remove('dontDisplay');
        } else if (allQuestions[shownQuestion].id == 'questionTwo') {
            console.log('zwei');
            allAnswers[shownQuestion].classList.remove('dontDisplay');
        } else if (allQuestions[shownQuestion].id == 'questionThree') {
            console.log('drei');
            allAnswers[shownQuestion].classList.remove('dontDisplay');
        }else if (allQuestions[shownQuestion].id == 'questionFour') {
            console.log('vier');
            allAnswers[shownQuestion].classList.remove('dontDisplay');
        }else if (allQuestions[shownQuestion].id == 'questionFife') {
            console.log('fünf');
            allAnswers[shownQuestion].classList.remove('dontDisplay');
        } else {
            console.log('keine frage');
        }
    }

    function randomAnswerSequence() {
        // for (let i = 0; i < allAnswers.length; i++) {
            let someAnswers = Math.floor(Math.random() * allAnswers.length);
            console.log(allAnswers[someAnswers]);


            for (let index = 0; index < someAnswers.length; index++) {
                
            }
        // }
    }
})