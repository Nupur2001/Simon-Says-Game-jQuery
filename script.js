let gamePattern = [];
let userClickedPattern=[];
let buttonColours = ["green", "red", "yellow", "blue"];
let randomChosenColour;

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  //   let audio = new Audio("/sounds/" + randomChosenColour + ".mp3");
  //   console.log(audio);
  //   audio.play();

  $(".btn").click(function () {
    let userChosenColour=this.id;
    userClickedPattern.push(userChosenColour)
    setTimeout(animatePress(),100)
    console.log(userClickedPattern);
  });

//   Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColour) {
    $(".btn").addClass("pressed");
}

  //   .console.log($("#" + randomChosenColour));
  console.log($("randomChosenColour"));
  console.log(randomNumber);
  console.log(randomChosenColour);
}
console.log(nextSequence());
