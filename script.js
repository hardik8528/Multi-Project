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