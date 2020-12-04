// First Challenge
ageInDays = ()=>{
    let age = prompt("What Is Your Age :-");
    let AgeInDays = (age)* 365;
    let h1 = document.createElement("h1");
    let TextAns = document.createTextNode("Your Age is " + AgeInDays + " in Days");
    h1.setAttribute("id","ageInDays");
    h1.appendChild(TextAns);
    console.log(h1);
    document.getElementById("flex-result-1").appendChild(h1);
}

reset = () =>{
    document.getElementById("ageInDays").remove();
}

//Second Challenge
catGen = () =>{
    let image = document.createElement("img");
    let div = document.getElementById("cat");
    image.src = "https://source.unsplash.com/200x125/?cat";
    div.appendChild(image);
}

//Third Challenge
rpsFun = (YourChoice) =>{
    HumanChoice = YourChoice.id;
    BotChoice = Choice(RandomNum());
    console.log(BotChoice);

    result = Winner(HumanChoice,BotChoice);
    console.log(result);

    message = Message(result);
    console.log(message);

    rpsFinal(HumanChoice,BotChoice,message);
}

RandomNum = () =>{
    return Math.floor(Math.random() *3);
}

Choice = (Num) =>{
    return ["rock","paper","scissors"][Num];
}

Winner = (HumanChoice,BotChoice) =>{
    rpsDatabasse = {
        "rock":{"paper":0,"scissors":1,"rock":0.5},
        "paper":{"paper":0.5,"scissors":0,"rock":1},
        "scissors":{"paper":1,"scissors":0.5,"rock":0},
    };

    let YourChoice = rpsDatabasse[HumanChoice][BotChoice];
    let ComputerChoice= rpsDatabasse[BotChoice][HumanChoice];
    return [YourChoice,ComputerChoice];
}

Message = ([YourChoice,ComputerChoice]) =>{
    if (YourChoice == 0) {
        return {"message":"You Lost","color":"red"};
    }else if(YourChoice == 0.5){
        return {"message":"You Tied!","color":"yellow"};
    }else{
        return {"message":"You Won","color":"green"};
    }
}

rpsFinal = (HumanImageChoice,BotImageChoice,message)=>{
    let image = {
        "rock":document.getElementById("rock").src,
        "paper":document.getElementById("paper").src,
        "scissors":document.getElementById("scissors").src
    };

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    HumanDiv = document.createElement("div");
    // MessageDiv = document.createElement("div");
    // BotDiv = document.createElement("div");

    HumanDiv.innerHTML = "<img src='" + image[HumanImageChoice] + "'>";

    document.getElementById("flex-container-3").appendChild(HumanDiv);
}