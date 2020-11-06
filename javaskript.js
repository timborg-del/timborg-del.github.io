setInterval(myFunction, 1000)

function myFunction() {
    let d = new Date();
    let n = d.toLocaleTimeString();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName = days[d.getDay()];
    document.getElementById("Time").innerHTML = dayName + " " + n;
}

function randomFunction() {
    let result = "";

    let userInput = document.getElementById("UserInput").value;
    console.log(userInput);
    let random = Math.floor(Math.random() * 0);
    if (random != userInput) {
        result = ("Wrong number!");


    }
    else {
        result = ("Great");


    }

    document.getElementById("GameResult").innerHTML = result;

}
countDown();
function countDown() {
    let countDownDate = new Date("Dec 24, 2020, 00:00:00").getTime();
    let interval = setInterval(function () {
        let now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / (1000));

        document.getElementById("CountDown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    }, 1000);
}

reversNumber();
function reversNumber() {
    
    let n = 65648;
    n = n + "";
    n = n.split("").reverse().join("");
    document.getElementById("ReverseNumber").innerHTML = n;

}

function sliceText()
{
    let newtext = "";
    let text = document.getElementById("UserInputText").value;
    for (let index = 0; index < text.length; index++) {
        
        for (let indexo = index +1;  indexo < text.length +1; indexo++) {
            
            newtext += text.slice(index, indexo)+ ", ";
            
            
        }
    }
    document.getElementById("textResult").innerHTML = newtext;
}
function sort()
{
  let text = document.getElementById("UserInputSort").value;
  let letters = text.split('');
  letters.sort();
  document.getElementById("sortResult").innerHTML = letters;
}




