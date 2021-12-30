/// <reference path="Player.ts" />

"use strict";

function startGame() {
    // starting a new game

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(5);
}

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`New game starting for player: ${name}`)
}
function postScore(score: number, playerName: string = 'MultiMath Player'): void {

    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    let scoreElement: HTMLLIElement | null = <HTMLLIElement>document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

function getInputValue(elementID: string): string | undefined {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}

logPlayer("Nazmia");

document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map

let logMessage = () => console.log('pass');


function logError(errorMsg: string): void {
    console.error(errorMsg);
}
/*
let myResult: Result = {
    playerName: 'Marie',
    score: 5,
    problemCount: 5,
    factor: 7
};

let player: Person = {
    name: 'nazmia',
    formatName: () => 'Den'
};*/

let firstPlayer: Player = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());
