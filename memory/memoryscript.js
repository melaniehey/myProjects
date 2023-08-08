window.addEventListener('load', function () {
    let cards = document.querySelectorAll('.card');
    let clicked = false;
    // let pair = [];
    // let pairs = [pair, pair, pair, pair, pair, pair];

    cards.forEach((card) => {
        card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
            clicked = true;
            autoFlipBack()
        });
    });

    function autoFlipBack() {
        console.log('function auto');
        console.log(clicked);
        if (clicked = true) {
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].classList.contains('is-flipped')) {
                    console.log('is flipped');
                    setTimeout(function () { flipAgain(); }, 1500);
                }
            }
        }
    }

    function flipAgain() {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains('is-flipped')) {
                // cards[i].classList.toggle('is-flipped-again');
                cards[i].classList.toggle('is-flipped');
                console.log('123');
            }
        }
    }

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
    buildPairs();

    function buildPairs(array) {
        const pairs = [];
        const indexes = [...cards].sort(() => 0.5 - Math.random());
        console.log(indexes);
        //shuffle
        indexes.sort(() => Math.random() - 0.5);
        for (let i = 0; i < indexes.length; i++) {
            let currentIndex = indexes[i];
        }
    }

})