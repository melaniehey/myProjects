window.addEventListener('load', function () {
    //Klammern und Punkte um "document.querySelectorAll('.card')" machen diese Nodelist zum Array
    let cards = [...document.querySelectorAll('.card')];
    let clicked = false;
    let firstCardClicked = false;


    clickFunction();

    function clickFunction() {
        let clickedCards = 0;
        cards.forEach((card) => {
            card.addEventListener('click', function () {
                card.classList.toggle('is-flipped');
                card.classList.add('dont-flip')
                clicked = true;
                clickedCards += 1;
                if (clickedCards === 2) {
                    autoFlipBack()
                    
                    console.log('des');
                } else {
                    // clickFunction();
                    console.log('wer');
                }
            });
        });
    }




    function autoFlipBack() {
        // cards.classList.remove('dont-flip');
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
            }
        }
    }

    //Maximal nur zwei anklickbar












    //Building Pairs

    // var arr1 = cards.slice(),
    //     arr2 = cards.slice(); 

    // var arr1 = Array.from(cards).slice(),
    //     arr2 = Array.from(cards).slice();

    //var arr1 = cards.slice(), // copy array
    //    arr2 = cards.slice(); // copy array again

    //arr1.sort(function () { return 0.5 - Math.random(); }); // shuffle arrays
    //arr2.sort(function () { return 0.5 - Math.random(); });

    //while (arr1.length) {
    //  var firstOfPair = arr1.pop(), // get the last value of arr1
    //     secondOfPair = arr2[0] == firstOfPair ? arr2.pop() : arr2.shift();
    //        ^^ if the first value is the same as firstOfPair, 
    //           get the last value, otherwise get the first

    //   console.log(firstOfPair + ' gets ' + secondOfPair);
    //}


    // numberPairsGenerator();    

    // function numberPairsGenerator() {
    //     let pairNumber = Math.floor((Math.random() * 6)); /* 0-5 */
    //     if (pairNumber < 9) {
    //         console.log(pairNumber);
    //     }
    // }
    // getTwoRandomeCards();

    // function getTwoRandomeCards(cards, num) {
    //     let shuffled = [...cards].sort(() => 0.5 - Math.random());
    //     console.log(shuffled);

    //     return shuffled.slice(0, num);
    // }

    // console.log(getTwoRandomeCards(cards, 2));
    // console.log(getTwoRandomeCards(cards, 2));


    // function GET First OF PAIR
    // function buildPairs(array) {
    //     const pairs = [];
    //     const indexes = [...cards].sort(() => 0.5 - Math.random());
    //     clicked == true;
    //     if (clicked == true) {
    //         for (let i = 0; i < indexes.length; i++) {
    //             firstOfPair = indexes[i];
    //             console.log(firstOfPair);
    //             getSecondOfPair();
    //         }
    //     } else {
    //         console.log('nicht true, nicht clicked');
    //     }
    // }

    // function getSecondOfPair() {
    //     const indexes = [...cards].sort(() => 0.5 - Math.random());
    //     for (let i = 0; i < indexes.length; i++) {
    //         if (!indexes[i] == firstOfPair) {
    //             console.log('a');
    //         } else {
    //             console.log('b');
    //         }
    //     }
    // }

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