let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

let sceneOne = new Image();
sceneOne.src = "img/scene_one.jpg";

let sceneTwo = new Image();
sceneTwo.src = "img/scene_two.jpg";

let sceneThree = new Image();
sceneThree.src = "img/scene_three.jpg";

let sceneFour = new Image();
sceneFour.src = "img/scene_four.jpg";

let sceneFive = new Image();
sceneFive.src = "img/scene_five.jpg";

function showGameOne(){
	ctx.drawImage(sceneOne, 0 , 0);

	document.addEventListener("keydown", direction);

    function direction(event){
	  if(event.keyCode == 32){
		showGameTwo();
	}
	}

	ctx.fillStyle = "black";
    ctx.font = "25px Verdana";
    ctx.fillText("Waking up, he felt the sensation of dissolving something", 10, 100)

	ctx.fillStyle = "white";
    ctx.font = "30px Verdana";
    ctx.fillText("like a cocoon, releasing limbs.", 10, 140); 

    ctx.fillStyle = "black";
    ctx.font = "40px Verdana";
    ctx.fillText("Press space to continue!", 150, 570)
};

function showGameTwo(){
	ctx.drawImage(sceneTwo, 0 , 0);

	document.addEventListener("keydown", directionTwo);

    function directionTwo(event){
	    if(event.keyCode == 32){
		  showGameThree();
	}
	}

	ctx.fillStyle = "white";
    ctx.font = "25px Verdana";
    ctx.fillText("Gathering his strength and standing up, our hero felt", 10, 70)

    ctx.fillStyle = "white";
    ctx.font = "25px Verdana";
    ctx.fillText("that although he knew the places that he was now seeing,", 10, 100)

    ctx.fillStyle = "white";
    ctx.font = "40px Verdana";
    ctx.fillText("all this seemed to him somehow alien.", 10, 140)

    ctx.fillStyle = "white";
    ctx.font = "25px Verdana";
    ctx.fillText("Seized with a sense of uncertainty,", 10, 530)

    ctx.fillStyle = "white";
    ctx.font = "25px Verdana";
    ctx.fillText(" he went out into the street familiar from his memory...", 5, 570)

    ctx.fillStyle = "white";
    ctx.font = "30px Verdana";
    ctx.fillText("Press space to continue!", 210, 600)
};

function showGameThree(){
	ctx.drawImage(sceneTwo, 0 , 0);

	ctx.drawImage(sceneFour, 90 ,300, 300,200);

	ctx.drawImage(sceneFive, 420 , 300, 300,200);

	document.addEventListener("keydown", directionFour);

	function directionFour(event){
            		if(event.keyCode == 49){
		                showGameFour();
		}
            }

    document.addEventListener("keydown", directionFive);

	function directionFive(event){            	
            		if(event.keyCode == 50){
		                showGameFive(); 
		                }           	
            }

    ctx.fillStyle = "white";
    ctx.font = "30px Verdana";
    ctx.fillText("Pub(press '1')", 140, 290)

    ctx.fillStyle = "white";
    ctx.font = "30px Verdana";
    ctx.fillText("Square(press '2')", 440, 290)

    ctx.fillStyle = "white";
    ctx.font = "25px Verdana";
    ctx.fillText("I do not remember what I was supposed to do today ...", 50, 200)

    ctx.fillStyle = "white";
    ctx.font = "30px Verdana";
    ctx.fillText("Where should I go?", 210, 240)
}

function showGameFour(){
      ctx.drawImage(sceneThree, 0 ,0);

      ctx.fillStyle = "white";
      ctx.font = "25px Verdana";
      ctx.fillText("Good afternoon, people. Will I sit down? Thank you!", 10, 30)

      ctx.fillStyle = "white";
      ctx.font = "25px Verdana";
      ctx.fillText("What's the news in the village today? Everything is fine?", 10, 60)

      ctx.fillStyle = "white";
      ctx.font = "20px Verdana";
      ctx.fillText("Press enter to continue!", 520, 600)      
         
          document.addEventListener("keydown", directionSix);
      	   function directionSix(event) {
           if(event.keyCode == 13){
           ctx.fillStyle = "white";
           ctx.font = "25px Verdana";
           ctx.fillText("Good day, man! That's all right. But do you know,", 10, 120)

           ctx.fillStyle = "white";
           ctx.font = "21px Verdana";
           ctx.fillText("today is a very unusual day? ... The shadow opens the gates of the walls!", 10, 150)

           ctx.fillStyle = "white";
           ctx.font = "25px Verdana";
           ctx.fillText("What shadow, what walls?", 10, 210)

           ctx.fillStyle = "white";
           ctx.font = "21px Verdana";
           ctx.fillText("I should see them again ...", 10, 240)

           ctx.fillStyle = "white";
           ctx.font = "25px Verdana";
           ctx.fillText("What to see??", 10, 300)

           ctx.fillStyle = "white";
           ctx.font = "21px Verdana";
           ctx.fillText("More beer!We'll talk later.(press the space bar to exit the pub)", 10, 330)
	      }
      }
}      
  
function showGameFive(){
      ctx.drawImage(sceneFive, 0 ,0);
      
}

sceneOne.onload = showGameOne;
