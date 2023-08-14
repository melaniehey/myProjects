window.addEventListener('load', function () {
    //Klammern und Punkte um "document.querySelectorAll('.card')" machen diese Nodelist zum Array
    let cards = [...document.querySelectorAll('.card')];
    let clicked = false;
    let firstCardClicked = false;
    let secondCardClicked = false;
    let clickedCards = 0;

    clickFunction();
    // pickFirstOfPair();
    buildingPairs();

    function clickFunction() {
        cards.forEach((card) => {
            card.addEventListener('click', function () {
                card.classList.toggle('is-flipped');
                card.classList.add('dont-flip')
                clicked = true;
                clickedCards += 1;
                if (clickedCards === 2) {
                    firstCardClicked = true;
                    secondCardClicked = true;
                    clickedCards = 0;
                    autoFlipBack();
                    clickOnlyTwo();
                }
            });
        });
    }

    function autoFlipBack() {
        if (clicked = true) {
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].classList.contains('is-flipped')) {
                    setTimeout(function () { flipAgain(); }, 1500);
                }
            }
        }
    }

    function flipAgain() {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains('is-flipped')) {
                cards[i].classList.toggle('is-flipped');
                cards[i].classList.remove('dont-flip');
            }
        }
    }

    //Maximal zwei anklickbar
    function clickOnlyTwo() {
        let divs = [...document.querySelectorAll("div > div:not(.is-flipped)")];
        if (firstCardClicked && secondCardClicked) {
            for (let i = 0; i < divs.length; i++) {
                divs[i].classList.add('dont-flip');
                setTimeout(function () {
                    divs[i].classList.remove('dont-flip');
                }, 2000);
            }
        }
    }

    function buildingPairs() {
        for (let i = 0; i < 6; i++) {
            let firstInPair = Math.floor(Math.random() * 6);
            if (cards[firstInPair].classList.contains('inPair')) {
                //dann brauchen wir eine neue firstInPair oder?
                console.log('ToDo: neue firstInPair');
            } else {
                cards[firstInPair].classList.add('inPair');
                console.log(cards[firstInPair]);
            }


            let secondInPair = Math.floor(Math.random() * cards.length);
            if (cards[secondInPair].classList.contains('inPair')) {
                console.log('ToDo: neumachen 2');
            } else {
                cards[secondInPair].classList.add('inPair');
                console.log(cards[secondInPair]);
            }

            if (firstInPair == secondInPair) {
                buildingPairs();
                console.log('aksdsbfhsjakaskmjnbmkd');
            } else {
                console.log('else');
            }


            // let pair = [firstInPair, secondInPair]
            // console.log(pair);
        }
    }

    // Timer 
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    setInterval(setTime, 1000);

    function setTime() {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }

    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }
})