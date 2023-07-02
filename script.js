let money = 0;
let honger = 100;
let Training = 100;
let Vrolijk = 100;
let gameover = 0;
let elementalBurst_win = false;
let CynoPic = document.querySelector ("#CynoPic")

// Timers

let moneyclock = setInterval(getMoney, 500);
let clock1 = setInterval(depleteH, 350);
let clock2 = setInterval(depleteT, 360);
let clock3 = setInterval(depleteV, 370);

// Bars

statbar_honger = document.querySelector("statbar_honger");
statbar_training = document.querySelector("statbar_training");
statbar_vrolijk = document.querySelector("statbar_vrolijk");

document.addEventListener("keydown", (w) => alert ("Cynoooo"))

// Fill functiens
document.getElementById("btn_honger").onclick = function fillHonger() {
	if (honger <= 99 && honger != 0) {
		honger += 2;
		document.getElementById("statbar_honger").value = honger;
	}
	else if (honger == 0) {
		honger += 0;
	}
}

document.getElementById("btn_training").onclick = function fillTraining() {
	if (Training <= 99 && Training != 0) {
		Training += 2;
		document.getElementById("statbar_training").value = Training;
	}
	else if (Training == 0) {
		Training += 0;
	}
}

document.getElementById("btn_vrolijk").onclick = function fillVrolijk() {
	if (Vrolijk <= 99 && Training != 0) {
		Vrolijk += 2;
		document.getElementById("statbar_vrolijk").value = Vrolijk;
	}
	else if (Vrolijk == 0) {
		Vrolijk += 0;
	}
}

function getMoney() {
	if (honger > 0 && Training > 0 && Vrolijk > 0) {
		money++;
		document.getElementById("moneyvalue").value = "$" + money;
	}
}

// Gameover check

function gameovercheck() {
	if (honger == 0 && Training == 0 && Vrolijk == 0 && gameover == 0) {
		alert("Game Over!");
		gameover++;
		CynoPic.src = "./Images/Cynogameover.png"
	}
}

// Item functions

document.getElementById("btn_item1").onclick = function AdeptusTemptationEffect() {
	if (honger == 0 && money >= 150 && gameover == 0) {
		money -= 150;
		honger += 50;
		clock1 = setInterval(depleteH, 350);
		depleteH();
	}
}

document.getElementById("btn_item2").onclick = function KoopeenwapenEffect() {
	if (Training == 0 && money >= 200 && gameover == 0) {
		money -= 200;
		Training += 50;
		clock2 = setInterval(depleteT, 360);
		depleteT();
		CynoHandler();
	}
}

document.getElementById("btn_item3").onclick = function KoopantidepressivaEffect() {
	if (Vrolijk == 0 && money >= 300 && gameover == 0) {
		money -= 300;
		Vrolijk += 50;
		clock3 = setInterval(depleteV, 370);
		depleteV();
		CynoHandler();
	}
}

document.getElementById("btn_item4").onclick = function ElementalBurst() {
	if (elementalBurst_win == false && money >= 1000) {
		money -= 1000;
		elementalBurst_win = true;
		clearInterval(clock1);
		clearInterval(clock2);
		clearInterval(clock3);
		clearInterval(moneyclock);
		CynoPic.src = "./Images/Cynoelementalburst.png"
		alert("Gefeliciteerd! jij hebt Cyno tot de krijger gemaakt die hij is!");
	}
}

// Deplete functions

function depleteH() {
	if (honger == 0) {
		clearInterval(clock1);
		alert("Cyno verhongerd!");
		gameovercheck();
	}
	else {
		honger--;
		document.getElementById("statbar_honger").value = honger;
	}
}

function depleteT() {
	if (Training == 0) {
		clearInterval(clock2);
		alert("Cyno verveelt zich te erg!");
		gameovercheck();
	}
	else {
		Training--;
		document.getElementById("statbar_training").value = Training;
	}
}

function depleteV() {
	if (Vrolijk == 0) {
		clearInterval(clock3);
		alert("Cyno is depressief!");
		gameovercheck();
	}
	else {

		Vrolijk--;

		document.getElementById("statbar_vrolijk").value = Vrolijk;
	}
}


