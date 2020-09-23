//Made by Lucas de Kleijn, Software Developer BOL4 at Davincicollege.
money = 20;
WorkerFail = 1;
flip = 1;
Start();
function Start() {
	console.log("Beginning.");
    Q1 = prompt("You are a very thirsty, battle hardened man. You wish to drink 14 beers at chili's, but the way to chili's is perilous. Sitting at your tv, you can't control yourself anymore. You need those 14 beers. You have 20 bucks.\nYou: \n(1) Get up \n(2) Give up \n(3) Fart")
	if (Q1 == 1) {
	GotUp()
    }
    else if (Q1 == 2) {
        alert("You decide to give up and keep watching tv. You are dissapointed.")
        document.write("You decide to give up and keep watching tv. <br>You are dissapointed. BAD ENDing.")
    }
    else if (Q1 == 3) {
        alert("You fart. Nothing happens. Congratulations.")
        document.write("You fart. Nothing happens.")
        Start();
    }
    else {
	    document.write("Wow.")
	    Failure()
    }
}
function GotUp() {
	console.log("Got up.");
    alert("You get up and walk out the door.")
    document.write("You get up from your chair and walk out the door.\n")
    Q2 = prompt("You get up from your chair and decide to go get those 14 beers. You open your door and walk down the street. Suddenly, you're hit with the realisation that you didn't bring your map. <Ehh, I'll find my way> you proclaim. To your left you see an alley with 2 shady men. To your right is a construction site.\nYou: \n(1) Go left \n(2) Go right")
    if (Q2 == 1) {
    	Left()
    }
    else if (Q2 == 2) {
    	alert("You go right.")
    	Right()
    }
    else {
    	Failure()
    }
}
function Left() {
	console.log("Left side.");
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
        alert("You attack the ninjas, but they defeat you.")
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
	console.log("Alley.");
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
	console.log("Front Chillis Left Side.");
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
	console.log("Right Side.");
	document.write("<br>You go right, into the construction site. <br>There's 3 ways through.")
	Q3 = prompt("You examine the construction site, and come to the conclusion that there's 3 ways through. A worker offers you a way through in exchange for money. You have 20 euros.\nYou:\n(1) Offer money\n(2) Parkour up (40% success)\n(3) Threaten the workers")
	if (Q3 == 1) {
	    if (WorkerFail == 1) {
	    	document.write("You offer the worker money.")
		    alert("<Alright, give me a fair offer and I'll let you through>")
		    passage = prompt("How much money will you offer? (Please input a number between 1-20)")
		    if (passage >= 6) {
			    document.write("You convinced the worker to let you through")
			    alert("<Yes, this will do nicely.. come with me.>")
			    document.write("<br>You've passed the construction site.")
			    money = (money - 6)
			    ConstructionSurvive();
		    }
		    else if (passage <= 5) {
			    document.write("You failed to convince the worker to let you through.")
			    alert("<Did you just try to give me " + passage + " euros? I can't even buy a premium coffee with this! Get out of my sight!>")
			    WorkerFail = 2;
			    Right();
		    }
		}
		else if (WorkerFail == 2) {
			document.write("<br>You try to offer the worker money again. <br>He doesn't seem pleased.")
			alert("<You again? I told you to get out of here after that unworthy offer. If I see you one more time, you won't get out of here alive!>")
			WorkerFail = 3
			Right();
		}
		else if (WorkerFail == 3) {
			document.write("The worker has had enough, and has shot you. BAD END")
			alert("<That does it, time to die!>")
		}
	}
	else if (Q3 == 2) {
	    document.write("<br>You try to parkour through the construction site")
		parkour = Math.random() * 100;
		if (parkour < 40) {
			document.write(", but fall to your death. BAD END")
			alert("You decide to parkour across, but realise you're bad at parkour. You fail the first jump and fall to your death.")
		}
		else {
			document.write(", and succeed in doing so.")
			alert("You decide to parkour across, nailing every jump as if you were born to do this.")
			document.write("<br>You've passed the construction site.")
			ConstructionSurvive();
		}
	}
	else if (Q3 == 3) {
		document.write("<br>You try to threaten the workers. <br>They're surprisingly violent and kill you. BAD END")
		alert("<Did you just try to threaten 7 workers? You're done for.> were the last words you heard before you were beat to a pulp.")
	}
	else {
		Failure();
	}
}
function ConstructionSurvive() {
	console.log("Construction Site.");
	Q4 = prompt("You passed the construction site, and spot a poster advertising Chilis. Just 1 euro for a beer! Next to the poster are directions to get to Chilis. The directions lead through a dangerous part of town. What will you do?\nYou:\n(1) Go through town\n(2) Go through the sewers\n(3) Do a flip")
    if (Q4 == 1) {
    	document.write("<br>You decide to go to Chilis through town.")
    	alert("You decide to risk going through the dangerous part of town.")
    	Town();
    }
    else if (Q4 == 2) {
    	document.write("<br>You decide to go through the sewers.")
    	alert("You decide the town is too dangerous, and enter the sewers.")
    	Sewers();
    }
    else if (Q4 == 3) {
        alert("You do a flip. What an amazing flip. What now?")
        if (flip == 1) {
        	document.write("<br>You do a flip.")
        	flip = 2
        	ConstructionSurvive();
        }
        else {
            ConstructionSurvive();
        }
    }
}
function Town() {
	console.log("Town.");
	document.write("<br>You encounter 5 ninjas.")
    Q5 = prompt("As you're walking through town, you encounter 5 ninjas! They aren't armed, but they're dangerous.\nYou:\n(1) Masterfully defeat the ninjas (50% success)\n(2) Flee\n(3) Dance-off")
    if (Q5 == 1) {
    	fiveninjas = Math.random() * 100;
    	if (fiveninjas < 50) {
    		document.write("<br>You defeat the ninjas.")
    		alert("You kill 1 ninja, kill 2 others with the body, then masterfully kick out the last 2 ninjas shins. Victory!")
    		TownSurvive();
    	}
    	else {
    		document.write("You are killed by the ninjas. BAD END")
    		alert("You try to fight the ninjas, but there's just too many of them. They grab you and execute you.")
    	}
    }
    else if (Q5 == 2) {
    	document.write("<br>You attempt to flee, but the ninjas catch up and kill you.")
    	alert("You attempt to flee, after which the ninjas mock you. They catch up with you and make you draw your final breath.")
    }
    else if (Q5 == 3) {
    	document.write("<br>You destroy the ninjas in a dance-off.")
    	alert("You challenge the 5 ninjas to a dance-off. They agree, and get absolutely decimated. You look one in the eye as he trembles in your presence. You walk past them.")
    	TownSurvive();
    }
    else {
    	Failure();
    }
}
function TownSurvive() {
	console.log("Cookie Salesman.");
	Q7 = prompt("You get past the ninjas, and a stranger offers you a cookie foor 10 euros.\nYou:\n(1) Buy a cookie.\n(2) Don't buy a cookie.")
	if (Q7 == 1) {
		alert("You buy a cookie.");
		money = (money - 10);
		FrontChilis();
	}
	else if (Q7 == 2) {
		alert("You don't buy a cookie.")
		FrontChilis();
	}
	else {
		Failure();
	}
}
function FrontChilis() {
	console.log("Front Chilis Right Side.");
	document.write("<br>You arrive at the front of Chilis.")
	Q8 = prompt("You arrive at the fron of Chilis to find it enclosed. There's been a stabbing, but that won't stop you from getting your 14 beers. A cop stops you.\nYou:\n(1) Explain the situation\n(2) Fight\n(3) Dance-off")
	if (Q8 == 1) {
		document.write("<br>You convince the cop to let you in.")
		alert("You explain the situation to the cop. <You remind me of myself, when I was young. Go on through.>")
		Chilis();
	}
	else if (Q8 == 2) {
		document.write("<br>You attack the cop, and he shoots you. BAD END")
		alert("For some reason you think attacking a cop is a good idea. He shoots you, and you bleed out on the curb of Chilis.")
	}
	else if (Q8 == 3) {
		document.write("<br>You try to challenge the cop to a dance-off, but he just shoots you. BAD END")
		alert("Before you can utter the words <dance-off>, he shoots you with his gun. It's like the universe has had enough of you.")
	}
	else {
		Failure();
	}
}
function Sewers() {
	console.log("Sewers.");
	Q6 = prompt("In the sewers you find a giant rat with a crown. He seems to be holding a key of some sort.\nYou:\n(1) Seize the crown (40% success)\n(2) Back off")
	if (Q6 == 1) {
		rat = Math.random() * 100;
		if (rat < 40) {
			document.write("You defeat the rat king, claiming the crown.")
			alert("You walk up to the rat king, take his crown and smack him in the face. He dies and you wear the crown. You are now the rat king, as is evident by the violent shaking of the rats in your presence. GOOD END?")
		}
		else {
			document.write("You attempt to kill the rat king, but he eats you alive. BAD END")
			alert("You walk up to the rat king, not realising the danger you're in. He bites off your legs, and eats you alive over the span of 5 days.")
		}
	}
	else if (Q6 == 2) {
		document.write("<br>You decide to leave the sewers and go through town anyways.")
		alert("You decide fighting a rat king is too dangerous, and leave the sewers to go through town.")
		Town();
	}
	else {
		Failure();
	}
}
function Chilis() {
	console.log("Chilis.");
	document.write("<br>You enter Chili's. The bartender asks for money.")
	alert("You enter chilis. Finally, you can get your 14 beers. You order 14 beers, but the bartender explains he needs the money first.")
	if (money <= 13) {
		alert("<You don't have enough money.> These words echo through your mind as you curl up and die of dissapointment.")
		document.write("<br>You didn't have enough money, and died of dissapointment. BAD END")
	}
	else {
		alert("<Thank you, have a good day lad> He says as you hand him the money. You finally have the 14 beers and can die happy.")
		document.write("<br>You hand him the money and get your 14 beers. GOOD END")
	}
}
function Failure() {
	console.log("Incompetence.");
	document.write("<br>You couldn't input a number and should rethink your life choices.")
	alert("You're so incompetent, you couldn't input a number. The story ends without a conclusion.")
}
function Refresh() {
	window.location.href = window.location.href.split( '#' )[0];
}