let randomNumbner;
let displayCharacters = [];
let loses = [];
let minNum = 1
let maxNum = 10
let cry1 = Math.floor(Math.random() * 10) + 1;
let cry2 = Math.floor(Math.random() * 10) + 1;
let cry3 = Math.floor(Math.random() * 10) + 1;
let cry4 = Math.floor(Math.random() * 10) + 1;
let userScore = 0;



//generate random computer numner
//add it to the page
//generate random numbers for all the gems
//user total
// 
$(document).ready(function () {
    let beginNumberMin = 19;
    let beginNumberMax = 120;
    randomNumberFromRange(beginNumberMin, beginNumberMax);
    function randomNumberFromRange(min, max) {
        randomNumbner = (Math.floor(Math.random() * (max - min + 1) + min));
        $("#display")
            .text(randomNumbner)
    }
    $('#user').text(userScore)



    $(".crystals").on("click", function () {
        var crystal = $(this).attr("data-crystal");
        if (crystal === "crystal1") {
            userScore = userScore + cry1
            $('#user').text(userScore)
        } else if (crystal === "crystal2") {
            userScore = userScore + cry2
            $('#user').text(userScore)
        } else if (crystal === "crystal3") {
            userScore = userScore + cry3
            $('#user').text(userScore)
        } else (crystal === "crystal4"); {
            userScore = userScore + cry4
            $('#user').text(userScore)
        }
        console.log(userScore);
        if (userScore === randomNumbner){
        wins++;
        $("#Wins").text(Wins)
        }
    })

     
    })

   // $(".Wins").update(userScore === display); {
   //     alert(winner)

   // }