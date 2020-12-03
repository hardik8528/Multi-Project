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