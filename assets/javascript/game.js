let randomNumber;
let displayCharacters = [];
let loses = [];
let minNum = 1
let maxNum = 10
let cry1 = Math.floor(Math.random() * 10) + 1;
$("#cry1").attr("value", cry1)
let cry2 = Math.floor(Math.random() * 10) + 1;
$("#cry2").attr("value", cry2)
let cry3 = Math.floor(Math.random() * 10) + 1;
$("#cry3").attr("value", cry3)
let cry4 = Math.floor(Math.random() * 10) + 1;
$("#cry4").attr("value", cry4)

//$(".crystals").attr("value", Math.floor(Math.random()* 10) + 1)

let userScore = 0;
let losses = 0;
let wins = 0;
//let .crysals = ...
//$#crystals.attr(value)


//generate random computer numner
//add it to the page
//generate random numbers for all the gems
//user total
// 
$(document).ready(function () {
    $("#winsCount").text(wins);
    $("#lossesCount").text(losses);
    $("#userScore").text(userScore);
    let beginNumberMin = 19;
    let beginNumberMax = 120;
    randomNumberFromRange(beginNumberMin, beginNumberMax);
    function randomNumberFromRange(min, max) {
        randomNumber = (Math.floor(Math.random() * (max - min + 1) + min));
        console.log(randomNumber)
        $("#randomNumber").text(randomNumber);

    }

    $(".crystals").on("click", function () {
        var crystal = parseInt($(this).attr("value"));
        userScore = userScore + crystal;
        $("#userScore").text(userScore);
        
        if (userScore === randomNumber){
            wins++;
            $("#WinsCount").text(wins);
            randomNumberFromRange(beginNumberMin, beginNumberMax);
            userScore = 0;
            $("#userScore").text(userScore);
        } else if(userScore > randomNumber){
        losses++;
        $("#lossesCount").text(losses);
        randomNumberFromRange(beginNumberMin, beginNumberMax);
        userScore = 0
        $("#userScore").text(userScore);
        }
    })


     
    })


    //make the value assignments for the crystals into a function.
    //put that function, as well as the randomNumberFromRange, userscore == 0, and jQuery user score into a function called reset.
    //use the reset function at the start (document.onload), when you win, and when you lose.