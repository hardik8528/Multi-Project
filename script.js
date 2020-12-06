// First Challenge
ageInDays = () => {
    let age = prompt("What Is Your Age :-");
    let AgeInDays = (age) * 365;
    let h1 = document.createElement("h1");
    let TextAns = document.createTextNode("Your Age is " + AgeInDays + " in Days");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(TextAns);
    // console.log(h1);
    document.getElementById("flex-result-1").appendChild(h1);
}

reset = () => {
    document.getElementById("ageInDays").remove();
}

//Second Challenge
catGen = () => {
    let image = document.createElement("img");
    let div = document.getElementById("cat");
    image.src = "https://source.unsplash.com/200x125/?cat";
    div.appendChild(image);
}

//Third Challenge
rpsFun = (YourChoice) => {
    HumanChoice = YourChoice.id;
    BotChoice = Choice(RandomNum());
    // console.log(BotChoice);

    result = Winner(HumanChoice, BotChoice);
    // console.log(result);

    message = Message(result);
    // console.log(message);

    rpsFinal(HumanChoice, BotChoice, message);
}

RandomNum = () => {
    return Math.floor(Math.random() * 3);
}

Choice = (Num) => {
    return ["rock", "paper", "scissors"][Num];
}

Winner = (HumanChoice, BotChoice) => {
    rpsDatabasse = {
        "rock": { "paper": 0, "scissors": 1, "rock": 0.5 },
        "paper": { "paper": 0.5, "scissors": 0, "rock": 1 },
        "scissors": { "paper": 1, "scissors": 0.5, "rock": 0 },
    };

    let YourChoice = rpsDatabasse[HumanChoice][BotChoice];
    let ComputerChoice = rpsDatabasse[BotChoice][HumanChoice];
    return [YourChoice, ComputerChoice];
}

Message = ([YourChoice, ComputerChoice]) => {
    if (YourChoice == 0) {
        return { "message": "You Lost!", "color": "red" };
    } else if (YourChoice == 0.5) {
        return { "message": "You Tied!", "color": "yellow" };
    } else {
        return { "message": "You Won!", "color": "green" };
    }
}

rpsFinal = (HumanImageChoice, BotImageChoice, message) => {
    let image = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    };

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    HumanDiv = document.createElement("div");
    MessageDiv = document.createElement("div");
    BotDiv = document.createElement("div");

    HumanDiv.innerHTML = "<img src='" + image[HumanImageChoice] + "' width='150px' height='150px' style='box-shadow: 0px 10px 50px rgba(37, 50, 233,1);'>";
    MessageDiv.innerHTML = "<h1 style='color:" + message["color"] + "; font-size:60px; padding:30px;'>" + message["message"] + "</h1>";
    BotDiv.innerHTML = "<img src='" + image[BotImageChoice] + "' width='150px' height='150px' style='box-shadow: 0px 10px 50px rgba(233, 38, 23,1);'>";

    document.getElementById("flex-container-3").appendChild(HumanDiv);
    document.getElementById("flex-container-3").appendChild(MessageDiv);
    document.getElementById("flex-container-3").appendChild(BotDiv);
}

//Forth Challenge 
let AllButton = document.getElementsByTagName("button");

let ColorHistory = [];
for (let i = 0; i < AllButton.length; i++) {
    ColorHistory.push(AllButton[i].classList[2]);
}

ColorChange = (ButtonColor) => {
    if (ButtonColor.value == "red") {
        ButtonRed();
    } else if (ButtonColor.value == "green") {
        ButtonGreen();
    } else if (ButtonColor.value == "random") {
        ButtonRandom();
    } else {
        ButtonReset();
    }
}

ButtonRed = () => {
    for (let i = 0; i < AllButton.length; i++) {
        AllButton[i].classList.remove(AllButton[i].classList[2]);
        AllButton[i].classList.add("btn-danger");
    }
}

ButtonGreen = () => {
    for (let i = 0; i < AllButton.length; i++) {
        AllButton[i].classList.remove(AllButton[i].classList[2]);
        AllButton[i].classList.add("btn-success");
    }
}

ButtonReset = () => {
    for (let i = 0; i < AllButton.length; i++) {
        AllButton[i].classList.remove(AllButton[i].classList[2]);
        AllButton[i].classList.add(ColorHistory[i]);
    }
}

ButtonRandom = () => {
    let Choice = ["btn-primary", "btn-success", "btn-warning", "btn-danger"];
    for (let i = 0; i < AllButton.length; i++) {
        let Random = Math.floor(Math.random() * 4)
        AllButton[i].classList.remove(AllButton[i].classList[2]);
        AllButton[i].classList.add(Choice[Random]);
    }
}

//Fifth Challenge

