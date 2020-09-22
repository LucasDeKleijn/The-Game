//Made by Lucas de Kleijn, Software Developer BOL4 at Davincicollege.
money = 20;
Q1 = prompt("You are a very thirsty, battle hardened man. You wish to drink 14 beers at chili's, but the way to chili's is perilous. Sitting at your tv, you can't control yourself anymore. You need those 14 beers. You have 20 bucks.\nYou: \n(1) Get up \n(2) Give up \n(3) Fart")
if (Q1 == 1) {
	GotUp()
}
else if (Q1 == 2) {
  alert("You decide to give up and keep watching tv. You are dissapointed.")
  document.write("You decide to give up and keep watching tv. <br>You are dissapointed. Bad ending.")
}
else if (Q1 == 3) {
  alert("You fart. Nothing happens. Congratulations.")
  document.write("You fart. Nothing happens. Bad ending.")
}
else {
	document.write("Wow.")
	Failure()
}
function GotUp() {
    alert("You get up and walk out the door.")
    document.write("You get up from your chair and walk out the door.\n")
    Q2 = prompt("You get up from your chair and decide to go get those 14 beers. You open your door and walk down the street. Suddenly, you're hit with the realisation that you didn't bring your map. <Ehh, I'll find my way> you proclaim. To your left you see an alley with 2 shady men. To your right is a construction site.\nYou: \n(1) Go left \n(2) Go right")
    if (Q2 == 1) {
    	Left()
    }
    else if (Q2 == 2) {
    	Right()
    }
    else {
    	Failure()
    }
}
function Left() {
	alert("You decide to go left.")
	document.write("<br>You go left, into the alley. <br>Two shady men approach you. <br>They wield katanas and threaten you.")
    Q3 = prompt("You go left, into the alley. The shady men approach you. They appear to be ninjas, wielding katanas. <Never should have come here> they say.\nYou: \n(1) Fight back (50% success)\n(2) Give them your money (money -20)\n(3) Dance-off")
    if (Q3 == 1) {
var fight = Math.random() * 100;
if (fight < 50) {
	document.write("<br> You attack the ninjas. <br>One tries to hit you with his katana. <br>You take it from him and kill him with it. <br>You scare off the second ninja and ditch the katana. <br>You climb up the alley.")
    	  alert("You attack the ninjas. One tries to hit you with his katana but you take it from him and kill him with it. You scare off the second ninja. You ditch the katana and climb up the alley.")
    	  AlleySurvive();
}
else {
    	    document.write("<br>You attack the ninjas, but you're outmatched. <br>One hits you with his katana, mortally wounding you. <br>They take your money and leave you to die. BAD END")
}
      }
      else if (Q3 == 2) {
money = 0
alert("You give them your money and they let you pass, but you're broke now.")
document.write("<br>You give them your money, and they let you pass. <br>You're now out of money, but alive. You climb up the alley.")
AlleySurvive()
      }
      else if (Q3 == 3) {
      	alert("You challenge them to a dance-off. They agree, and absolutely destroy your self-confidence by defeating you with ease.")
document.write("<br>You challenge them to a dance-off. <br>They agree, and start absolutely decimating you. <br>You stood no chance, and died of embarassment. BAD END")
      }
      else {
      	Failure()
      }
}
function AlleySurvive() {
	document.write("<br>You are above the alley. <br>You see Chili's in the distance. ")
	Q4 = prompt("You are above the alley. In the distance, you spot Chili's in all its glory. This fills you with determination. You need to get down. You see a difficult way to get down and a balcony with an open door.\n(1) Agility (20% success)\n(2) Jump\n(3) Enter the door")
	if (Q4 == 1) {
      var agility = Math.random() * 100;
      if (agility < 20) {
      	alert("You carefully climb down, and manage to survive.")
      	DescentSurvive()
      }
      else {
      	alert("You try to get down but you get stuck with no way of getting free. You accept your fate and live out the rest of your life stuck to a wall.")
      	document.write("<br>You try to get down, but fail miserably and get stuck. <br>You now live in despair, stuck to a wall forever.")
      }
    }
    else if (Q4 == 2) {
    	alert("You jump down, somehow landing in a hay bale and surviving.")
    	document.write("<br>You jump down, somehow landing in a hay bale and surviving.")
    	DescentSurvive()
    }
    else if (Q4 == 3) {
    	alert("You enter the door on the balcony, and are greeted by a ninja. He claims he knew you would come here, and shoots you with his gun.")
    	document.write("<br>You enter the door on the balcony. <br>Inside is a ninja with a gun. <br>He claims he knew you would come in here and shoots you. BAD END")
    }
    else {
    	Failure()
    }
}
function DescentSurvive() {
	document.write("<br>You are now in front of Chili's. <br>The leader of the ninjas awaits you at the entrance.")
	Q5 = prompt("You are now in front of Chili's. The leader of the ninjas awaits you. <I'm impressed you've gotten this far, but your journey ends here! Fight me, I dare you!> He says.\nYou:\n(1) Give up\n(2) Fight (10% success)\n(3) Reason")
	if (Q5 == 1) {
		document.write("<br>You gave up in front of Chili's, and the ninja murdered you. <br>You're a disgrace. BAD END")
		alert("You decide it's not worth it and give up.")
	}
	else if (Q5 == 2) {
		fight2 = Math.random() * 100;
		if (fight2 < 10) {
			document.write("<br>You decide to fight the leader of the ninjas. <br>He tries to kill you but you ultimately behead him.")
			alert("You attack the leader of the ninjas, screaming as you do so. He tries to slice you, but you grab his blade and yank it out of his hand. You then use his own katana to behead him, ultimately defeating him for good.")
			Chilis()
		}
		else {
			document.write("<br>You try to fight the leader of the ninjas, but he is too strong. <br>He defeats you easily and you die.")
			alert("<A shame really.> You try to fight the leader of the ninjas, but he is too strong. He defeats you easily and you die mere metres away from your goal.")
		}
	}
	else if (Q5 == 3) {
		document.write("<br>You try to reason with the leader of the ninjas.")
		alert("You decide to try to reason with the leader of the ninjas.")
		Q6 = prompt("<Muahahaha! I'll humor you this attempt!> He says.\n(1) <You can't do this! I only want 14 beers at Chilis!> (plead)\n(2) <You won't get away with this!> (threaten)\n(3) <I shall offer my services when I have gotten my 14 beers!> (offer services)")
		if (Q6 == 1) {
			document.write("<br>You plead to the leader of the ninjas. <br>He calls you a coward and behead you. BAD END")
			alert("You plead to the leader of the ninjas. <Really? PLEADING? YOU? I expected better from you. Perish!>")
		}
		else if (Q6 == 2) {
			document.write("<br>You threaten the leader of the ninjas. <br>He isn't amused, and beheads you instantly. BAD END")
			alert("You try to threaten the leader of the ninjas. <Muahaha! worthy final words! Now die!>")
		}
		else {
			document.write("<br>You offer your services to the ninjas. <br>The leader accepts and lets you pass.")
			alert("You offer your services to the ninjas. <Hmm, you are pretty skilled... Alright. I shall let you pass. Get your 14 beers and come straight back. I have a job for you.>")
			Chilis()
		}
	}
	else {
		Failure()
	}
}
function Right() {
	document.write("<br>You go right, into the construction site. There's 3 ways through.")
}
function Chilis() {
	document.write("<br>You enter Chili's. The bartender asks for money.")
	alert("You enter chilis. Finally, you can get your 14 beers. You order 14 beers, but the bartender explains he needs the money first.")
	if (money < 14) {
		alert("<You don't have enough money.> These words echo through your mind as you curl up and die of dissapointment.")
		document.write("<br>You didn't have enough money, and died of dissapointment. BAD END")
	}
	else {
		alert("<Thank you, have a good day lad> He says as you hand him the money. You finally have the 14 beers and can die happy.")
		document.write("<br>You hand him the money and get your 14 beers. GOOD END")
	}
}
function Failure() {
	document.write("<br>You couldn't input a number and should rethink your life choices.")
	alert("You're so incompetent, you couldn't input a number. The story ends without a conclusion.")
}