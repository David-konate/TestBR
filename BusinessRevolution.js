
let essai = 0
var countTache = 1
var count = 0;
var nbValid = 0;
var nbNotVal = 0


const MAX_QUESTIONS = 7;

document.getElementById("BtnReset").addEventListener("click", function() {
 	for (var i = 1; i < MAX_QUESTIONS+1 ; i++) {
 		document.getElementById('tache'+ i).checked = false
 	}
 	nbValid=0
 	progressBarFull1.style.width = `${nbValid / MAX_QUESTIONS) * 100}%`;
 	progressBarFull1.innerHTML = nbValid ;
}
);

function move1(){

	const progressBarFull1 =
	document.getElementById('progressBarFull1');

	if (document.getElementById('tache1').checked === true){
			nbValid++
	}
	if (document.getElementById('tache1').checked === false){
			nbValid--
	}


progressBarFull1.style.width = `${(nbValid / MAX_QUESTIONS) * 100}%`;
progressBarFull1.innerHTML = `${Math.round(nbValid / MAX_QUESTIONS) * 100}%`;

if ((nbValid / MAX_QUESTIONS) === 1 ) {
	alert("F\u00e9licitation !!!")
}
}
/*--------------------------------------------------------------*/

function move2(){

	const progressBarFull1 =
	document.getElementById('progressBarFull1');

	if (document.getElementById('tache2').checked === true){
			nbValid++
	}
	if (document.getElementById('tache2').checked === false){
			nbValid--
	}

	
progressBarFull1.style.width = `${(nbValid / MAX_QUESTIONS) * 100}%`;
progressBarFull1.innerHTML = `${(nbValid / MAX_QUESTIONS) * 100}%`;
if ((nbValid / MAX_QUESTIONS) === 1 ) {
	alert("F\u00e9licitation !!!")
}

}


function move3(){

	const progressBarFull1 =
	document.getElementById('progressBarFull1');

	if (document.getElementById('tache3').checked === true){
			nbValid++
	}
	if (document.getElementById('tache3').checked === false){
			nbValid--
	}

progressBarFull1.style.width = `${(nbValid / MAX_QUESTIONS) * 100}%`;
progressBarFull1.innerHTML = `${(nbValid / MAX_QUESTIONS) * 100}%`;
if ((nbValid / MAX_QUESTIONS) === 1 ) {
	alert("F\u00e9licitation !!!")
}


/*--------------------------------------------------------------*/



}
function move4(){

	const progressBarFull1 =
	document.getElementById('progressBarFull1');

	if (document.getElementById('tache4').checked === true){
			nbValid++
	}
	if (document.getElementById('tache4').checked === false){
			nbValid--
	}

progressBarFull1.style.width = `${(nbValid / MAX_QUESTIONS) * 100}%`;
progressBarFull1.innerHTML = `${(nbValid / MAX_QUESTIONS) * 100}%`;
if ((nbValid / MAX_QUESTIONS) === 1 ) {
	alert("F\u00e9licitation !!!")
}


/*--------------------------------------------------------------*/



}
function move5(){

	const progressBarFull1 =
	document.getElementById('progressBarFull1');

	if (document.getElementById('tache5').checked === true){
			nbValid++
	}
	if (document.getElementById('tache5').checked === false){
			nbValid--
	}

progressBarFull1.style.width = `${(nbValid / MAX_QUESTIONS) * 100}%`;
progressBarFull1.innerHTML = `${(nbValid / MAX_QUESTIONS) * 100}%`;
if ((nbValid / MAX_QUESTIONS) === 1 ) {
	alert("F\u00e9licitation !!!")
}


/*--------------------------------------------------------------*/



}
function move6(){

	const progressBarFull1 =
	document.getElementById('progressBarFull1');

	if (document.getElementById('tache6').checked === true){
			nbValid++
	}
	if (document.getElementById('tache6').checked === false){
			nbValid--
	}

progressBarFull1.style.width = `${(nbValid / MAX_QUESTIONS) * 100}%`;
progressBarFull1.innerHTML = `${(nbValid / MAX_QUESTIONS) * 100}%`;
if ((nbValid / MAX_QUESTIONS) === 1 ) {
	alert("F\u00e9licitation !!!")
}


/*--------------------------------------------------------------*/

}
function move7(){

	const progressBarFull1 =
	document.getElementById('progressBarFull1');

	if (document.getElementById('tache7').checked === true){
			nbValid++
	}
	if (document.getElementById('tache7').checked === false){
			nbValid--
	}

progressBarFull1.style.width = `${(nbValid / MAX_QUESTIONS) * 100}%`;
progressBarFull1.innerHTML = `${(nbValid / MAX_QUESTIONS) * 100}%`;
if ((nbValid / MAX_QUESTIONS) === 1 ) {
	alert("F\u00e9licitation !!!")
}

}