let data = {
    "you": { "ScoreSpan": "#Your-Result", "div": "#Your-Box", "Score": 0 },
    "dealer": { "ScoreSpan": "#Dealer-Result", "div": "#Dealer-Box", "Score": 0 },
    "cards": ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'K', 'Q'],
    "cardValue": { "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 10, "K": 10, "Q": 10, "A": [1, 11] },
    "wins": 0,
    "losses": 0,
    "draws": 0,
    "isStand": false,
    "turnOver": false,
}

const YOU = data["you"];
const DEALER = data["dealer"];

let hitSound = new Audio("./BlackJack/sound/swish.m4a");
let WinSound = new Audio("./BlackJack/sound/cash.mp3");
let LossSound = new Audio("./BlackJack/sound/aww.mp3");

document.querySelector("#hit").addEventListener("click", blackjackHit);

document.querySelector("#deal").addEventListener("click", blackjackDeal);

document.querySelector("#stand").addEventListener("click", blackjackStand);

function blackjackHit() {
    if (data['isStand'] == false) {
        let card = randomCard();
        Show(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function randomCard() {
    let random = Math.floor(Math.random() * 13);
    return data['cards'][random];
}

function Show(card, activePlayer) {
    if (activePlayer['Score'] <= 21) {
        let SendImage = document.createElement("img");
        SendImage.src = `./BlackJack/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(SendImage);
        hitSound.play();
    }
}

function blackjackDeal() {
    if (data['turnOver'] = true) {
        data['isStand'] = false;
        let yourImage = document.querySelector("#Your-Box").querySelectorAll('img');

        let dealerImage = document.querySelector("#Dealer-Box").querySelectorAll('img');

        for (let i = 0; i < yourImage.length; i++) {
            yourImage[i].remove();
        }

        for (let i = 0; i < dealerImage.length; i++) {
            dealerImage[i].remove();
        }

        YOU['Score'] = 0;
        DEALER['Score'] = 0;

        document.querySelector('#Your-Result').textContent = 0;
        document.querySelector('#Dealer-Result').textContent = 0;

        document.querySelector('#Your-Result').style.color = '#FFFFFF';
        document.querySelector('#Dealer-Result').style.color = '#FFFFFF';

        document.querySelector('#Main-Result').textContent = "Let's Play";
        document.querySelector('#Main-Result').style.color = "black";

        data['turnOver'] = true;
    }
}

function updateScore(card, activePlayer) {
    // id score + 11 is less than or equal 21 the value of 'A' will be count as 11 otherwise count as 1
    if (card == 'A') {
        if (activePlayer['Score'] + data['cardValue'][card][1] <= 21) {
            activePlayer['Score'] += data['cardValue'][card][1];
        } else {
            activePlayer['Score'] += data['cardValue'][card][0];
        }
    } else {
        activePlayer['Score'] += data['cardValue'][card];
    }

}

function showScore(activePlayer) {
    if (activePlayer['Score'] <= 21) {
        document.querySelector(activePlayer['ScoreSpan']).textContent = activePlayer['Score'];
    } else {
        document.querySelector(activePlayer['ScoreSpan']).textContent = "Bust!"
        document.querySelector(activePlayer['ScoreSpan']).style.color = "red"
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function blackjackStand() {

    data['isStand'] = true;
    while (DEALER['Score'] < 16 && data['isStand'] == true) {
        let card = randomCard();
        Show(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(750);
    }
    data['turnOver'] = true;
    let winner = ComputeWinner();
    ShowResult(winner);

}

function ComputeWinner() {
    let winner;
    if (YOU['Score'] <= 21) {
        if (YOU['Score'] > DEALER['Score'] || DEALER['Score'] > 21) {
            winner = YOU;
            data['wins']++;
        } else if (YOU['Score'] < DEALER['Score']) {
            winner = DEALER;
            data['losses']++;
        } else if (YOU['Score'] == DEALER['Score']) {
            data['draws']++;
        }
    } else if (YOU['Score'] > 21 && DEALER['Score'] <= 21) {
        winner = DEALER;
        data['losses']++;
    } else if (YOU['Score'] > 21 && DEALER['Score'] > 21) {
        data['draws']++;
    }

    console.log('Winner is', winner);
    return winner;
}

function ShowResult(winner) {
    let message, messageColor;
    if (data['turnOver'] == true) {

        if (winner == YOU) {
            document.querySelector('#wins').textContent = data['wins'];
            message = 'You Won!';
            messageColor = 'green';
            WinSound.play();
        } else if (winner == DEALER) {
            document.querySelector('#losses').textContent = data['losses'];
            message = 'You Lost!';
            messageColor = 'red';
            LossSound.play();
        } else {
            document.querySelector('#draws').textContent = data['draws'];
            message = 'You Drew!';
            messageColor = 'black';
        }

        document.querySelector('#Main-Result').textContent = message;

        document.querySelector('#Main-Result').style.color = messageColor;
    }
}