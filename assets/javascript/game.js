//Runs script after page loads
$(document).ready(function() {

//Game variables

    var targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    var yourScore = 0;
    var yourWins = 0;
    var yourLosses = 0;
    var crystal1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var crystal2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var crystal3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var crystal4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);

//Function for score variables. Used to reset scores in function updateScores

    function scoreVariables() {
        crystal1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        crystal2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        crystal3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        crystal4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    }

//Sets Target Score    

    $("#target").text(targetScore);    

//Function for updating and resetting scores. Also displays win or lose message. 

    function updateScores() {
        if (yourScore === targetScore) {
            yourWins++;
            $("#message").html("Brilliant! You Win!");
            $("#wins").text(yourWins);
            targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
            $("#target").text(targetScore);
            yourScore = 0;
            $("#score").text(yourScore);
            setTimeout(function() {
                $('#message').html("");
            }, 3000);
            scoreVariables();

        } else if (yourScore > targetScore) {
            yourLosses++;
            $("#message").html("Aww... You Lose!");
            $("#losses").html(yourLosses);
            targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
            $("#target").text(targetScore);
            yourScore = 0;
            $("#score").text(yourScore);
            setTimeout(function() {
                $('#message').html("");
            }, 3000);
            scoreVariables();

        }
    }

//On click events for crystals to update scores.

    $("#pink").on("click", function() {
        yourScore += crystal1;
        $("#score").text(yourScore);
        updateScores();
    });

    $("#blue").on("click", function() {
        yourScore += crystal2;
        $("#score").text(yourScore);
        updateScores();
    });

    $("#rose").on("click", function() {
        yourScore += crystal3;
        $("#score").text(yourScore);
        updateScores();
    });

    $("#snot").on("click", function() {
        yourScore += crystal4;
        $("#score").text(yourScore);
        updateScores();
    });

});
