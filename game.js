var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];


var  started  = false;
count = 0;

var levelCount = 1;

$("body").keydown(function(){
    if (!started) {
    $("#level-title").text("Level " + levelCount);
    nextSequence();
    started = true;
  }
}
);  


$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
//   console.log(userClickedPattern+" usr ptrn");
  playSound(userChosenColour);

  animatePress(userChosenColour);
  
    checkAnswer(userClickedPattern.length-1);
   
  
});



function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    }
    else{
        startOver();
    }
    
    
}

function startOver(){
    $("h1").text("GameOver Press Any Key To Restart The Game.");
        $('body').addClass("game-over")
        setTimeout(function(){$('body').removeClass("game-over")}, 500);

        gamePattern = [];
        userClickedPattern = [];
        levelCount = 1; 
        started = false;   
}








function nextSequence() {

  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
//   console.log(gamePattern+"game patrn");
  

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour)
  $("h1").text("Level "+levelCount)
  levelCount++;
}



function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}




function animatePress(currentColour){
    $("."+currentColour).addClass("pressed")
    setTimeout(function() {$("."+currentColour).removeClass("pressed") } ,100);
}




// for(var i = 0; i<10; i++){
//     nextSequence();
// }
// console.log(randomNumber);





// console.log($("h1"));
// console.log($("#level-title"));


// console.log(randomChoosenColour)    
// console.log($("#"+randomChoosenColour))
// console.log($("#"+randomChoosenColour).attr("background-color"))


// $("#"+randomChoosenColour).css("background-color", "black")

// var audio = new Audio("./blue.mp3");
// audio.play();

// var audio = new Audio( "./sounds/blue.mp3");
// audio.play();


// $("#"+randomChoosenColour, function() {
    
    // setTimeout(function() { $("#"+randomChoosenColour).fadeOut('slow').fadeIn('slow');} , 5);
    
    // setTimeout(function() { $("#"+randomChoosenColour).fadeOut().fadeIn();} ,0);

    // console.log("checking") 
    // setTimeout(function() { $("#"+randomChoosenColour).css('background-color','randomChoosenColour'); } , 5); 
// });





