window.addEventListener('load', function () {
    let tiles = document.querySelectorAll(".flex-item");
    let players = ['X', 'O'];
    let clicked = false;
    let pcClicked = false;
    let victory = false;
    let myScore = 0;
    let pcScore = 0;
    document.getElementById('gameBox1').style.display = 'none';
    document.getElementById('gameBox2').style.display = 'none';
    document.getElementById('gameBox3').style.display = 'none';

    whoBegins();

    function whoBegins() {
        let beginner = Math.floor((Math.random() * 2));
        if (beginner == 0) {
            pcClicked = true;
            myTurn();
        } else {
            pcTurn();
        }
    }

    function myTurn() {
        clicked = false;
        for (let i = 0; i < tiles.length; i++) {
            //wenn geklickt wird, passiert alles in dieser for schleife
            tiles[i].addEventListener("click", function () {
                if (!this.classList.contains('myTiles') && clicked == false && victory == false && pcClicked && !this.classList.contains('pcTiles')) {
                    this.classList.add('myTiles');
                    this.innerHTML = players[0];
                    clicked = true;
                    pcClicked = false;
                    whoWon();
                    setTimeout(pcTurn, 1000);
                } myTurn();
            });
        }
    };

    function pcTurn() {
        pcClicked = false;
        let pcTile = Math.floor((Math.random() * 9));
        pcTile = tiles[pcTile];
        if (!pcTile.classList.contains('myTiles') && victory == false && !pcTile.classList.contains('pcTiles')) {
            pcTile.classList.add('pcTiles');
            pcTile.innerHTML = players[1];
            pcClicked = true;
            whoWon();
            myTurn();
        } else if (pcTile.classList.contains('myTiles') || pcTile.classList.contains('pcTiles') && victory == false) {
            pcTurn();
        }
    };

    function whoWon() {
        const winRow1 = [0, 1, 2];
        const winRow2 = [3, 4, 5];
        const winRow3 = [6, 7, 8];
        const winRow4 = [0, 3, 6];
        const winRow5 = [1, 4, 7];
        const winRow6 = [2, 5, 8];
        const winRow7 = [2, 4, 6];
        const winRow8 = [0, 4, 8];
        const winRows = [winRow1, winRow2, winRow3, winRow4, winRow5, winRow6, winRow7, winRow8];
        for (let i = 0; i < winRows.length; i++) {
            if (victory == false) {
                whichLetter(winRows[i]);
            }

        }
        // if (tilesCounter == 9 && victory == false) {
        //     console.log('draw');
        //     document.getElementById('gameBox3').style.display = '';
        // }
    }

    function whichLetter(winRow) {
        let tilesCounter = 0;
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].classList.contains('myTiles') || tiles[i].classList.contains('pcTiles')) {
                tilesCounter += 1;
            }
        }
        for (let i = 0; i < winRow.length; i++) {
            if (tiles[winRow[0]].classList.contains('myTiles') && tiles[winRow[1]].classList.contains('myTiles') && tiles[winRow[2]].classList.contains('myTiles')) {
                console.log('you won');
                victory = true;
                // myScore += 1;
                // scores(myScore);
                document.getElementById('gameBox1').style.display = '';
                break;     
            } else if (tiles[winRow[0]].classList.contains('pcTiles') && tiles[winRow[1]].classList.contains('pcTiles') && tiles[winRow[2]].classList.contains('pcTiles')) {
                console.log('you lose');
                victory = true;
                document.getElementById('gameBox2').style.display = '';
                break;
            } else if (tilesCounter == 9 && victory == false) {
                console.log('draw');
                document.getElementById('gameBox3').style.display = '';
            } else {
                console.log('go on');
                break;
            }
        }
    }

    // function scores() {
    //     myScore += 1;
    //     console.log("Dein score ist " + myScore);
    // }
});
